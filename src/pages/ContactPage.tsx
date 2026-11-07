import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { COMPANY_INFO, DEPARTMENTS } from '../data/companyData';
import { Mail, Phone, MapPin, Globe, Clock, Send, MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  const [selectedDept, setSelectedDept] = useState('electrical');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    lang === 'ar' 
      ? 'مرحباً شركة جي جي تكنووِيف، أود الاستفسار عن خدماتكم الهندسية.' 
      : 'Hello GG Tecknowave, I would like to inquire about your engineering services.'
  )}`;

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
          {t.contact.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {t.contact.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-bold border border-orange-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Riyadh Headquarters</span>
              </div>
              <h2 className="text-xl font-black text-white">{t.contact.infoTitle}</h2>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {t.contact.infoDesc}
              </p>
            </div>

            <div className="space-y-4 text-xs font-semibold text-slate-200">
              <div className="flex items-start gap-3 p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-bold">Address / Location</div>
                  <div className="text-white font-bold">{lang === 'ar' ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-bold">Direct Phone Line</div>
                  <a href={`tel:${COMPANY_INFO.phone}`} dir="ltr" className="text-white font-bold hover:text-amber-300 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-bold">Email Inquiry</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-bold hover:text-amber-300 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-bold">{t.contact.hoursTitle}</div>
                  <div className="text-white font-bold">{t.contact.hoursDesc}</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.contact.whatsappBtn}</span>
              </a>
            </div>
          </div>

          {/* Map Preview */}
          <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>Riyadh Malaz Location</span>
              </span>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-mono">Verified HQ</span>
            </div>
            <div className="h-44 rounded-2xl overflow-hidden bg-slate-200 border border-slate-200">
              <iframe
                title="GG Tecknowave Riyadh Location Map"
                src="https://maps.google.com/maps?q=Malaz,Riyadh,Saudi%20Arabia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900">
            {t.contact.formTitle}
          </h2>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-slate-900">{t.contact.successTitle}</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">{t.contact.successDesc}</p>
              <button
                onClick={() => { setSubmitted(false); setName(''); setEmail(''); setMessage(''); }}
                className="px-6 py-2.5 text-xs font-bold text-white tecknowave-gradient-orange rounded-xl shadow"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="e.g. Abdullah Al-Ahmad"
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
                    placeholder="e.g. Al-Rashed Engineering"
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
                  placeholder="e.g. Riyadh Industrial City, KSA"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={4}
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
          )}
        </div>

      </div>

    </div>
  );
};
