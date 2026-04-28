import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CTABanner = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(0,96,230,0.3) 0%, rgba(0,212,255,0.15) 50%, rgba(124,58,237,0.2) 100%)' }}>
          {/* Border */}
          <div className="absolute inset-0 rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.2), transparent, rgba(124,58,237,0.2))', zIndex: 0 }}>
            <div className="absolute inset-[1px] rounded-3xl"
              style={{ background: 'linear-gradient(135deg, rgba(2,8,24,0.9), rgba(6,15,36,0.95))' }} />
          </div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'linear-gradient(135deg, #0060e6, #00d4ff)' }}>
              <Zap size={24} className="text-white" />
            </div>
            <h2 className="font-heading font-700 text-3xl md:text-5xl text-white mb-4">
              Start Your Digital <span className="text-gradient">Transformation</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 text-lg">
              Join 50+ enterprises who've accelerated growth with ASCENDRIXX's enterprise IT platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Get a Free Assessment <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-outline">
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
