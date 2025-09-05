'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  CheckCircle,
  ArrowRight,
  Brain,
  Target,
  Rocket,
  Crown,
  Lightning,
  Compass
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GuidePage() {
  const [activePhase, setActivePhase] = useState('discovery');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const careerPhases = [
    {
      id: 'discovery',
      title: 'Discovery Phase',
      subtitle: 'Know Yourself',
      description: 'Understand your cognitive identity and natural strengths',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      duration: '2-4 weeks'
    },
    {
      id: 'alignment',
      title: 'Alignment Phase', 
      subtitle: 'Find Your Path',
      description: 'Choose roles and opportunities that match your profile',
      icon: Compass,
      color: 'from-blue-500 to-cyan-500',
      duration: '4-8 weeks'
    },
    {
      id: 'development',
      title: 'Development Phase',
      subtitle: 'Build Skills',
      description: 'Systematically develop capabilities for your chosen path',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      duration: '6-12 months'
    },
    {
      id: 'mastery',
      title: 'Mastery Phase',
      subtitle: 'Excel & Lead',
      description: 'Achieve expertise and expand your impact',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      duration: '1-3 years'
    },
    {
      id: 'evolution',
      title: 'Evolution Phase',
      subtitle: 'Transform & Transcend',
      description: 'Shape industries and mentor the next generation',
      icon: Rocket,
      color: 'from-pink-500 to-red-500',
      duration: 'Ongoing'
    }
  ];

  const discoverySteps = [
    {
      id: 'assessment',
      title: 'Take the Neuroclass Assessment',
      description: 'Discover your cognitive identity through our science-backed evaluation',
      action: 'Start Assessment',
      time: '15-20 minutes',
      xp: '500 XP'
    },
    {
      id: 'results',
      title: 'Understand Your Results',
      description: 'Learn about your Neuroclass strengths, preferences, and optimal environments',
      action: 'Review Profile',
      time: '30 minutes',
      xp: '200 XP'
    },
    {
      id: 'roles',
      title: 'Explore Role Options',
      description: 'Discover which roles align with your cognitive style and career goals',
      action: 'Browse Roles',
      time: '45 minutes',
      xp: '300 XP'
    },
    {
      id: 'reflection',
      title: 'Reflect & Journal',
      description: 'Process your insights and identify patterns in your career experiences',
      action: 'Complete Reflection',
      time: '60 minutes',
      xp: '400 XP'
    }
  ];

  const alignmentSteps = [
    {
      id: 'role-selection',
      title: 'Choose Your Primary Role',
      description: 'Commit to a role that excites you and aligns with your goals',
      action: 'Select Role',
      time: '2-3 days consideration',
      xp: '750 XP'
    },
    {
      id: 'career-mapping',
      title: 'Map Career Opportunities',
      description: 'Research specific positions and companies that fit your role and neuroclass',
      action: 'Research Careers',
      time: '1-2 weeks',
      xp: '600 XP'
    },
    {
      id: 'network-analysis',
      title: 'Analyze Your Network',
      description: 'Identify connections and gaps in your professional network',
      action: 'Map Network',
      time: '3-5 days',
      xp: '400 XP'
    },
    {
      id: 'opportunity-audit',
      title: 'Audit Current Opportunities',
      description: 'Evaluate your current role against your ideal career path',
      action: 'Complete Audit',
      time: '1 week',
      xp: '500 XP'
    }
  ];

  const developmentSteps = [
    {
      id: 'skill-assessment',
      title: 'Assess Current Skills',
      description: 'Benchmark your abilities against your target role requirements',
      action: 'Take Skill Assessment',
      time: '2-3 hours',
      xp: '800 XP'
    },
    {
      id: 'learning-plan',
      title: 'Create Learning Plan',
      description: 'Design a structured approach to building missing capabilities',
      action: 'Build Plan',
      time: '4-6 hours',
      xp: '600 XP'
    },
    {
      id: 'practice-projects',
      title: 'Complete Practice Projects',
      description: 'Apply new skills through real-world projects and challenges',
      action: 'Start Projects',
      time: '3-6 months',
      xp: '2000 XP'
    },
    {
      id: 'mentorship',
      title: 'Find Mentors & Guides',
      description: 'Connect with experienced professionals in your target role',
      action: 'Connect with Mentors',
      time: '2-4 weeks',
      xp: '700 XP'
    }
  ];

  const masterySteps = [
    {
      id: 'expertise-building',
      title: 'Build Deep Expertise',
      description: 'Become a recognized expert in your chosen domain',
      action: 'Develop Expertise',
      time: '12-18 months',
      xp: '5000 XP'
    },
    {
      id: 'thought-leadership',
      title: 'Establish Thought Leadership',
      description: 'Share insights and influence your industry through content and speaking',
      action: 'Build Platform',
      time: '6-12 months',
      xp: '3000 XP'
    },
    {
      id: 'team-leadership',
      title: 'Lead Teams & Projects',
      description: 'Take on leadership responsibilities and drive organizational impact',
      action: 'Lead Initiatives',
      time: '1-2 years',
      xp: '4000 XP'
    },
    {
      id: 'strategic-impact',
      title: 'Drive Strategic Impact',
      description: 'Influence company direction and shape organizational strategy',
      action: 'Lead Strategy',
      time: '2-3 years',
      xp: '6000 XP'
    }
  ];

  const evolutionSteps = [
    {
      id: 'industry-shaping',
      title: 'Shape Your Industry',
      description: 'Drive industry-wide change and innovation',
      action: 'Lead Change',
      time: 'Career-long',
      xp: '10000 XP'
    },
    {
      id: 'mentoring',
      title: 'Mentor the Next Generation',
      description: 'Guide emerging talent and share your wisdom',
      action: 'Become Mentor',
      time: 'Ongoing',
      xp: '8000 XP'
    },
    {
      id: 'legacy-building',
      title: 'Build Your Legacy',
      description: 'Create lasting impact that extends beyond your career',
      action: 'Create Legacy',
      time: 'Lifetime',
      xp: '15000 XP'
    }
  ];

  const getStepsForPhase = (phaseId: string) => {
    switch (phaseId) {
      case 'discovery': return discoverySteps;
      case 'alignment': return alignmentSteps;
      case 'development': return developmentSteps;
      case 'mastery': return masterySteps;
      case 'evolution': return evolutionSteps;
      default: return [];
    }
  };

  const toggleStepCompletion = (stepId: string) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-sm font-medium text-emerald-700 mb-6"
            >
              <MapPin size={16} className="mr-2" weight="duotone" />
              Career Roadmap
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Your Complete
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Career Guide</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              A step-by-step roadmap to discover your cognitive strengths, align with the right opportunities, 
              and systematically build the career of your dreams.
            </motion.p>

            {/* Progress Overview */}
            <motion.div 
              variants={itemVariants}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Journey Progress</h3>
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute top-8 left-0 right-0 h-1 bg-slate-200 rounded-full"></div>
                  <div className="absolute top-8 left-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" style={{width: '20%'}}></div>
                  
                  {/* Phase Icons */}
                  <div className="relative flex justify-between">
                    {careerPhases.map((phase) => (
                      <div key={phase.id} className="flex flex-col items-center">
                        <button
                          onClick={() => setActivePhase(phase.id)}
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                            activePhase === phase.id
                              ? `bg-gradient-to-br ${phase.color} shadow-lg scale-110`
                              : 'bg-white border-2 border-slate-200 hover:border-emerald-300'
                          }`}
                        >
                          <phase.icon 
                            size={24} 
                            className={activePhase === phase.id ? 'text-white' : 'text-slate-400'} 
                            weight="duotone" 
                          />
                        </button>
                        <div className="text-center">
                          <div className={`text-sm font-semibold ${activePhase === phase.id ? 'text-emerald-600' : 'text-slate-600'}`}>
                            {phase.title}
                          </div>
                          <div className="text-xs text-slate-500">{phase.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Phase Details */}
        <section className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {(() => {
                const currentPhase = careerPhases.find(p => p.id === activePhase);
                const steps = getStepsForPhase(activePhase);
                if (!currentPhase) return null;

                return (
                  <div className="grid lg:grid-cols-3 gap-12">
                    {/* Phase Overview */}
                    <div className="lg:col-span-1">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 sticky top-8">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentPhase.color} flex items-center justify-center mx-auto mb-6`}>
                          <currentPhase.icon size={40} className="text-white" weight="duotone" />
                        </div>
                        
                        <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">{currentPhase.title}</h2>
                        <p className="text-lg text-emerald-600 font-semibold mb-4 text-center">{currentPhase.subtitle}</p>
                        <p className="text-slate-600 leading-relaxed mb-6 text-center">{currentPhase.description}</p>
                        
                        <div className="text-center">
                          <div className="text-sm text-slate-500 mb-2">Estimated Duration</div>
                          <div className="text-lg font-semibold text-slate-900">{currentPhase.duration}</div>
                        </div>

                        <div className="mt-8 p-4 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl border border-emerald-200">
                          <h4 className="font-semibold text-emerald-800 mb-2">Phase Goals</h4>
                          <p className="text-sm text-emerald-700">
                            Complete all steps in this phase to unlock advanced capabilities and move to the next level of your career journey.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="lg:col-span-2">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-2xl font-bold text-slate-900">Phase Steps</h3>
                          <div className="text-sm text-slate-500">
                            {completedSteps.filter(id => steps.some(step => step.id === id)).length} of {steps.length} completed
                          </div>
                        </div>

                        {steps.map((step, index) => (
                          <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 ${
                              completedSteps.includes(step.id)
                                ? 'border-emerald-300 bg-emerald-50/50'
                                : 'border-slate-200 hover:border-emerald-200'
                            }`}
                          >
                            <div className="flex items-start space-x-4">
                              {/* Step Number */}
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                completedSteps.includes(step.id)
                                  ? 'bg-emerald-500 text-white'
                                  : 'bg-slate-100 text-slate-600'
                              }`}>
                                {completedSteps.includes(step.id) ? (
                                  <CheckCircle size={24} weight="fill" />
                                ) : (
                                  <span className="font-bold">{index + 1}</span>
                                )}
                              </div>

                              {/* Step Content */}
                              <div className="flex-1">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                <p className="text-slate-600 mb-4">{step.description}</p>
                                
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                                    <div className="flex items-center">
                                      <Lightning size={16} className="mr-1" weight="duotone" />
                                      {step.xp}
                                    </div>
                                    <div>{step.time}</div>
                                  </div>
                                  
                                  <div className="flex items-center space-x-3">
                                    <button
                                      onClick={() => toggleStepCompletion(step.id)}
                                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        completedSteps.includes(step.id)
                                          ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                      }`}
                                    >
                                      {completedSteps.includes(step.id) ? 'Completed' : 'Mark Complete'}
                                    </button>
                                    
                                    <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                                      {step.action}
                                      <ArrowRight size={14} className="ml-1" weight="bold" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl p-12 text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket size={32} className="text-white" weight="duotone" />
            </div>
            
            <h2 className="text-4xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Your career transformation starts with understanding who you are. Take the first step by discovering your Neuroclass and unlocking your potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Brain size={20} className="inline mr-2" weight="bold" />
                Start Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                <MapPin size={20} className="inline mr-2" weight="bold" />
                Explore Roles
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
