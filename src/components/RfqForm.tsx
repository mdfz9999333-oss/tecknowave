import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { COMPANY_INFO, DEPARTMENTS } from '../data/companyData';
import { Mail, Phone, MapPin, Globe, CheckCircle, Send, X, ShieldCheck } from 'lucide-react';

interface RfqFormProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDeptId?: string;
}

export const RfqForm: React.FC<RfqFormProps> = ({ isOpen, onClose, preselectedDeptId }) => {
  const { lang, isRtl } = useLanguage();
  const t = TRANSLATIONS[lang];

  const [selectedDept, setSelectedDept] = useState<string>('electrical');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedDeptId) {
      setSelectedDept(preselectedDeptId);
    }
  }, [preselectedDeptId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 tecknowave-gradient-orange text-white flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold text-amber-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.contact.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              {t.contact.formTitle}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-6 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">{t.contact.successTitle}</h3>
                <p className="text-sm text-slate-600">
                  {t.contact.successDesc}
                </p>
              </div>

              <button
                onClick={resetForm}
                className="px-6 py-3 text-xs font-bold text-white tecknowave-gradient-orange rounded-xl shadow"
              >
                {isRtl ? 'إغلاق والعودة للموقع' : 'Done / Back to Website'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: RFQ Form Fields */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    {t.contact.selectServiceLabel}
                  </label>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {lang === 'ar' ? dept.titleAr : dept.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      {t.contact.fullNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Abdullah Al-Otaibi"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966-50XXXXXXX"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Al-Rashed Group"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    {t.contact.locationLabel}
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Riyadh Industrial City, Saudi Arabia"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project requirements, estimated timelines, or required equipment..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-extrabold text-white tecknowave-gradient-orange rounded-xl shadow-lg hover:brightness-105 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Processing...' : t.contact.submitBtn}</span>
                </button>
              </form>

              {/* Right Column: Direct Contact Info */}
              <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
                    {t.contact.infoTitle}
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-white">
                    {isRtl ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.contact.infoDesc}
                  </p>
                </div>

                <div className="space-y-4 text-xs font-semibold text-slate-200">
                  <div className="flex items-center gap-3 p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                    <span className="truncate">{COMPANY_INFO.email}</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span dir="ltr">{COMPANY_INFO.phone}</span>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{isRtl ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{COMPANY_INFO.website}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                  <span>Riyadh HQ</span>
                  <span>ISO 9001:2026</span>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};
