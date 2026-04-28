import React from 'react';
import { CheckCircle2, Award, Users, Layers } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Leadership from './Leadership';

const pillars = [
  { icon: Award, title: 'ISO Certified', desc: 'Fully certified under ISO 27001 and SOC 2 Type II compliance standards.' },
  { icon: Users, title: 'Expert Team', desc: '200+ certified engineers across cloud, security, and software disciplines.' },
  { icon: Layers, title: 'Full Stack', desc: 'From infrastructure to application layer — complete technology ownership.' },
];

const highlights = [
  'Dedicated technical account managers',
  '4-hour response SLA for critical issues',
  'Multi-cloud and hybrid environments',
  'Transparent pricing, no hidden fees',
  'GDPR and HIPAA compliance ready',
];

const About = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.15);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" className="relative py-28 px-6">
      {/* Decorative blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #0060e6, transparent)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div
          ref={leftRef}
          className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >
          <div className="section-tag mb-5">About ASCENDRIXX</div>
          <h2 className="font-heading font-700 text-4xl md:text-5xl text-white leading-tight mb-6">
            Trusted by <span className="text-gradient">Enterprises</span> Globally
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Founded in 2026, ASCENDRIXX has grown from a regional MSP into a globally recognized IT partner powering Fortune  companies and fast-scaling startups alike. Our philosophy is simple: technology should serve your business, not complicate it.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            We combine deep technical expertise with a consultative approach to deliver solutions that are not only robust today but future-proof for what comes next.
          </p>

          <ul className="space-y-3 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle2 size={16} className="text-accent-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary inline-flex">
            Talk to Our Team
          </a>
        </div>

        {/* Right */}
        <div
          ref={rightRef}
          className={`flex flex-col gap-5 transition-all duration-700 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        >
          {/* Main card */}
          <div className="gradient-border">
            <div className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {[
                  { value: '5+', label: 'Years Experience' },
                  { value: '50+', label: 'Happy Clients' },
                  { value: '99.9%', label: 'Uptime Average' },
                  { value: '200+', label: 'Team Members' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center p-4 rounded-xl"
                    style={{ background: 'rgba(0,96,230,0.05)', border: '1px solid rgba(0,96,230,0.1)' }}>
                    <div className="font-heading font-700 text-3xl text-gradient mb-1">{value}</div>
                    <div className="text-slate-400 text-xs font-mono uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent mb-6" />
              <p className="text-slate-400 text-sm text-center italic">
                "Consistently ranked in top global managed service providers since 2025."
              </p>
            </div>
          </div>

          {/* Pillars */}
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card rounded-xl p-5 flex items-start gap-4 card-hover">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                <Icon size={18} className="text-accent-400" />
              </div>
              <div>
                <h4 className="font-heading font-600 text-white text-sm mb-1">{title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <Leadership />
    </section>
  );
};

export default About;
