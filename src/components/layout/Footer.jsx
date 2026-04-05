import React from 'react';
import { Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  Services: ['Cloud Infrastructure', 'Cybersecurity', 'IT Consulting', 'DevOps', 'Data Analytics'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
  Support: ['Documentation', 'Help Center', 'Status Page', 'SLA', 'Contact'],
};

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0060e6, #00d4ff)' }}>
                <Zap size={18} className="text-white" />
              </div>
              <span className="font-heading font-700 text-xl text-white">
                Nexa<span className="text-gradient">Core</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise IT solutions designed to accelerate your business with cutting-edge infrastructure and 24/7 expert support.
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a href="mailto:hello@nexacore.io" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Mail size={14} /> hello@nexacore.io
              </a>
              <a href="tel:+11234567890" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Phone size={14} /> +1 (123) 456-7890
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> San Francisco, CA 94105
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-600 text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-accent-400 text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-mono">
            © 2025 NexaCore IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#"
                className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-accent-400 hover:border-accent-400/30 transition-all duration-200">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
