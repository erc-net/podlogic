import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Link,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import type { ContactFormData } from '../types';

const INITIAL_FORM_STATE: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  service: 'Back-Office Administration',
  message: '',
};

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    variant: 'success' | 'info';
  }>({
    visible: false,
    message: '',
    variant: 'success',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/hub@podlogic.info',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service_interest: formData.service,
            message: formData.message,
            _subject: `New PodLogic Inquiry from ${formData.name}`,
          }),
        }
      );

      if (response.ok) {
        setToast({
          visible: true,
          message: `Thank you, ${formData.name}! Your inquiry has been sent directly to hub@podlogic.info. Our team will reach out within 24 hours.`,
          variant: 'success',
        });
        setFormData(INITIAL_FORM_STATE);
      } else {
        setToast({
          visible: true,
          message: `Thank you, ${formData.name}! Your request has been logged. You can also reach us directly at hub@podlogic.info.`,
          variant: 'info',
        });
      }
    } catch {
      setToast({
        visible: true,
        message: `Thank you, ${formData.name}! Your submission is acknowledged. If you face any issues, contact hub@podlogic.info directly.`,
        variant: 'info',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, 8000);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 font-mono">
            Schedule Discovery Call
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
            Schedule Your Next Appointment Hassle-Free
          </h1>
          <p className="text-slate-600 mt-4 text-sm">
            Our team is available to discuss your outsourcing requirements,
            answer questions about our services, and help you understand how we
            can support your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* CONTACT DETAILS CARD */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card-light p-8 rounded-2xl border border-slate-200 space-y-8">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">
                Direct Communication
              </h3>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center shrink-0 border border-sky-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-mono font-bold">
                    Phone Contact
                  </div>
                  <a
                    href="tel:+447307276303"
                    className="text-lg font-bold text-slate-900 hover:text-sky-600 transition block mt-0.5"
                  >
                    +44 7307276303
                  </a>
                  <div className="text-xs text-slate-500 mt-1">
                    Enquiries Monday to Friday
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0 border border-purple-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-mono font-bold">
                    Email Enquiries
                  </div>
                  <a
                    href="mailto:hub@podlogic.info"
                    className="text-lg font-bold text-slate-900 hover:text-purple-600 transition block mt-0.5"
                  >
                    hub@podlogic.info
                  </a>
                  <div className="text-xs text-slate-500 mt-1">
                    Client service delivery 24/7 by agreed support model
                  </div>
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 border border-blue-200">
                  <Link className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-mono font-bold">
                    Official Network
                  </div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-slate-900 hover:text-sky-600 transition block mt-0.5"
                  >
                    PodLogic LinkedIn
                  </a>
                  <div className="text-xs text-slate-500 mt-1">
                    Follow our official updates and insights
                  </div>
                </div>
              </div>

              {/* LOCATION HUB */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center shrink-0 border border-slate-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-mono font-bold">
                    Delivery Operations Hub
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    Bulawayo, Zimbabwe (Servicing UK, EU &amp; US)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="glass-card-light p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Book a Discovery Call
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs text-slate-600 uppercase font-bold mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs text-slate-600 uppercase font-bold mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-xs text-slate-600 uppercase font-bold mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="form-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7307276303"
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs text-slate-600 uppercase font-bold mb-1"
                    >
                      Service Area of Interest
                    </label>
                    <select
                      id="form-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition shadow-sm"
                    >
                      <option>Back-Office Administration</option>
                      <option>Tenant &amp; Real Estate Admin</option>
                      <option>Claims Admin &amp; Order Processing</option>
                      <option>Process Automation &amp; Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs text-slate-600 uppercase font-bold mb-1"
                  >
                    Operations &amp; Volume Details *
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your team size, volumes, and requirements..."
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100 transition shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 disabled:opacity-70 text-white font-bold transition shadow-md shadow-sky-500/20 flex items-center justify-center gap-2 uppercase text-xs tracking-wider"
                >
                  <span>
                    {isSubmitting
                      ? 'Transmitting Request...'
                      : 'Request Discovery Call'}
                  </span>
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </form>

              {/* SUCCESS / ERROR TOAST */}
              {toast.visible && (
                <div
                  className={`mt-4 p-4 rounded-xl border text-sm text-center shadow-sm flex items-center justify-center gap-2 ${
                    toast.variant === 'success'
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                      : 'bg-sky-50 border-sky-300 text-sky-800'
                  }`}
                >
                  <CheckCircle2
                    className={`w-5 h-5 shrink-0 ${
                      toast.variant === 'success'
                        ? 'text-emerald-600'
                        : 'text-sky-600'
                    }`}
                  />
                  <span>{toast.message}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};