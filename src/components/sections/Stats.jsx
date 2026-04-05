import React, { useEffect, useRef } from 'react';
import { TrendingUp, Clock, Globe2, Star } from 'lucide-react';
import { useScrollAnimation, useCounter } from '../../hooks/useScrollAnimation';

const statData = [
  { icon: TrendingUp, end: 500, suffix: '+', label: 'Enterprise Clients', color: '#00d4ff', desc: 'Across 30+ countries' },
  { icon: Clock, end: 99, suffix: '.9%', label: 'Uptime Guaranteed', color: '#0060e6', desc: 'Industry-leading SLA' },
  { icon: Globe2, end: 30, suffix: '+', label: 'Countries Served', color: '#7c3aed', desc: 'Global infrastructure' },
  { icon: Star, end: 4, suffix: '.9★', label: 'Client Rating', color: '#d97706', desc: 'Based on 2400+ reviews' },
];

const StatCard = ({ stat, triggerAll }) => {
  const Icon = stat.icon;
  const { count, startCounter } = useCounter(stat.end, 2500);
  const triggered = useRef(false);

  useEffect(() => {
    if (triggerAll && !triggered.current) {
      triggered.current = true;
      startCounter();
    }
  }, [triggerAll, startCounter]);

  return (
    <div className="glass-card rounded-2xl p-8 text-center card-hover group relative overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, ${stat.color}08, transparent 70%)` }} />

      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}>
        <Icon size={24} style={{ color: stat.color }} />
      </div>

      <div className="font-heading font-800 text-5xl text-white mb-2">
        <span>{count}</span>
        <span className="text-gradient">{stat.suffix}</span>
      </div>

      <div className="font-heading font-600 text-white text-base mb-2">{stat.label}</div>
      <div className="text-slate-500 text-xs font-mono">{stat.desc}</div>
    </div>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="stats" className="relative py-28 px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-tag mb-4">By The Numbers</div>
          <h2 className="font-heading font-700 text-4xl md:text-5xl text-white mb-4">
            Results That <span className="text-gradient">Speak For Themselves</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Over 15 years of delivering measurable impact for enterprises across every major industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statData.map((stat) => (
            <StatCard key={stat.label} stat={stat} triggerAll={isVisible} />
          ))}
        </div>

        {/* Tech stack marquee */}
        <div className="mt-20 overflow-hidden">
          <p className="text-center text-slate-500 text-xs font-mono uppercase tracking-widest mb-6">
            Trusted Technologies
          </p>
          <div className="flex animate-marquee gap-10 w-max">
            {['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'Docker', 'Datadog', 'Splunk', 'Palo Alto', 'CrowdStrike',
              'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'Docker', 'Datadog', 'Splunk', 'Palo Alto', 'CrowdStrike'
            ].map((tech, i) => (
              <span key={i} className="text-slate-400 text-sm font-mono whitespace-nowrap px-5 py-2.5 rounded-full glass-card">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
