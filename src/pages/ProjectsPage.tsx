import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { PROJECTS } from '../data/companyData';
import { MapPin, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';

interface ProjectsPageProps {
  onOpenRfqModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenRfqModal }) => {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
            {t.projects.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t.projects.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            {t.projects.subtitle}
          </p>
        </div>

        <button
          onClick={onOpenRfqModal}
          className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-white tecknowave-gradient-orange rounded-xl shadow-md hover:brightness-105 shrink-0"
        >
          <span>{t.projects.ctaBtn}</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 overflow-x-auto max-w-full">
        {[
          { id: 'all', label: t.projects.allTab },
          { id: 'solar', label: t.projects.solarTab },
          { id: 'mep', label: t.projects.mepTab },
          { id: 'electrical', label: t.projects.electricalTab },
          { id: 'construction', label: t.projects.constructionTab },
          { id: 'steel', label: t.projects.steelTab },
          { id: 'telecom', label: t.projects.telecomTab },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              filter === tab.id
                ? 'bg-orange-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const title = isRtl ? project.titleAr : project.titleEn;
          const categoryLabel = isRtl ? project.categoryLabelAr : project.categoryLabelEn;
          const location = isRtl ? project.locationAr : project.locationEn;
          const description = isRtl ? project.descriptionAr : project.descriptionEn;
          const specs = isRtl ? project.specsAr : project.specsEn;

          return (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-orange-500 transition-all duration-300 shadow-md hover:shadow-2xl group"
            >
              <div className="h-52 overflow-hidden bg-slate-900 relative">
                <img
                  src={project.image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-amber-400 border border-slate-700">
                  {categoryLabel}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <h2 className="text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {title}
                  </h2>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{location}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenRfqModal}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 rounded-xl text-xs font-bold transition-all"
                  >
                    <span>{t.projects.similarProjectBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
