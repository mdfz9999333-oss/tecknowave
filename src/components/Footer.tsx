import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, PageId } from '../data/translations';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, Phone, MapPin, Globe, ArrowUp, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenRfqModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRfqModal }) => {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    lang === 'ar' 
      ? 'مرحباً شركة جي جي تكنووِيف، أود الاستفسار عن خدماتكم الهندسية.' 
      : 'Hello GG Tecknowave, I would like to inquire about your engineering services.'
  )}`;

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden pt-16 pb-12 border-t border-slate-900">
      <div className="absolute top-0 left-0 right-0 h-2 tecknowave-gradient-orange"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => handleNav('home')} className="flex items-center shrink-0 text-left group">
              <div className="bg-white p-2 rounded-xl shadow-md transition-transform group-hover:scale-105 inline-block">
                <img 
                  src={COMPANY_INFO.logoUrl} 
                  alt="GG Tecknowave - We build together" 
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </button>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenRfqModal()}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow"
              >
                <span>{t.nav.requestQuote}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Page Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li><button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors">{t.nav.home}</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors">{t.nav.about}</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-amber-400 transition-colors">{t.nav.services}</button></li>
              <li><button onClick={() => handleNav('departments')} className="hover:text-amber-400 transition-colors">{t.nav.departments}</button></li>
              <li><button onClick={() => handleNav('projects')} className="hover:text-amber-400 transition-colors">{t.nav.projects}</button></li>
              <li><button onClick={() => handleNav('clients')} className="hover:text-amber-400 transition-colors">{t.nav.clients}</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors">{t.nav.contact}</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} dir="ltr" className="hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{isRtl ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-amber-400 font-bold">{COMPANY_INFO.website}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <div>
            © {new Date().getFullYear()} {isRtl ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}. {t.footer.rights}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
