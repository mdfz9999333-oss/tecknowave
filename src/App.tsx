import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { PageId } from './data/translations';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DepartmentsPage } from './pages/DepartmentsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { RfqForm } from './components/RfqForm';

function MainAppContent() {
  const { isRtl } = useLanguage();
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [preselectedDept, setPreselectedDept] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfq = (deptId?: string) => {
    setPreselectedDept(deptId);
    setRfqModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white flex flex-col justify-between ${isRtl ? 'rtl' : 'ltr'}`}>
      
      {/* Top Navbar with 7 Page Navigation & EN | AR Language Switcher */}
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenRfqModal={() => handleOpenRfq()}
      />

      {/* Main Multi-Page Body View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenRfqModal={handleOpenRfq} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage />
        )}
        {currentPage === 'services' && (
          <ServicesPage 
            onOpenRfqModal={handleOpenRfq} 
          />
        )}
        {currentPage === 'departments' && (
          <DepartmentsPage 
            onOpenRfqModal={handleOpenRfq} 
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage 
            onOpenRfqModal={() => handleOpenRfq()} 
          />
        )}
        {currentPage === 'clients' && (
          <ClientsPage />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenRfqModal={() => handleOpenRfq()}
      />

      {/* RFQ & Contact Inquiry Modal */}
      <RfqForm 
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        preselectedDeptId={preselectedDept}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
