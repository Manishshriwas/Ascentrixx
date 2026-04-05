import React from 'react';
import { Cloud, Shield, BarChart3, Code2, Network, Database, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Seamless migration, deployment and management of cloud environments across AWS, Azure, and GCP with zero downtime.',
    tags: ['AWS', 'Azure', 'GCP'],
    color: '#00d4ff',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security posture with threat detection, compliance frameworks, and 24/7 SOC monitoring.',
    tags: ['SOC', 'SIEM', 'Zero Trust'],
    color: '#0060e6',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Bespoke software solutions, APIs, and integrations built to align perfectly with your operational workflows.',
    tags: ['React', 'Node.js', 'Java'],
    color: '#7c3aed',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable intelligence with advanced analytics platforms and real-time dashboards.',
    tags: ['BI', 'ML', 'ETL'],
    color: '#059669',
  },
  {
    icon: Network,
    title: 'DevOps & CI/CD',
    description: 'Accelerate delivery cycles with automated pipelines, containerization, and infrastructure-as-code practices.',
    tags: ['Docker', 'K8s', 'Terraform'],
    color: '#d97706',
  },
  {
    icon: Database,
    title: 'Managed IT Support',
    description: '360° managed services with proactive monitoring, helpdesk, and dedicated technical account management.',
    tags: ['24/7', 'SLA', 'Remote'],
    color: '#e11d48',
  },
];

const ServiceCard = ({ service, index }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-7 card-hover group relative overflow-hidden
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Subtle corner glow */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${service.color}15, transparent)` }} />

      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
        <Icon size={22} style={{ color: service.color }} />
      </div>

      <h3 className="font-heading font-600 text-white text-lg mb-3 group-hover:text-gradient transition-all duration-300">
        {service.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {service.tags.map((tag) => (
          <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md"
            style={{ background: `${service.color}10`, color: service.color, border: `1px solid ${service.color}20` }}>
            {tag}
          </span>
        ))}
      </div>

      <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-body text-slate-400 hover:text-accent-400 transition-colors duration-200 group/link">
        Learn More
        <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
      </a>
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-tag mb-4">Our Services</div>
          <h2 className="font-heading font-700 text-4xl md:text-5xl text-white mb-4">
            End-to-End IT <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            From infrastructure to analytics — everything your enterprise needs to operate at peak performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
