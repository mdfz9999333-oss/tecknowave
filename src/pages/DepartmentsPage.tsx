import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { DEPARTMENTS } from '../data/companyData';
import { Wrench, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface DepartmentsPageProps {
  onOpenRfqModal: (deptId?: string) => void;
}

export const DepartmentsPage: React.FC<DepartmentsPageProps> = ({ onOpenRfqModal }) => {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
          {t.departments.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {t.departments.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          {t.departments.subtitle}
        </p>
      </div>

      {/* ONE CONTINUOUS DEPARTMENTS LIST IN EXACT NUMERICAL ORDER (01 to 16) */}
      <div className="space-y-8">
        {DEPARTMENTS.map((dept) => {
          const title = isRtl ? dept.titleAr : dept.titleEn;
          const fullDesc = isRtl ? dept.fullDescAr : dept.fullDescEn;
          const bullets = isRtl ? dept.bulletsAr : dept.bulletsEn;
          const equipment = isRtl ? dept.equipmentAr : dept.equipmentEn;

          return (
            <div 
              key={dept.id} 
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-md hover:shadow-2xl hover:border-orange-400 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden"
            >
              <div className="lg:col-span-4 h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 relative shadow-inner">
                <img 
                  src={dept.images[0]} 
                  alt={title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute top-3 left-3 tecknowave-gradient-orange text-white font-mono font-black text-xs px-3 py-1 rounded-xl shadow border border-white/20">
                  DIV-{dept.numberBadge}
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{title}</h3>
                  <button
                    onClick={() => onOpenRfqModal(dept.id)}
                    className="px-5 py-2.5 text-xs font-bold text-white tecknowave-gradient-orange rounded-xl shadow hover:brightness-105 transition-all flex items-center gap-1.5"
                  >
                    <span>{t.services.getQuoteBtn}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {fullDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900 uppercase">
                      <ShieldCheck className="w-4 h-4 text-orange-600" />
                      <span>{t.departments.scopeTitle}</span>
                    </div>
                    <div className="space-y-1">
                      {bullets.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700 font-semibold">
                          <Check className="w-3 h-3 text-orange-500 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900 uppercase">
                      <Wrench className="w-4 h-4 text-amber-500" />
                      <span>{t.departments.equipTitle}</span>
                    </div>
                    <div className="space-y-1">
                      {equipment.map((e, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700 font-semibold">
                          <Check className="w-3 h-3 text-amber-500 shrink-0" />
                          <span>{e}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
