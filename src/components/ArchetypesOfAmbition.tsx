'use client';

import { motion } from 'framer-motion';
import { 
  Lightning, 
  Gear, 
  Shield, 
  FireSimple, 
  Palette, 
  MagnifyingGlass, 
  Heart
} from 'phosphor-react';

// Neuroclass data organized by tiers (from most common to very rare)
const tiers = [
  {
    id: 'tier-1',
    title: 'Foundational Growth',
    subtitle: 'Common',
    description: 'Every great career begins with two fundamental drives: the curiosity to learn (The Seeker) and the ability to connect with others (The Empath). These common archetypes are the bedrock of professional growth, representing the essential skills of adaptation and collaboration that fuel every journey.',
    neuroclass: [
      {
        icon: MagnifyingGlass,
        codename: 'AUREUS',
        title: 'The Seeker',
        color: '#55EFC4',
        bgColor: 'from-emerald-100 to-emerald-200'
      },
      {
        icon: Heart,
        codename: 'AZURA',
        title: 'The Empath',
        color: '#74B9FF',
        bgColor: 'from-blue-100 to-blue-200'
      }
    ],
    tierColor: 'from-green-500 to-blue-500',
    level: 'Common'
  },
  {
    id: 'tier-2',
    title: 'Focused Specialization',
    subtitle: 'Uncommon',
    description: 'As you progress, your path begins to specialize. You might focus on driving tangible results and making things happen (The Executor) or on creating unique value and expressing new ideas (The Artisan). These archetypes represent the focused application of your foundational skills into a distinct professional style.',
    neuroclass: [
      {
        icon: FireSimple,
        codename: 'CRIMSONIX',
        title: 'The Executor',
        color: '#D63031',
        bgColor: 'from-red-100 to-red-200'
      },
      {
        icon: Palette,
        codename: 'SOLARA',
        title: 'The Artisan',
        color: '#FFA502',
        bgColor: 'from-orange-100 to-orange-200'
      }
    ],
    tierColor: 'from-red-500 to-orange-500',
    level: 'Uncommon'
  },
  {
    id: 'tier-3',
    title: 'Systemic Mastery',
    subtitle: 'Rare',
    description: 'A smaller group evolves to work at a higher level of abstraction. They don\'t just work in the system; they design and protect it. They are the ones who build the frameworks (The Architect) or safeguard the mission\'s integrity (The Challenger). This level of systemic thinking and principle-driven leadership is rare and powerful.',
    neuroclass: [
      {
        icon: Gear,
        codename: 'OBSIDIA',
        title: 'The Architect',
        color: '#6C5CE7',
        bgColor: 'from-purple-100 to-purple-200'
      },
      {
        icon: Shield,
        codename: 'NOXION',
        title: 'The Challenger',
        color: '#2D3436',
        bgColor: 'from-gray-700 to-gray-800'
      }
    ],
    tierColor: 'from-purple-600 to-gray-600',
    level: 'Rare'
  },
  {
    id: 'tier-4',
    title: 'Strategic Synthesis',
    subtitle: 'Very Rare',
    description: 'At the very pinnacle are those who can synthesize everything below them into a cohesive, forward-looking direction. The Visioneer is exceptionally rare because this archetype represents the ability to not just see the future, but to architect the path to get there.',
    neuroclass: [
      {
        icon: Lightning,
        codename: 'LUMINA',
        title: 'The Visioneer',
        color: '#D9DDDC',
        bgColor: 'from-gray-100 to-gray-200'
      }
    ],
    tierColor: 'from-gray-400 to-slate-500',
    level: 'Very Rare'
  }
];

export default function ArchetypesOfAmbition() {
  return (
    <section id="archetypes-of-ambition" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-full mb-6">
            <span className="text-slate-600 font-medium text-sm tracking-wide">PROFESSIONAL EVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            The Archetypes of Ambition:
            <br />
            <span className="text-slate-600">A Universe of Talent</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Our framework is more than a personality test—it&apos;s a map of professional evolution. 
            Discover why some roles are foundational to any journey, while others represent the pinnacle of specialized mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Pyramid Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl p-8 relative overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-700/20 to-transparent"></div>
              
              <div className="relative space-y-6">
                <h3 className="text-2xl font-bold text-white text-center mb-8">
                  The Funnel of Professional Evolution
                </h3>
                
                {tiers.map((tier, tierIndex) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: tierIndex * 0.15 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative"
                  >
                    {/* Tier container with dynamic width for funnel effect (wide to narrow) */}
                    <div 
                      className={`bg-gradient-to-r ${tier.tierColor} rounded-2xl p-4 mx-auto relative`}
                      style={{
                        width: `${100 - (tierIndex * 15)}%`,
                        minWidth: '200px'
                      }}
                    >
                      {/* Tier label */}
                      <div className="text-center mb-3">
                        <div className="text-white font-bold text-sm tracking-wide">
                          {tier.level.toUpperCase()}
                        </div>
                        <div className="text-white/80 text-xs font-medium">
                          {tier.title} 
                        </div>
                      </div>
                      
                      {/* neuroclass in tier */}
                      <div className="flex justify-center gap-3">
                        {tier.neuroclass.map((neuroclass, index) => (
                          <motion.div
                            key={neuroclass.codename}
                            whileHover={{ scale: 1.1 }}
                            className="group relative"
                          >
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30 hover:bg-white/30 transition-all duration-300">
                              <neuroclass.icon 
                                size={24} 
                                className="text-white group-hover:scale-110 transition-transform duration-300" 
                                weight="duotone" 
                              />
                            </div>
                            
                            {/* Tooltip */}
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                              {neuroclass.codename} {neuroclass.title}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Your career is a journey of specialization.
              </h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Our distribution reflects this natural evolution.
              </p>
            </div>

            {tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="border-l-4 border-slate-200 pl-6 py-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${tier.tierColor} text-white text-sm font-bold`}>
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {tier.level}: {tier.title}
                  </h4>
                  <span className="text-sm text-slate-500 font-medium">
                    ({tier.subtitle})
                  </span>
                </div>
                
                <p className="text-slate-600 leading-relaxed font-light">
                  {tier.description}
                </p>
                
                {/* Neuroclass names */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {tier.neuroclass.map((neuroclass) => (
                    <span 
                      key={neuroclass.codename}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
                    >
                      <neuroclass.icon size={14} weight="duotone" />
                      {neuroclass.title}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-2xl p-6 border border-slate-200"
            >
              <p className="text-lg font-medium text-slate-800 text-center leading-relaxed">
                Your archetype isn&apos;t about being better—it&apos;s about understanding your unique power 
                and where you provide the most value on the journey of ambition.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-b from-white to-slate-50/50 rounded-3xl p-8 max-w-xl mx-auto border border-slate-200 shadow-lg shadow-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Discover Your Place
            </h3>
            <motion.button
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(16, 185, 129, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Take the Assessment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
