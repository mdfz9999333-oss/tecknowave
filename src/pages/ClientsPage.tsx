import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { SATISFIED_CLIENTS } from '../data/companyData';
import { Building, ShieldCheck } from 'lucide-react';

export const ClientsPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  const topTier = SATISFIED_CLIENTS.slice(0, 6);
  const bottomTier = SATISFIED_CLIENTS.slice(6, 12);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
          {t.clients.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
          {t.clients.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          {t.clients.subtitle}
        </p>
      </div>

      <div className="space-y-8">
        {/* Tier 1 Card */}
        <div className="tecknowave-gradient-orange rounded-3xl p-6 sm:p-10 shadow-xl text-white relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-200" />
              <h2 className="text-xl font-black uppercase tracking-wider">
                {t.clients.tier1Title}
              </h2>
            </div>
            <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              Global Enterprise
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            {topTier.map((client, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all flex flex-col items-center justify-center text-center group min-h-[110px]"
              >
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:scale-105 transition-transform">
                  {client.logoText}
                </span>
                <span className="text-[11px] font-semibold text-amber-100/90 mt-1">
                  {lang === 'ar' ? client.categoryAr : client.categoryEn}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2 Card */}
        <div className="tecknowave-gradient-gold rounded-3xl p-6 sm:p-10 shadow-xl text-slate-950 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-950/15">
            <div className="flex items-center gap-3">
              <Building className="w-6 h-6 text-slate-900" />
              <h2 className="text-xl font-black uppercase tracking-wider">
                {t.clients.tier2Title}
              </h2>
            </div>
            <span className="text-xs font-bold bg-slate-950/10 px-3 py-1 rounded-full">
              Regional Leaders
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            {bottomTier.map((client, idx) => (
              <div 
                key={idx}
                className="bg-slate-950/10 backdrop-blur-md rounded-2xl p-6 border border-slate-950/15 hover:bg-slate-950/15 transition-all flex flex-col items-center justify-center text-center group min-h-[110px]"
              >
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 group-hover:scale-105 transition-transform">
                  {client.logoText}
                </span>
                <span className="text-[11px] font-semibold text-slate-900/80 mt-1">
                  {lang === 'ar' ? client.categoryAr : client.categoryEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
