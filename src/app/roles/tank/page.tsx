'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Star,
  CheckCircle,
  Users,
  Trophy,
  Brain,
  Target,
  GameController,
  ChartLineUp,
  Lock,
  ShieldCheck,
  Warning,
  ListChecks
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TankRolePage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const role = {
    id: 'tank',
    name: 'Tank',
    title: 'The Guardian of Focus',
    description: 'Defend against distractions with unwavering vigilance. Perfect for working in chaotic environments and building consistent daily habits.',
    icon: Shield,
    color: 'slate',
    gradient: 'from-slate-600 to-gray-700',
    traits: ['Protective', 'Focused', 'Consistent', 'Disciplined'],
    bestFor: ['Open office work', 'Habit formation', 'Deep focus tasks', 'Routine building'],
    neurotypeMatch: ['Permanent Combat Style'],
    examples: ['Distraction-heavy environments', 'Habit building', 'Consistent focus', 'Environmental control'],
    progressionTeaser: 'Evolve into a Sentinel, Bulwark, or Vanguard.',
    evolutions: [
      { name: 'Sentinel', description: 'Master guardian of focus with unbreakable concentration abilities' },
      { name: 'Bulwark', description: 'Defensive specialist who creates impenetrable productivity barriers' },
      { name: 'Vanguard', description: 'Leadership-focused protector who guides teams through chaos' }
    ]
  };

  const skillTrees = [
    {
      id: 'protection',
      name: 'Fortress Defense',
      icon: ShieldCheck,
      color: 'from-slate-400 to-gray-500',
      skills: [
        { name: 'Shield Wall', level: 1, description: 'Establish robust protection against threats and risks' },
        { name: 'Damage Mitigation', level: 2, description: 'Minimize impact of problems before they escalate' },
        { name: 'Threat Assessment', level: 3, description: 'Identify and evaluate potential organizational risks' },
        { name: 'Guardian Protocol', level: 4, description: 'Create comprehensive defense systems' },
        { name: 'Impenetrable Fortress', level: 5, description: 'Build organizations that are resilient to any challenge' }
      ]
    },
    {
      id: 'quality',
      name: 'Quality Mastery',
      icon: ListChecks,
      color: 'from-gray-400 to-slate-500',
      skills: [
        { name: 'Standards Setting', level: 1, description: 'Define and enforce high-quality benchmarks' },
        { name: 'Process Validation', level: 2, description: 'Ensure consistent execution across all operations' },
        { name: 'Excellence Framework', level: 3, description: 'Design systems that naturally produce quality outcomes' },
        { name: 'Perfection Engine', level: 4, description: 'Create self-correcting quality assurance systems' },
        { name: 'Zero Defect Culture', level: 5, description: 'Build organizations where quality is intrinsic' }
      ]
    },
    {
      id: 'oversight',
      name: 'Vigilant Oversight',
      icon: Warning,
      color: 'from-zinc-400 to-stone-500',
      skills: [
        { name: 'Compliance Watch', level: 1, description: 'Monitor adherence to regulations and standards' },
        { name: 'Risk Radar', level: 2, description: 'Detect emerging threats and vulnerabilities' },
        { name: 'Audit Mastery', level: 3, description: 'Conduct thorough evaluations and assessments' },
        { name: 'Governance System', level: 4, description: 'Establish comprehensive oversight frameworks' },
        { name: 'Omnipresent Guardian', level: 5, description: 'Monitor and protect every aspect of operations' }
      ]
    }
  ];

  const careerPaths = [
    {
      category: 'Risk & Compliance',
      roles: [
        { title: 'Chief Risk Officer', level: 'Executive', xp: '11,000+' },
        { title: 'Compliance Director', level: 'Senior', xp: '8,000+' },
        { title: 'Risk Manager', level: 'Senior', xp: '6,500+' },
        { title: 'Compliance Specialist', level: 'Mid', xp: '4,000+' }
      ]
    },
    {
      category: 'Quality & Operations',
      roles: [
        { title: 'Chief Quality Officer', level: 'Executive', xp: '9,500+' },
        { title: 'Quality Director', level: 'Senior', xp: '7,000+' },
        { title: 'Quality Assurance Manager', level: 'Mid', xp: '5,000+' },
        { title: 'QA Specialist', level: 'Mid', xp: '3,500+' }
      ]
    },
    {
      category: 'Security & Audit',
      roles: [
        { title: 'Chief Security Officer', level: 'Executive', xp: '10,000+' },
        { title: 'Internal Audit Director', level: 'Senior', xp: '7,500+' },
        { title: 'Security Manager', level: 'Mid', xp: '5,500+' },
        { title: 'Audit Specialist', level: 'Mid', xp: '4,000+' }
      ]
    }
  ];

  const stats = [
    { label: 'Risk Reduction', value: '85%', icon: Shield },
    { label: 'Quality Score', value: '98%', icon: ListChecks },
    { label: 'Compliance Rate', value: '99.2%', icon: Lock },
    { label: 'Problem Prevention', value: '92%', icon: Warning }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full text-sm font-medium text-slate-700 mb-6"
                >
                  <Shield size={16} className="mr-2" weight="duotone" />
                  Tank Role
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
                >
                  The Quality
                  <span className="bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent"> Guardian</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  Vigilant protectors who ensure excellence and mitigate risks. You don&apos;t just maintain standards—you create unshakeable foundations for organizational success.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {role.traits.map((trait, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-gradient-to-r from-slate-600 to-gray-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <GameController size={20} className="inline mr-2" weight="bold" />
                    Start Tank Journey
                  </button>
                  <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all duration-300">
                    <Target size={20} className="inline mr-2" weight="bold" />
                    View Guardian Arts
                  </button>
                </motion.div>
              </div>

              {/* Right Column - Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-slate-600 to-gray-700 mx-auto mb-4">
                      <stat.icon size={24} className="text-white" weight="duotone" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Navigation Tabs */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-200">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'overview', label: 'Overview', icon: Shield },
                { id: 'skills', label: 'Guardian Arts', icon: ShieldCheck },
                { id: 'careers', label: 'Defender Paths', icon: Trophy },
                { id: 'neuroclass', label: 'Neuroclass Synergy', icon: Brain }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-slate-600 to-gray-700 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-700'
                  }`}
                >
                  <tab.icon size={18} className="mr-2" weight={activeSection === tab.id ? 'bold' : 'regular'} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && (
            <motion.section
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Core Abilities */}
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Core Abilities</h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: 'Risk Fortress',
                        description: 'Build comprehensive defense systems that protect organizations from threats, failures, and compliance issues.',
                        icon: ShieldCheck,
                        gradient: 'from-slate-600 to-gray-700'
                      },
                      {
                        title: 'Quality Excellence',
                        description: 'Establish and maintain exceptionally high standards that ensure consistent, superior outcomes.',
                        icon: ListChecks,
                        gradient: 'from-gray-600 to-zinc-700'
                      },
                      {
                        title: 'Vigilant Oversight',
                        description: 'Monitor operations with keen attention to detail, catching problems before they impact the organization.',
                        icon: Warning,
                        gradient: 'from-zinc-600 to-stone-700'
                      },
                      {
                        title: 'Compliance Mastery',
                        description: 'Navigate complex regulatory landscapes and ensure all activities meet or exceed required standards.',
                        icon: Lock,
                        gradient: 'from-stone-600 to-slate-700'
                      }
                    ].map((ability, index) => (
                      <motion.div
                        key={ability.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ability.gradient} flex items-center justify-center flex-shrink-0`}>
                            <ability.icon size={24} className="text-white" weight="duotone" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{ability.title}</h4>
                            <p className="text-slate-600 leading-relaxed">{ability.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Best For</h3>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200">
                    <div className="space-y-4">
                      {role.bestFor.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex items-center"
                        >
                          <CheckCircle size={20} className="text-slate-600 mr-3 flex-shrink-0" weight="duotone" />
                          <span className="text-slate-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3">Neuroclass Affinity</h4>
                    <div className="space-y-2">
                      {role.neurotypeMatch.map((neuroclass, index) => (
                        <div key={index} className="flex items-center">
                          <Star size={16} className="text-slate-600 mr-2" weight="fill" />
                          <span className="text-slate-700 font-medium">{neuroclass}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-sm text-slate-600">
                      +15% XP bonus when aligned with natural cognitive style
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'skills' && (
            <motion.section
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6"
            >
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Guardian Arts Skill Trees</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Three paths of protective mastery. Develop your fortress defense, quality mastery, and vigilant oversight abilities.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {skillTrees.map((tree, treeIndex) => (
                  <motion.div
                    key={tree.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: treeIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
                  >
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tree.color} flex items-center justify-center mx-auto mb-4`}>
                        <tree.icon size={32} className="text-white" weight="duotone" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{tree.name}</h4>
                    </div>

                    <div className="space-y-4">
                      {tree.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (treeIndex * 0.2) + (skillIndex * 0.1), duration: 0.4 }}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                            hoveredSkill === skill.name
                              ? 'border-slate-300 bg-slate-50 shadow-lg'
                              : 'border-slate-200 bg-white/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-slate-900">{skill.name}</span>
                            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                              LV {skill.level}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600">{skill.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'careers' && (
            <motion.section
              key="careers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6"
            >
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Defender Career Paths</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Tank roles focused on protection, quality assurance, and risk management across all organizational functions.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {careerPaths.map((path, pathIndex) => (
                  <motion.div
                    key={path.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pathIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">{path.category}</h4>
                    <div className="space-y-4">
                      {path.roles.map((role, roleIndex) => (
                        <motion.div
                          key={role.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (pathIndex * 0.2) + (roleIndex * 0.1), duration: 0.4 }}
                          className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-slate-900 flex-1">{role.title}</h5>
                            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full ml-2">
                              {role.level}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Required XP: {role.xp}</span>
                            <Trophy size={16} className="text-slate-600" weight="duotone" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'neuroclass' && (
            <motion.section
              key="neuroclass"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6"
            >
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Neuroclass Synergy</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  How different cognitive types excel in the Tank role, and the unique protective advantages each brings to quality guardianship.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Natural Affinity */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl p-8 border border-slate-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star size={32} className="text-white" weight="fill" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800">Natural Synergy</h4>
                    <div className="text-slate-600 font-medium">+15% XP Bonus</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Noxion (Challenger)',
                        strengths: ['Quality focus', 'High standards', 'Risk awareness', 'Problem detection'],
                        bonus: 'Enhanced fortress defense and vigilant oversight'
                      },
                      {
                        neuroclass: 'Obsidia (Architect)',
                        strengths: ['Systematic thinking', 'Process design', 'Structural integrity', 'Logical frameworks'],
                        bonus: 'Superior quality mastery and compliance systems'
                      }
                    ].map((match) => (
                      <div key={match.neuroclass} className="bg-white/70 rounded-xl p-4">
                        <h5 className="font-bold text-slate-800 mb-2">{match.neuroclass}</h5>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {match.strengths.map((strength, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle size={14} className="text-slate-600 mr-1" weight="fill" />
                              <span className="text-slate-700">{strength}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">
                          Bonus: {match.bonus}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Cross-Class Mastery */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 border border-blue-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield size={32} className="text-white" weight="duotone" />
                    </div>
                    <h4 className="text-2xl font-bold text-blue-800">Cross-Class Potential</h4>
                    <div className="text-blue-600 font-medium">Adaptation XP</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Lumina (Visioneer)',
                        adaptation: 'Visionary Guardian',
                        challenge: 'Balance future thinking with present quality assurance'
                      },
                      {
                        neuroclass: 'Azura (Empath)',
                        adaptation: 'People-Centered Protector',
                        challenge: 'Maintain high standards while supporting team morale'
                      },
                      {
                        neuroclass: 'Crimsonix (Executor)',
                        adaptation: 'Action-Oriented Guardian',
                        challenge: 'Develop patience for thorough quality processes'
                      },
                      {
                        neuroclass: 'Solara (Artisan)',
                        adaptation: 'Creative Quality Guardian',
                        challenge: 'Balance artistic expression with systematic standards'
                      },
                      {
                        neuroclass: 'Aureus (Seeker)',
                        adaptation: 'Research-Driven Protector',
                        challenge: 'Apply investigative skills to risk management'
                      }
                    ].map((cross, index) => (
                      <motion.div
                        key={cross.neuroclass}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="bg-white/70 rounded-xl p-4"
                      >
                        <h5 className="font-bold text-blue-800 mb-2">{cross.neuroclass}</h5>
                        <div className="text-sm text-blue-700 mb-2">
                          <strong>Adaptation:</strong> {cross.adaptation}
                        </div>
                        <div className="text-sm text-blue-600">
                          <strong>Growth Edge:</strong> {cross.challenge}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-600 to-gray-700 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Guard Excellence?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Protect what matters most. Build fortress-like quality systems, manage risks proactively, and ensure organizational excellence through vigilant guardianship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/assessment'}
                className="bg-white text-slate-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Brain size={20} className="inline mr-2" weight="bold" />
                Discover Your Neuroclass
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/roles'}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-slate-600 transition-all duration-300"
              >
                <GameController size={20} className="inline mr-2" weight="bold" />
                Explore All Roles
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
