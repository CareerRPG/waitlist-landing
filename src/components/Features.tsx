'use client';

import { motion } from 'framer-motion';
import { Brain, Target, TrendUp, UsersThree, Sword, Shield } from 'phosphor-react';

const features = [
  {
    icon: Brain,
    title: 'Cognitive Identity Discovery',
    description: 'Our scientifically-backed 35-question assessment reveals your unique Neuroclass™ - your cognitive operating system. Understanding whether you\'re a Lumina Visioneer, Crimsonix Executor, or one of five other archetypes unlocks personalized productivity strategies that actually work with your brain, not against it.',
    color: 'from-gray-500 to-slate-500',
    bgColor: 'from-gray-50 to-gray-100/50',
    borderColor: 'border-gray-200',
  },
  {
    icon: Sword,
    title: 'Immersive Focus Sessions',
    description: 'Pomodungeon battles transform the dreaded focus session into something you actually look forward to. Your personalized RPG character fights epic battles while you tackle real work—creating a perfect flow state where time flies and productivity soars.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-50 to-red-100/50',
    borderColor: 'border-red-200',
  },
  {
    icon: Target,
    title: 'Intelligent Career Navigation',
    description: 'Your personalized Path system acts like a GPS for your career, breaking down overwhelming long-term goals into manageable quests. Our AI-powered career coach, Axis™ ensures every task aligns with your Neuroclass and moves you closer to your professional destination.',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-50 to-blue-100/50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Shield,
    title: 'Multi-Dimensional Growth',
    description: 'Create different Personas for different aspects of your professional life—your analytical self, creative side, or leadership persona. Each evolves independently, giving you flexibility to grow in multiple directions while maintaining a cohesive professional identity.',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'from-purple-50 to-purple-100/50',
    borderColor: 'border-purple-200',
  },
  {
    icon: TrendUp,
    title: 'Measurable Skill Development',
    description: 'Every completed session contributes to your Domain mastery—from Novice to Legend status in real competencies like Software Engineering, Data Analysis, or Project Management. Your RPG progress directly reflects your professional growth, making career development tangible and rewarding.',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'from-emerald-50 to-emerald-100/50',
    borderColor: 'border-emerald-200',
  },
  {
    icon: UsersThree,
    title: 'Team Optimization Engine',
    description: 'Our Guild system revolutionizes team collaboration by mapping each member\'s Neuroclass and optimizing task distribution. Stop fighting cognitive friction—start leveraging your team\'s natural thinking patterns for maximum efficiency and job satisfaction.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'from-indigo-50 to-indigo-100/50',
    borderColor: 'border-indigo-200',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-full mb-6">
            <span className="text-slate-600 font-medium text-sm tracking-wide">FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Six Breakthrough Features
            <br />
            <span className="text-slate-600">That Change Everything</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Stop fighting your productivity battles alone. CareerRPG gives you the tools, insights, 
            and motivation to transform how you work, grow, and succeed in your professional life.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
            >
              {/* Content Section */}
              <div className="flex-1 space-y-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} className="text-white" weight="duotone" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed font-light max-w-2xl">
                  {feature.description}
                </p>
                
                <div className="pt-4">
                  <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${feature.color} text-white font-medium rounded-xl hover:shadow-lg hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5`}>
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Video Demo Section */}
              <div className="flex-1 w-full">
                <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-b ${feature.bgColor} border ${feature.borderColor} hover:shadow-xl hover:shadow-black/10 transition-all duration-300 group`}>
                  {/* Placeholder Video */}
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-slate-700">
                          {feature.title} Demo
                        </h4>
                        <p className="text-sm text-slate-500">
                          Interactive demonstration coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300`}>
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Video Caption */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-slate-500 font-medium">
                    See {feature.title.toLowerCase()} in action
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
