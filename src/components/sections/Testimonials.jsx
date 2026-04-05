import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, HealthFirst Systems',
    quote: 'NexaCore modernized our entire cloud infrastructure within 90 days. Our deployment frequency increased 10x and we passed our HIPAA audit without a single finding. Truly transformative work.',
    rating: 5,
    avatar: 'SM',
    color: '#00d4ff',
  },
  {
    name: 'James Kowalski',
    role: 'VP Engineering, FinScope Capital',
    quote: 'The cybersecurity team detected and neutralized a sophisticated APT attack that our previous vendor missed entirely. Their SOC monitoring is in a league of its own.',
    rating: 5,
    avatar: 'JK',
    color: '#0060e6',
  },
  {
    name: 'Priya Nair',
    role: 'Director of IT, RetailPlex',
    quote: 'Migrated 200+ legacy systems to a microservices architecture with zero customer-facing downtime. The project was delivered 3 weeks ahead of schedule.',
    rating: 5,
    avatar: 'PN',
    color: '#7c3aed',
  },
  {
    name: 'David Chen',
    role: 'CEO, LogiChain Inc.',
    quote: 'Our data analytics platform now processes 50M events per day in real time. The insights we have access to have fundamentally changed how we make decisions.',
    rating: 5,
    avatar: 'DC',
    color: '#059669',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="relative py-28 px-6">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', filter: 'blur(60px)' }} />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-tag mb-4">Client Stories</div>
          <h2 className="font-heading font-700 text-4xl md:text-5xl text-white mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="gradient-border mb-8">
            <div className="glass-card rounded-2xl p-10 md:p-14 text-center relative">
              <Quote size={40} className="text-accent-400 opacity-30 mx-auto mb-6" />
              <p className="text-slate-200 text-xl md:text-2xl leading-relaxed font-body font-300 mb-8 max-w-3xl mx-auto">
                "{current.quote}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-700 text-sm text-white"
                  style={{ background: `linear-gradient(135deg, ${current.color}, ${current.color}80)` }}>
                  {current.avatar}
                </div>
                <div className="text-left">
                  <div className="font-heading font-600 text-white">{current.name}</div>
                  <div className="text-slate-400 text-sm">{current.role}</div>
                </div>
                <div className="flex items-center gap-0.5 ml-4">
                  {Array(current.rating).fill(0).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button onClick={prev}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-accent-400/30 transition-all">
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${i === active ? 'w-8 h-2 bg-accent-400' : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'}`}
                />
              ))}
            </div>

            <button onClick={next}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-accent-400/30 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
