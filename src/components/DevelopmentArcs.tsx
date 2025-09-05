'use client';

import { motion } from 'framer-motion';
import { 
  Lightning, 
  Brain, 
  Target, 
  Crown, 
  Lightbulb,
  FireSimple,
  Heart
} from 'phosphor-react';


const processSteps = [
  {
    step: '1',
    title: 'Set Your Mastery Path',
    caption: 'Define your long-term (3+ year) career ambition. This is your North Star.',
    icon: Target,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    step: '2',
    title: 'Choose Your Development Arc',
    caption: 'Select a quarterly archetype to embody. This is your 90-day priority.',
    icon: Lightning,
    color: 'from-emerald-500 to-blue-500'
  },
  {
    step: '3',
    title: 'Grow & Evolve',
    caption: 'Complete daily quests aligned with your Arc to earn bonus XP and turn your vision into reality.',
    icon: Crown,
    color: 'from-orange-500 to-red-500'
  }
];

export default function DevelopmentArcs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-sm font-medium text-emerald-700 mb-6"
          >
            <Brain size={16} className="mr-2" weight="duotone" />
            Development Arcs
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            What Will You Master
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> This Quarter?</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Your Development Arc is your intentional, 90-day path to mastery. By choosing an archetype to embody, 
            you&apos;re setting a clear priority for your professional growth. This focus unlocks a{' '}
            <span className="font-semibold text-emerald-600">Specialization Bonus</span> on all related activities, 
            accelerating your journey towards your long-term career vision.
          </motion.p>
        </motion.div>

        {/* 3-Step Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-slate-900 text-center mb-12"
          >
            Your 90-Day Mastery Journey
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="text-center relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mx-auto mb-4`}>
                    <step.icon size={28} className="text-white" weight="duotone" />
                  </div>
                  
                  <div className="text-sm font-bold text-slate-500 mb-2">STEP {step.step}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{step.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Arc Showcase */}
       

        {/* Benefits Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-slate-900 mb-4"
            >
              The Power of Intentional Growth
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Development Arcs transform scattered effort into focused mastery
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Focused Direction',
                description: 'Clear 90-day goals prevent skill scatter and ensure meaningful progress toward your career vision.',
                color: 'purple'
              },
              {
                icon: Lightning,
                title: 'Accelerated Growth',
                description: 'Specialization bonuses on aligned activities compound your learning and skill development.',
                color: 'emerald'
              },
              {
                icon: Crown,
                title: 'Mastery Unlocks',
                description: 'Complete Arcs to unlock advanced abilities, new career paths, and leadership opportunities.',
                color: 'orange'
              }
            ].map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="bg-white/70 rounded-2xl p-6 text-center"
              >
                <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon size={24} className={`text-${benefit.color}-600`} weight="duotone" />
                </div>
                <h4 className="font-bold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

