import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Cpu, Globe, ChevronDown } from 'lucide-react';

const floatingBadges = [
  { icon: Shield, label: 'ISO 27001', color: '#00d4ff', delay: '0s', pos: 'top-24 left-8 md:left-20' },
  { icon: Cpu, label: '99.9% Uptime', color: '#0060e6', delay: '2s', pos: 'top-32 right-8 md:right-20' },
  { icon: Globe, label: 'Global CDN', color: '#7c3aed', delay: '4s', pos: 'bottom-32 left-8 md:left-32' },
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0">
        <div className="blob w-96 h-96 bg-primary-500 absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <div className="blob w-80 h-80 bg-purple-600 absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
          style={{ animationDelay: '5s' }} />
        <div className="blob w-64 h-64 bg-accent-500 absolute top-3/4 left-1/2"
          style={{ animationDelay: '10s' }} />
      </div>

      {/* Floating badges */}
      {floatingBadges.map(({ icon: Icon, label, color, delay, pos }) => (
        <div key={label}
          className={`absolute ${pos} hidden sm:flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-mono animate-float`}
          style={{ animationDelay: delay, borderColor: `${color}30` }}>
          <Icon size={14} style={{ color }} />
          <span className="text-slate-300">{label}</span>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-tag mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse2" />
            Enterprise IT Services Provider
          </div>
        </div>

        <h1 className={`font-heading font-800 text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-white block">Technology That</span>
          <span className="text-gradient block">Transforms</span>
          <span className="text-gradient-white block">Your Business</span>
        </h1>

        <p className={`text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-body font-300 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          From cloud migration to cybersecurity, we deliver enterprise-grade IT solutions that scale with your ambitions and secure your future.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#contact" className="btn-primary">
            Start Your Journey <ArrowRight size={16} />
          </a>
          <a href="#services" className="btn-outline">
            Explore Services
          </a>
        </div>

        {/* Stats row */}
        <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-16 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '500+', label: 'Clients Worldwide' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24/7', label: 'Expert Support' },
            { value: '15yr', label: 'Industry Experience' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-heading font-700 text-2xl md:text-3xl text-gradient">{value}</div>
              <div className="text-slate-500 text-xs font-mono uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
};

export default Hero;
