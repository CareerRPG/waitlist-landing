'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Lightbulb, 
  Lightning, 
  Heart, 
  Gear, 
  Palette, 
  MagnifyingGlass, 
  Shield, 
  Star,
  Brain,
  Clock,
  ArrowsClockwise,
  Target,
  Briefcase,
  FireSimple
} from 'phosphor-react';

const neuroclassData = [
  {
    icon: Lightning,
    codename: 'Lumina',
    title: 'The Visioneer',
    subtitle: 'Dreamer & Innovator',
    description: 'Visionary, big-picture, future-focused, strategic thinking. Naturally connects abstract ideas into comprehensive frameworks.',
    traits: 'Creative • Strategic • Innovative',
    color: '#D9DDDC',
    bgColor: 'from-gray-50 to-gray-100/80',
    borderColor: 'border-gray-200',
    role: 'Support',
    careers: ['CEO', 'Product Manager', 'Strategy Consultant', 'Venture Capitalist', 'Chief Innovation Officer', 'Design Thinking Facilitator'],
  },
  {
    icon: FireSimple,
    codename: 'Crimsonix',
    title: 'The Executor',
    subtitle: 'Doer & Enforcer',
    description: 'Action-driven, decisive, goal-focused, momentum-oriented. Thrives on deadlines and clear targets with rapid execution.',
    traits: 'Decisive • Goal-Focused • Results-Driven',
    color: '#D63031',
    bgColor: 'from-red-50 to-red-100/80',
    borderColor: 'border-red-200',
    role: 'Warrior',
    careers: ['Sales Director', 'Operations Manager', 'Project Manager', 'Account Executive', 'Team Lead', 'Performance Coach'],
  },
  {
    icon: Heart,
    codename: 'Azura',
    title: 'The Empath',
    subtitle: 'Healer & Connector',
    description: 'Emotionally intuitive, harmony-seeking, relationally driven. Values emotional safety and deep understanding in all interactions.',
    traits: 'Empathetic • Collaborative • Intuitive',
    color: '#74B9FF',
    bgColor: 'from-blue-50 to-blue-100/80',
    borderColor: 'border-blue-200',
    role: 'Healer',
    careers: ['Human Resources', 'Therapist', 'Customer Success Manager', 'Social Worker', 'Team Facilitator', 'Community Manager'],
  },
  {
    icon: Gear,
    codename: 'Obsidia',
    title: 'The Architect',
    subtitle: 'Strategist & Optimizer',
    description: 'Systems thinker, structured, analytical, optimizer. Creates logical frameworks and notices patterns others miss.',
    traits: 'Analytical • Systematic • Detail-Oriented',
    color: '#6C5CE7',
    bgColor: 'from-purple-50 to-purple-100/80',
    borderColor: 'border-purple-200',
    role: 'Mage',
    careers: ['Software Engineer', 'Data Scientist', 'Business Analyst', 'Systems Architect', 'Process Engineer', 'Financial Analyst'],
  },
  {
    icon: Palette,
    codename: 'Solara',
    title: 'The Artisan',
    subtitle: 'Creator & Expressor',
    description: 'Expressive, experimental, aesthetic, creative-first. Values uniqueness and personal flair in all creative endeavors.',
    traits: 'Creative • Expressive • Experimental',
    color: '#FFA502',
    bgColor: 'from-orange-50 to-orange-100/80',
    borderColor: 'border-orange-200',
    role: 'Archer',
    careers: ['UX Designer', 'Creative Director', 'Content Creator', 'Marketing Manager', 'Brand Strategist', 'Artist'],
  },
  {
    icon: MagnifyingGlass,
    codename: 'Aureus',
    title: 'The Seeker',
    subtitle: 'Explorer & Learner',
    description: 'Curious, fast learner, knowledge-driven, flexible. Constantly seeks new ideas and adapts quickly to unfamiliar situations.',
    traits: 'Curious • Adaptable • Knowledge-Driven',
    color: '#55EFC4',
    bgColor: 'from-emerald-50 to-emerald-100/80',
    borderColor: 'border-emerald-200',
    role: 'Assassin',
    careers: ['Research Scientist', 'Journalist', 'Consultant', 'Business Development', 'Product Researcher', 'Learning Specialist'],
  },
  {
    icon: Shield,
    codename: 'Noxion',
    title: 'The Challenger',
    subtitle: 'Critic & Truth Seeker',
    description: 'Protective, principled, critical, boundary enforcer. Stands up for beliefs and protects systems from potential harm.',
    traits: 'Principled • Protective • Truth-Seeking',
    color: '#2D3436',
    bgColor: 'from-gray-50 to-gray-100/80',
    borderColor: 'border-gray-200',
    role: 'Tank',
    careers: ['Quality Assurance', 'Compliance Officer', 'Security Analyst', 'Auditor', 'Risk Manager', 'Legal Counsel'],
  },
  {
    icon: Star,
    codename: 'Assessment',
    title: 'Your Discovery',
    subtitle: 'Cognitive Mapping',
    description: 'Through 35 carefully crafted questions, we map your cognitive patterns using advanced psychometric analysis. Discover not just what you do, but how you think.',
    traits: 'Scientific • Personalized • Actionable',
    color: '#6C63FF',
    bgColor: 'from-indigo-50 to-indigo-100/80',
    borderColor: 'border-indigo-200',
    role: 'Discovery',
    careers: [],
  },
];

export default function Neuroclass() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const router = useRouter();

  const handleCardClick = (codename: string) => {
    if (codename === 'Assessment') return; // Assessment card shouldn't flip
    setFlippedCard(flippedCard === codename ? null : codename);
  };

  const handleAssessmentClick = () => {
    router.push('/assessment');
  };
  
  return (
    <section id="neuroclass" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-full mb-6">
            <span className="text-slate-600 font-medium text-sm tracking-wide">Neuroclass™</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            The Science Behind
            <br />
            <span className="text-slate-600">How You Think</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Every professional has a unique cognitive fingerprint, a dominant pattern of how they naturally 
            process information, make decisions, and approach challenges. Our Neuroclass system maps your 
            cognitive preferences and reveals both your natural strengths and growth opportunities across 
            all thinking styles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-full shadow-sm"
          >
            <span className="text-slate-600 font-medium text-sm tracking-wide mr-2">
              💼 Click to view career paths
            </span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ✨
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {neuroclassData.map((item, index) => (
            <motion.div
              key={item.codename}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              onClick={() => handleCardClick(item.codename)}
              className={`relative h-80 cursor-pointer ${item.codename === 'Assessment' ? 'cursor-default' : ''}`}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={{ 
                  rotateY: flippedCard === item.codename ? 180 : 0 
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-b ${item.bgColor} rounded-3xl p-6 border ${item.borderColor} hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Role indicator - special styling for assessment card */}
                  {/* <div className="absolute top-4 right-4 text-xs text-slate-500 font-mono tracking-wider">
                      {item.role.toUpperCase()}
                  </div> */}
                  
                  <div className="flex items-center mb-4">
                    <div className="mr-3">
                      <item.icon 
                        size={32} 
                        weight="duotone" 
                        style={{ color: item.color }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold group-hover:scale-105 transition-transform duration-300 ${
                            item.codename === 'Assessment' ? 'text-indigo-900' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 font-medium">{item.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Only show codename for actual neuroclass */}
                  {item.codename !== 'Assessment' && (
                    <div className="mb-4">
                      <span className="text-xs font-mono text-slate-500 tracking-wider">{item.codename.toUpperCase()}</span>
                    </div>
                  )}
                  
                  <p className="text-slate-600 mb-4 leading-relaxed font-light text-sm">
                    {item.description}
                  </p>
                  
                  <div className={`inline-block px-3 py-1 rounded-full border text-xs font-medium ${
                    item.codename === 'Assessment' 
                      ? 'bg-indigo-100/80 border-indigo-200 text-indigo-700' 
                      : 'bg-white/80 border-slate-200 text-slate-700'
                  }`}>
                    {item.traits}
                  </div>
                </div>

                {/* Back of card - Career Paths */}
                {item.careers.length > 0 && (
                  <div 
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl p-6 flex flex-col justify-center items-center border border-slate-300"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-4">
                        <Briefcase size={24} weight="duotone" style={{ color: item.color }} className="mr-2" />
                        <h4 className="text-lg font-bold text-slate-900">Career Paths</h4>
                      </div>
                      <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                        {item.careers.map((career, idx) => (
                          <div 
                            key={idx}
                            className="text-sm font-medium text-slate-700 px-3 py-2 bg-slate-100/80 rounded-lg border border-slate-200 hover:bg-slate-200/80 transition-colors"
                          >
                            {career}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-xs text-slate-500">
                        Click again to return
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-b from-white to-slate-50/50 rounded-3xl p-8 max-w-3xl mx-auto border border-slate-200 shadow-lg shadow-slate-200/50">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mx-auto mb-6">
              <Brain size={28} weight="duotone" className="text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Your Cognitive Operating System
            </h3>
            <p className="text-slate-600 mb-8 font-light leading-relaxed">
              Take our comprehensive 35-question assessment to discover your primary Neuroclass 
              and secondary traits. This becomes the foundation for your Persona creation, 
              career path optimization, and team synergy analysis.
            </p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mb-8"
            >
              <button 
                onClick={handleAssessmentClick}
                className="group bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/25 hover:-translate-y-1 active:translate-y-0 active:shadow-lg flex items-center justify-center mx-auto"
              >
                <span className="mr-3">Take Neuroclass Assessment Now</span>
                <Brain size={20} weight="duotone" className="group-hover:scale-110 transition-transform duration-300" />
              </button>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center text-slate-500">
                <Clock size={16} weight="regular" className="mr-2 text-emerald-500" />
                <span className="font-medium">7-10 minutes</span>
              </div>
              <div className="flex items-center justify-center text-slate-500">
                <ArrowsClockwise size={16} weight="regular" className="mr-2 text-blue-500" />
                <span className="font-medium">Once per year</span>
              </div>
              <div className="flex items-center justify-center text-slate-500">
                <Target size={16} weight="regular" className="mr-2 text-purple-500" />
                <span className="font-medium">Personalized results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
