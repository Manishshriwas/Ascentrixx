import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const leaders = [
  {
    name: 'Gajendra Kushwaha',
    role: 'Founder',
    bio: 'I focus on software management practices that enhance productivity and team collaboration. Interested in project planning, quality assurance, and efficient delivery of software systems and financial services',
    avatar: 'GK',
    gradient: 'linear-gradient(135deg, #0060e6, #00d4ff)',
    ring: 'rgba(0,212,255,0.4)',
  },
  {
    name: 'Komal Sen',
    role: 'Co-Founder',
    bio: 'Focused on website management, hosting. Ensures smooth operations and reliable service delivery.',
    avatar: 'KS',
    gradient: 'linear-gradient(135deg, #7c3aed, #0060e6)',
    ring: 'rgba(124,58,237,0.4)',
  },
];

const LeaderCard = ({ leader, index }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 text-center card-hover group 
      w-full max-w-xs transition-all duration-700 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Avatar */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl"
          style={{ background: leader.gradient }}
        >
          {leader.avatar}
        </div>
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            boxShadow: `0 0 0 3px ${leader.ring}, 0 0 20px ${leader.ring}`,
          }}
        />
      </div>

      <h4 className="text-white text-base font-semibold mb-1">
        {leader.name}
      </h4>

      <div className="text-xs text-accent-400 mb-3 tracking-wide">
        {leader.role}
      </div>

      <p className="text-slate-400 text-xs leading-relaxed mb-4">
        {leader.bio}
      </p>

      <div className="flex items-center justify-center gap-2">
        {[Linkedin, Twitter, Mail].map((Icon, i) => (
          <button
            key={i}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500 hover:text-accent-400 transition"
            style={{
              background: "rgba(0,212,255,0.05)",
              border: "1px solid rgba(0,212,255,0.1)",
            }}
          >
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Meet Our <span className="text-gradient">Leadership Team</span>
          </h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            The minds behind ASCENDRIXX — driving innovation and delivering results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {leaders.map((leader, i) => (
            <LeaderCard key={leader.name} leader={leader} index={i} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Leadership;