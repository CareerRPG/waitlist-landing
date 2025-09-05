'use client';

import { motion } from 'framer-motion';
import { ChartBar, Brain, User, Sword } from 'phosphor-react';

const steps = [
  {
    number: '01',
    icon: Brain,
    title: 'Discover Your Neuroclass',
    description: 'Take our 35-question assessment to reveal your cognitive operating system and unlock your personalized character archetype.',
    highlight: 'Assessment',
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'from-orange-50 to-yellow-100/50',
    borderColor: 'border-orange-200',
  },
  {
    number: '02',
    icon: User,
    title: 'Create Your Persona',
    description: 'Build your professional RPG character by combining your Neuroclass with a Role. Choose your Path and begin your adventure.',
    highlight: 'Character Creation',
    color: 'from-emerald-500 to-blue-500',
    bgColor: 'from-emerald-50 to-emerald-100/50',
    borderColor: 'border-emerald-200',
  },
  {
    number: '03',
    icon: Sword,
    title: 'Battle Through Pomodungeons',
    description: 'Transform work sessions into epic battles. Your Persona fights automatically while you focus on real-world tasks.',
    highlight: 'Productivity Sessions',
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-50 to-red-100/50',
    borderColor: 'border-red-200',
  },
  {
    number: '04',
    icon: ChartBar,
    title: 'Level Up Your Domains',
    description: 'Earn XP and level up real-world skills. Progress from Novice to Legend while building your professional profile.',
    highlight: 'Skill Progression',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'from-purple-50 to-purple-100/50',
    borderColor: 'border-purple-200',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-full mb-6">
            <span className="text-slate-600 font-medium text-sm tracking-wide">HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Your Journey From
            <br />
            <span className="text-slate-600">Discovery to Mastery</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Transform your career development through our proven 4-step process that combines 
            cognitive science with immersive gaming mechanics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`relative bg-gradient-to-b ${item.bgColor} rounded-3xl p-8 border ${item.borderColor} hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 group`}
            >
              {/* Step number */}
              <div className="absolute -top-4 left-6">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-white border-2 border-slate-200 rounded-full text-sm font-bold text-slate-600">
                  {item.number}
                </div>
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={28} className="text-white" weight="duotone" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed font-light mb-4">
                {item.description}
              </p>

              {/* Highlight badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-slate-700 text-xs font-medium">
                {item.highlight}
              </div>

              {/* Connection line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-slate-300 to-transparent transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-slate-300 rounded-full transform -translate-y-1/2 translate-x-1"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-b from-white to-slate-50/50 rounded-3xl p-8 max-w-2xl mx-auto border border-slate-200 shadow-lg shadow-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-slate-600 mb-6 font-light leading-relaxed">
              Join thousands of professionals who have already started their journey. 
              Your adventure begins with a single step.
            </p>
            <motion.button
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(16, 185, 129, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Quest
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
