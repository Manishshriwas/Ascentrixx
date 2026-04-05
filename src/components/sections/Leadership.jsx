import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const leaders = [
  {
    name: 'David Chen',
    role: 'CEO & Co-Founder',
    bio: '20+ years in enterprise tech. Ex-AWS VP. Led digital transformation for 3 Fortune 100 companies.',
    avatar: 'DC',
    gradient: 'linear-gradient(135deg, #0060e6, #00d4ff)',
    ring: 'rgba(0,212,255,0.4)',
  },
  {
    name: 'Sarah Williams',
    role: 'Chief Technology Officer',
    bio: 'MIT CS PhD. Cloud architecture expert. Built scalable infra for 50M+ user platforms.',
    avatar: 'SW',
    gradient: 'linear-gradient(135deg, #7c3aed, #0060e6)',
    ring: 'rgba(124,58,237,0.4)',
  },
  {
    name: 'Marcus Lee',
    role: 'Chief Security Officer',
    bio: 'Ex-NSA specialist. Certified CISSP & CISM with 18 years of cybersecurity field experience.',
    avatar: 'ML',
    gradient: 'linear-gradient(135deg, #059669, #00d4ff)',
    ring: 'rgba(5,150,105,0.4)',
  },
  {
    name: 'Priya Sharma',
    role: 'VP of Engineering',
    bio: 'Scaled engineering teams from 10 to 200+. Deep expertise in DevOps and cloud-native architectures.',
    avatar: 'PS',
    gradient: 'linear-gradient(135deg, #d97706, #e11d48)',
    ring: 'rgba(217,119,6,0.4)',
  },
];

const LeaderCard = ({ leader, index }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 text-center card-hover group transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Avatar */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-heading font-700 text-xl"
          style={{ background: leader.gradient }}>
          {leader.avatar}
        </div>
        <div className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ boxShadow: `0 0 0 3px ${leader.ring}, 0 0 20px ${leader.ring}` }} />
      </div>

      <h4 className="font-heading font-600 text-white text-base mb-1">{leader.name}</h4>
      <div className="text-xs font-mono text-accent-400 mb-3 tracking-wide">{leader.role}</div>
      <p className="text-slate-400 text-xs leading-relaxed mb-4">{leader.bio}</p>

      <div className="flex items-center justify-center gap-2">
        {[Linkedin, Twitter, Mail].map((Icon, i) => (
          <button key={i}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500 hover:text-accent-400 transition-all duration-200"
            style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.1)' }}>
            <Icon size={13} />
          </button>
        ))}
      </div>
    </div>
  );
};

const Leadership = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div className="mt-20">
      <div ref={ref} className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h3 className="font-heading font-700 text-3xl text-white mb-2">
          Meet Our <span className="text-gradient">Leadership Team</span>
        </h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          The minds behind NexaCore — seasoned experts driving innovation and delivering results.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {leaders.map((leader, i) => (
          <LeaderCard key={leader.name} leader={leader} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Leadership;
