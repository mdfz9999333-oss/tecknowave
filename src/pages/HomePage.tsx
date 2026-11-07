import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, PageId } from '../data/translations';
import { COMPANY_INFO, FEATURED_6_SERVICES, PROJECTS, SATISFIED_CLIENTS } from '../data/companyData';
import { ArrowRight, Globe, ShieldCheck, Award, ChevronRight, MapPin, Calendar, Check, Snowflake, Building2, Zap, Layout, Truck, Eye } from 'lucide-react';
import { ServiceImageWithFallback } from '../components/ServiceImageWithFallback';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenRfqModal: (deptId?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Snowflake: <Snowflake className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenRfqModal }) => {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Hero Banner (Order: Navbar -> Full Building Image -> Text Below) */}
      <section className="relative pt-20 sm:pt-24 lg:pt-24 pb-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
          {/* STEP 2: IMAGE ON TOP - Full Rectangle, Clean Image (No Circle, No floating badges or text on top) */}
          <div className="w-full overflow-hidden rounded-2xl shadow-xl border border-slate-200/80 bg-slate-900 group">
            <img
              src="/assets/images/hero_tecknowave_building_1794054778502.jpg"
              alt="GG Tecknowave Corporate Building HQ"
              className="w-full h-[260px] sm:h-[380px] md:h-[460px] lg:h-[520px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* STEP 3: TEXT BELOW IMAGE - Clean White Background */}
          <div className="max-w-4xl mx-auto text-center space-y-6 pt-2">
            
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-xs sm:text-sm font-extrabold text-orange-700 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
              <span>{t.hero.companyName}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
              {t.hero.titleLine1} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Subtitle / Quote Tagline */}
            <p className="text-lg sm:text-xl font-black text-orange-600 tracking-tight uppercase">
              &quot;{t.hero.subTitle}&quot;
            </p>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              {t.hero.intro}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenRfqModal()}
                className="flex items-center gap-3 px-7 py-3.5 text-sm font-bold text-white tecknowave-gradient-orange rounded-xl shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-200 hover:border-slate-300 active:scale-95"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Metadata info */}
            <div className="pt-4 flex items-center justify-center gap-4 text-xs font-bold text-slate-500 flex-wrap">
              <div className="flex items-center gap-2 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
                <Globe className="w-4 h-4 text-orange-500" />
                <span className="text-slate-800 font-bold">{COMPANY_INFO.website}</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-bold">{t.hero.location}</span>
            </div>

          </div>

          {/* 4-Column KPI Stats Counter Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-900 text-white rounded-2xl shadow-xl relative overflow-hidden">
            <div className="p-3 border-r border-slate-800 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-black text-orange-500 font-mono tabular-nums">{t.hero.stats.divisions}</div>
              <div className="text-xs font-medium text-slate-400 mt-0.5">{t.hero.stats.divisionsLabel}</div>
            </div>
            <div className="p-3 border-r border-slate-800 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">{t.hero.stats.turnkey}</div>
              <div className="text-xs font-medium text-slate-400 mt-0.5">{t.hero.stats.turnkeyLabel}</div>
            </div>
            <div className="p-3 border-r border-slate-800 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-black text-orange-500 font-mono tabular-nums">{t.hero.stats.clients}</div>
              <div className="text-xs font-medium text-slate-400 mt-0.5">{t.hero.stats.clientsLabel}</div>
            </div>
            <div className="p-3 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">{t.hero.stats.hq}</div>
              <div className="text-xs font-medium text-slate-400 mt-0.5">{t.hero.stats.hqLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About & Why Choose Us Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              {t.about.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">{t.about.whoWeAreTitle}</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.about.whoWeAreDesc}
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold transition-all shadow"
            >
              <span>{isRtl ? 'اقرأ كامل قصة الشركة' : 'Read Full Corporate Story'}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {t.about.reasons.map((r, i) => (
              <div key={i} className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1.5">
                <div className="text-xs font-bold text-amber-400">0{i+1}</div>
                <div className="text-xs font-extrabold text-white">{r.title}</div>
                <div className="text-[11px] text-slate-400 line-clamp-2">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED 6 DEPARTMENTS PREVIEW ON HOME PAGE (01 - 06) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              {isRtl ? 'أبرز الأقسام والخدمات (01 - 06)' : 'Our Featured Departments (01 - 06)'}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              {isRtl ? 'الأقسام والحلول الهندسية الستة الرئيسية' : 'Featured Core Services & Solutions'}
            </h2>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="flex items-center gap-2 text-xs font-extrabold text-orange-600 hover:text-orange-700"
          >
            <span>{isRtl ? 'عرض كافة الخدمات والأقسام' : 'View All Services & Departments'}</span>
            <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_6_SERVICES.map((dept) => {
            const title = isRtl ? dept.titleAr : dept.titleEn;
            const shortDesc = isRtl ? dept.shortDescAr : dept.shortDescEn;
            const bullets = isRtl ? dept.bulletsAr : dept.bulletsEn;

            return (
              <div 
                key={dept.id} 
                className="group relative bg-white rounded-3xl border-2 border-slate-200 p-6 pt-12 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Number Badge (01, 02, 03, 04, 05, 06) */}
                <div className="absolute -top-4 left-6 z-10">
                  <div className="px-4 py-1.5 rounded-xl font-mono font-black text-sm shadow-md tecknowave-gradient-orange text-white border border-white/30">
                    {dept.numberBadge}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      {iconMap[dept.icon] || <Zap className="w-6 h-6" />}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors uppercase">
                      {title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium min-h-[3rem]">
                    {shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {bullets.slice(0, 4).map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                        <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span className="truncate">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* 3 Images Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                    {dept.images.map((img, i) => (
                      <div key={i} className="h-16 rounded-xl overflow-hidden bg-slate-900 relative">
                        <ServiceImageWithFallback
                          src={img}
                          alt={`${title} thumbnail ${i + 1}`}
                          title={title}
                          numberBadge={dept.numberBadge}
                          iconNode={iconMap[dept.icon]}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
                  <button
                    onClick={() => onNavigate('services')}
                    className="flex-1 py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 border border-slate-200"
                  >
                    <span>{isRtl ? 'المزيد التفاصيل' : 'Learn More'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    onClick={() => onOpenRfqModal(dept.id)}
                    className="flex-1 py-2.5 px-2 tecknowave-gradient-orange text-white rounded-xl text-xs font-bold transition-all hover:brightness-105 shadow flex items-center justify-center gap-1"
                  >
                    <span>{t.services.getQuoteBtn}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Featured Projects Preview */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                {t.projects.badge}
              </span>
              <h2 className="text-3xl font-black text-white">{t.projects.title}</h2>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
            >
              <span>{isRtl ? 'استعرض كامل المعرض' : 'Browse All Projects'}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((p) => {
              const title = isRtl ? p.titleAr : p.titleEn;
              const location = isRtl ? p.locationAr : p.locationEn;

              return (
                <div key={p.id} className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 flex flex-col justify-between">
                  <div className="h-44 bg-slate-950 overflow-hidden">
                    <img src={p.image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="text-amber-400 font-bold">{isRtl ? p.categoryLabelAr : p.categoryLabelEn}</span>
                      <span className="font-mono">{p.year}</span>
                    </div>
                    <h3 className="text-sm font-extrabold text-white line-clamp-2">{title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      <span className="truncate">{location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Satisfied Clients Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            {t.clients.badge}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">{t.clients.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {SATISFIED_CLIENTS.slice(0, 6).map((c, i) => (
            <div key={i} className="p-4 bg-slate-100 rounded-2xl border border-slate-200 text-center font-black text-slate-800 text-sm truncate">
              {c.logoText}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
