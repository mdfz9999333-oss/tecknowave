import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { DEPARTMENTS, DepartmentService } from '../data/companyData';
import { 
  Zap, Sun, Settings, Building2, ShieldCheck, 
  Hammer, Radio, Trees, Layout, Cog, Sparkles, 
  Snowflake, Truck, Check, ArrowRight, X, FileCheck, Eye,
  ChevronLeft, ChevronRight 
} from 'lucide-react';

import { ServiceImageWithFallback } from '../components/ServiceImageWithFallback';

interface ServicesPageProps {
  onOpenRfqModal: (deptId?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Snowflake: <Snowflake className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Settings: <Settings className="w-5 h-5" />,
  Hammer: <Hammer className="w-5 h-5" />,
  Radio: <Radio className="w-5 h-5" />,
  Trees: <Trees className="w-5 h-5" />,
  Cog: <Cog className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />
};

interface ServiceCardProps {
  dept: DepartmentService;
  onSelect: (dept: DepartmentService) => void;
  onOpenRfq: (deptId: string) => void;
  isRtl: boolean;
  t: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ dept, onSelect, onOpenRfq, isRtl, t }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % dept.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dept.images.length, isHovered]);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + dept.images.length) % dept.images.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % dept.images.length);
  };

  const title = isRtl ? dept.titleAr : dept.titleEn;
  const desc = isRtl ? dept.fullDescAr : dept.fullDescEn;
  const bullets = isRtl ? dept.bulletsAr : dept.bulletsEn;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-3xl border-2 border-slate-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
    >
      {/* TOP: Large Auto-sliding Image Slider with 3 Images */}
      <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden shrink-0">
        <ServiceImageWithFallback
          src={dept.images[currentImgIndex]}
          alt={`${title} visual ${currentImgIndex + 1}`}
          title={title}
          numberBadge={dept.numberBadge}
          iconNode={iconMap[dept.icon]}
          priority={currentImgIndex === 0}
          showOverlay={true}
        />

        {/* Number Badge floating over top */}
        <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} z-10`}>
          <div className="px-3.5 py-1.5 rounded-xl font-mono font-black text-xs shadow-lg tecknowave-gradient-orange text-white border border-white/30">
            {dept.numberBadge}
          </div>
        </div>

        {/* Prev / Next Navigation Arrows */}
        <button
          onClick={prevImage}
          className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-2' : 'left-2'} z-10 w-8 h-8 rounded-full bg-slate-950/60 hover:bg-orange-600 text-white flex items-center justify-center backdrop-blur-xs transition-all opacity-80 hover:opacity-100 shadow-md`}
          aria-label="Previous image"
        >
          <ChevronLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
        </button>

        <button
          onClick={nextImage}
          className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'left-2' : 'right-2'} z-10 w-8 h-8 rounded-full bg-slate-950/60 hover:bg-orange-600 text-white flex items-center justify-center backdrop-blur-xs transition-all opacity-80 hover:opacity-100 shadow-md`}
          aria-label="Next image"
        >
          <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
        </button>

        {/* 3 Slide Indicator Dots */}
        <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
          {dept.images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(dotIdx); }}
              className={`h-2 rounded-full transition-all ${
                currentImgIndex === dotIdx 
                  ? 'w-6 bg-orange-500' 
                  : 'w-2 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* MIDDLE: Icon + Title + Full Description + Full Key Points */}
      <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          
          {/* Icon & Title */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-xs">
              {iconMap[dept.icon] || <Zap className="w-5 h-5" />}
            </div>
            <h3 className="text-base font-black text-slate-900 group-hover:text-orange-600 transition-colors uppercase leading-tight">
              {title}
            </h3>
          </div>

          {/* Full Description (No truncation) */}
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            {desc}
          </p>

          {/* Full Key Points (No line-clamp) */}
          <div className="space-y-2 pt-3 border-t border-slate-100">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              {t.services.capabilitiesTitle}
            </div>
            <div className="space-y-1.5">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <Check className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM: 2 Full Buttons [Learn More & Scope] [Request Quote] */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
          <button
            onClick={() => onSelect(dept)}
            className="w-full sm:flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-slate-200 shrink-0"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span className="whitespace-nowrap">{isRtl ? 'المزيد والنطاق' : 'Learn More & Scope'}</span>
          </button>

          <button
            onClick={() => onOpenRfq(dept.id)}
            className="w-full sm:flex-1 py-2.5 px-3 tecknowave-gradient-orange text-white rounded-xl text-xs font-bold transition-all hover:brightness-105 shadow-md flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>{t.services.getQuoteBtn}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>

    </div>
  );
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenRfqModal }) => {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [selectedDept, setSelectedDept] = useState<DepartmentService | null>(null);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
          {t.services.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {t.services.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          {t.services.subtitle}
        </p>
      </div>

      {/* ONE CONTINUOUS SERVICES LIST IN EXACT SEQUENCE (01 to 16) - NO PARTS, NO DIVIDERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {DEPARTMENTS.map((dept) => (
          <ServiceCard
            key={dept.id}
            dept={dept}
            onSelect={setSelectedDept}
            onOpenRfq={onOpenRfqModal}
            isRtl={isRtl}
            t={t}
          />
        ))}
      </div>

      {/* Modal for Detailed Scope & Equipment Specs */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 sm:p-8 tecknowave-gradient-orange text-white">
              <button
                onClick={() => setSelectedDept(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-amber-200 text-xs font-bold uppercase tracking-widest mb-2">
                <FileCheck className="w-4 h-4" />
                <span>{t.services.modalTitle}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                {selectedDept.numberBadge} - {isRtl ? selectedDept.titleAr : selectedDept.titleEn}
              </h2>
            </div>

            <div className="p-6 sm:p-8 space-y-8 text-slate-800">
              <div className="space-y-3">
                <h3 className="text-base font-extrabold text-slate-900">{t.services.galleryTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedDept.images.map((imgSrc, idx) => (
                    <div key={idx} className="h-44 rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-slate-200">
                      <img
                        src={imgSrc}
                        alt={`${selectedDept.titleEn} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-extrabold text-slate-900">
                  {isRtl ? 'الملخص التنفيذي والنطاق العام' : 'Executive Overview & Engineering Scope'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {isRtl ? selectedDept.fullDescAr : selectedDept.fullDescEn}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="text-base font-extrabold text-slate-900">{t.services.capabilitiesTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(isRtl ? selectedDept.bulletsAr : selectedDept.bulletsEn).map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs font-semibold text-slate-800">
                      <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedDept.equipmentEn && selectedDept.equipmentEn.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h3 className="text-base font-extrabold text-slate-900">
                    {isRtl ? 'المعدات والتقنيات التخصصية' : 'Specialized Fleet & Technical Equipment'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(isRtl ? selectedDept.equipmentAr : selectedDept.equipmentEn).map((equip, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-amber-50/60 p-3 rounded-xl border border-amber-200/60 text-xs font-semibold text-slate-800">
                        <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{equip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedDept(null)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl"
                >
                  {t.services.closeBtn}
                </button>

                <button
                  onClick={() => {
                    const deptId = selectedDept.id;
                    setSelectedDept(null);
                    onOpenRfqModal(deptId);
                  }}
                  className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-white tecknowave-gradient-orange rounded-xl shadow-md hover:shadow-lg hover:brightness-105"
                >
                  <span>{t.services.getQuoteBtn}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
