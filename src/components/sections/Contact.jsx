import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'ascendrixxtechprivatelimited@gmail.com', href: 'mailto:hello@nexacore.io' },
  { icon: Phone, label: 'Phone', value: '+91 6394209789', href: 'tel:+11234567890' },
  { icon: MapPin, label: 'Office', value: 'Office No. 216, Second Floor, Vardhman Crown Mall, Sector 19-Dwarka, New Delhi 110075', href: '#' },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #0060e6, transparent)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-tag mb-4">Let's Talk</div>
          <h2 className="font-heading font-700 text-4xl md:text-5xl text-white mb-4">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Tell us about your project and one of our specialists will reach out within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info sidebar */}
          <div className={`lg:col-span-2 flex flex-col gap-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href}
                className="glass-card rounded-xl p-5 flex items-center gap-4 card-hover">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                  <Icon size={18} className="text-accent-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-mono uppercase tracking-wider">{label}</div>
                  <div className="text-white text-sm font-body">{value}</div>
                </div>
              </a>
            ))}

            {/* CTA card */}
            <div className="glass-card rounded-xl p-6 mt-2"
              style={{ background: 'linear-gradient(135deg, rgba(0,96,230,0.15), rgba(0,212,255,0.05))' }}>
              <h4 className="font-heading font-600 text-white mb-2">Emergency Support?</h4>
              <p className="text-slate-400 text-sm mb-4">Our 24/7 NOC is standing by for critical incidents.</p>
              <a href="tel:+916394209789" className="btn-outline text-sm py-2.5 px-5">
                Call Us Now
              </a>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={48} className="text-accent-400 mb-4" />
                  <h3 className="font-heading font-600 text-white text-xl mb-2">Message Sent!</h3>
                  <p className="text-slate-400">We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                      { name: 'email', label: 'Work Email', type: 'email', placeholder: 'john@company.com' },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2 block">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200
                            bg-dark-700 border border-white/5 focus:border-accent-400/40 focus:bg-dark-600"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2 block">Company</label>
                    <input
                      type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200
                        bg-dark-700 border border-white/5 focus:border-accent-400/40 focus:bg-dark-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2 block">Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200
                        bg-dark-700 border border-white/5 focus:border-accent-400/40">
                      <option value="" className="bg-dark-800">Select a service</option>
                      {['Cloud Infrastructure', 'Cybersecurity', 'Custom Development', 'Data & Analytics', 'DevOps', 'Managed IT'].map(s => (
                        <option key={s} value={s} className="bg-dark-800">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2 block">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Describe your challenge or requirement..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none
                        bg-dark-700 border border-white/5 focus:border-accent-400/40 focus:bg-dark-600"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
