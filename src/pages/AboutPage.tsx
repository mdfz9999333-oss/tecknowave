import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { COMPANY_INFO } from '../data/companyData';
import { CheckCircle2, Eye, Compass, HeartHandshake, Award, Users, Zap, ShieldCheck, Building, Check } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
          {t.about.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {t.about.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          {t.about.subtitle}
        </p>
      </div>

      {/* Main Corporate Story & Who We Are */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t.about.whoWeAreTitle}</span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900">
            {isRtl ? 'شركة تكنووِيف - التميز الهندسي وتكامل المقاولات' : 'GG Tecknowave Company Ltd - Multi-Disciplinary Engineering Leader'}
          </h2>

          <p className="text-slate-700 text-base leading-relaxed">
            {t.about.whoWeAreDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              isRtl ? 'إدارة مشاريع هندسية متكاملة' : 'Turnkey Project Engineering',
              isRtl ? 'مصانع ومعدات آلية حديثة' : 'Modernized Industrial Facilities',
              isRtl ? 'التزام تام بأخلاقيات المهنة' : 'Uncompromising Ethical Business',
              isRtl ? 'فرق فنية واستشارية مؤهلة' : 'ISO Certified Engineering Staff'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 bg-slate-100 p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-900">
                <Check className="w-4 h-4 text-orange-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-96 relative bg-slate-900">
            <img
              src="/assets/images/hero_tecknowave_building_1794054778502.jpg"
              alt="GG Tecknowave Corporate Facilities"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <div className="text-xs font-bold text-amber-400">Riyadh Headquarters</div>
                <div className="text-lg font-extrabold">{isRtl ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision, Mission & Philosophy */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            {t.vision.badge}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">{t.vision.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 tecknowave-gradient-gold text-slate-950 p-8 rounded-3xl shadow-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-black">{t.vision.foundationsTitle}</h3>
              <p className="text-sm font-semibold leading-relaxed">{t.vision.foundationsDesc}</p>
            </div>
            <div className="pt-4 border-t border-slate-950/15">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt="GG Tecknowave" 
                className="h-7 w-auto object-contain bg-white px-2 py-1 rounded-lg"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5 justify-between">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900">{t.vision.visionTitle}</h4>
                <p className="text-sm text-slate-700 font-semibold mt-1">&quot;{t.vision.visionDesc}&quot;</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900">{t.vision.missionTitle}</h4>
                <p className="text-sm text-slate-700 font-semibold mt-1">&quot;{t.vision.missionDesc}&quot;</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900">{t.vision.philosophyTitle}</h4>
                <p className="text-sm text-slate-700 font-semibold mt-1">&quot;{t.vision.philosophyDesc}&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center">{t.vision.coreValuesTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.vision.values.map((v, i) => {
            const icons = [<Award key={1} />, <Users key={2} />, <Zap key={3} />, <ShieldCheck key={4} />];
            return (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  {icons[i]}
                </div>
                <h3 className="text-base font-extrabold text-slate-900">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
