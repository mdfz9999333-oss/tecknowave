import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, PageId } from '../data/translations';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Menu, X, ArrowUpRight, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenRfqModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenRfqModal }) => {
  const { lang, toggleLang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'departments', label: t.nav.departments },
    { id: 'projects', label: t.nav.projects },
    { id: 'clients', label: t.nav.clients },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? 'shadow-sm py-2.5 border-b border-slate-200/90'
          : 'py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8 min-h-[52px]">
          
          {/* Official Client Logo — Clean top-left placement with balanced breathing room */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center shrink-0 py-1 pr-2 rounded-lg group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
            aria-label="GG Tecknowave Home"
          >
            <img
              src={COMPANY_INFO.logoUrl}
              alt="GG Tecknowave - We build together"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain block transition-opacity duration-200 group-hover:opacity-90"
            />
          </button>

          {/* 7 Page Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 text-xs xl:text-sm font-bold text-slate-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 px-1.5 transition-colors duration-200 whitespace-nowrap shrink-0 border-b-2 ${
                  currentPage === item.id
                    ? 'text-orange-600 border-orange-600 font-extrabold'
                    : 'border-transparent text-slate-700 hover:text-orange-600 hover:border-orange-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Controls: EN | AR Switcher, Phone & Request Quote Button */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            {/* EN | AR Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-orange-50/80 text-slate-800 hover:text-orange-600 border border-slate-200/90 hover:border-orange-200 text-xs font-black transition-colors whitespace-nowrap shrink-0"
              title="Switch Language / تغيير اللغة"
              aria-label="Switch Language / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className={lang === 'en' ? 'text-orange-600 font-extrabold' : 'text-slate-500'}>EN</span>
              <span className="text-slate-300">|</span>
              <span className={lang === 'ar' ? 'text-orange-600 font-extrabold' : 'text-slate-500'}>AR</span>
            </button>

            <span className="hidden xl:block w-px h-5 bg-slate-200 shrink-0" aria-hidden="true" />

            {/* Quick Call */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hidden xl:flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-orange-600 hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 tabular-nums"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span dir="ltr">{COMPANY_INFO.phone}</span>
            </a>

            {/* Request Quote Button */}
            <button
              onClick={() => onOpenRfqModal()}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white tecknowave-gradient-orange rounded-lg shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowUpRight className={`w-4 h-4 shrink-0 ${isRtl ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex lg:hidden items-center gap-2.5 shrink-0">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 border border-orange-200/70 text-orange-700 text-xs font-extrabold transition-colors"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-orange-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer for 7 Pages */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 pb-3 flex flex-col gap-1.5 text-slate-800 font-bold text-sm animate-in slide-in-from-top-2">
            <div className="py-2 px-2 flex items-center justify-between">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="GG Tecknowave - We build together"
                className="h-9 w-auto object-contain block"
              />
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2.5 px-3 text-left rounded-lg transition-colors flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-orange-50 text-orange-600 font-extrabold'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}

            <div className="pt-2.5 mt-1 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span dir="ltr">{COMPANY_INFO.phone}</span>
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenRfqModal(); }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-white tecknowave-gradient-orange rounded-lg shadow-sm"
              >
                <span>{t.nav.requestQuote}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
