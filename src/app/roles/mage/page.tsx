'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gear, 
  Star,
  CheckCircle,
  Users,
  Trophy,
  Brain,
  Target,
  GameController,
  ChartLineUp,
  Code,
  MagicWand,
  Atom
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MageRolePage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const role = {
    id: 'mage',
    name: 'Mage',
    title: 'The Master of Deep Work',
    description: 'Cast spells of organization and optimization. Perfect for analytical work, system building, and sustaining long periods of focus.',
    icon: Gear,
    color: 'purple',
    gradient: 'from-purple-600 to-indigo-600',
    traits: ['Analytical', 'Systematic', 'Logic-driven', 'Detail-oriented'],
    bestFor: ['Data analysis', 'System architecture', 'Process optimization', 'Research deep-dives'],
    neurotypeMatch: ['Permanent Combat Style'],
    examples: ['Analysis work', 'System design', 'Complex problem-solving', 'Data processing'],
    progressionTeaser: 'Evolve into a Spellbinder, Arcanist, or Chronowise.',
    evolutions: [
      { name: 'Spellbinder', description: 'Master of complex analytical spells and data enchantments' },
      { name: 'Arcanist', description: 'Deep scholar of systems architecture and process mastery' },
      { name: 'Chronowise', description: 'Time manipulation expert for sustained deep work sessions' }
    ]
  };

  const skillTrees = [
    {
      id: 'systems',
      name: 'Arcane Systems',
      icon: Gear,
      color: 'from-purple-400 to-indigo-500',
      skills: [
        { name: 'Pattern Recognition', level: 1, description: 'Identify hidden structures and relationships in complex data' },
        { name: 'Framework Design', level: 2, description: 'Create scalable architectural foundations' },
        { name: 'System Integration', level: 3, description: 'Connect disparate systems into cohesive wholes' },
        { name: 'Complexity Mastery', level: 4, description: 'Navigate and optimize highly complex environments' },
        { name: 'Reality Engineering', level: 5, description: 'Design systems that reshape entire industries' }
      ]
    },
    {
      id: 'analysis',
      name: 'Data Sorcery',
      icon: Atom,
      color: 'from-indigo-400 to-purple-500',
      skills: [
        { name: 'Data Divination', level: 1, description: 'Extract meaningful insights from raw information' },
        { name: 'Predictive Modeling', level: 2, description: 'Forecast future trends and outcomes' },
        { name: 'Algorithm Alchemy', level: 3, description: 'Transform business problems into elegant solutions' },
        { name: 'Intelligence Synthesis', level: 4, description: 'Combine multiple data sources into strategic wisdom' },
        { name: 'Omniscience Protocol', level: 5, description: 'Achieve near-perfect understanding of complex domains' }
      ]
    },
    {
      id: 'optimization',
      name: 'Process Mastery',
      icon: MagicWand,
      color: 'from-violet-400 to-purple-500',
      skills: [
        { name: 'Efficiency Enchantment', level: 1, description: 'Streamline workflows and eliminate waste' },
        { name: 'Automation Spells', level: 2, description: 'Design systems that manage themselves' },
        { name: 'Performance Optimization', level: 3, description: 'Maximize output while minimizing resources' },
        { name: 'Systemic Evolution', level: 4, description: 'Create self-improving organizational processes' },
        { name: 'Perfect Harmony', level: 5, description: 'Achieve optimal balance across all system components' }
      ]
    }
  ];

  const careerPaths = [
    {
      category: 'Technology Architecture',
      roles: [
        { title: 'Chief Technology Officer', level: 'Executive', xp: '11,000+' },
        { title: 'Software Architect', level: 'Senior', xp: '8,000+' },
        { title: 'Systems Engineer', level: 'Senior', xp: '6,500+' },
        { title: 'Technical Lead', level: 'Mid', xp: '4,500+' }
      ]
    },
    {
      category: 'Data & Analytics',
      roles: [
        { title: 'Chief Data Officer', level: 'Executive', xp: '10,000+' },
        { title: 'Principal Data Scientist', level: 'Senior', xp: '7,500+' },
        { title: 'Analytics Director', level: 'Senior', xp: '6,000+' },
        { title: 'Data Engineer', level: 'Mid', xp: '4,000+' }
      ]
    },
    {
      category: 'Strategy & Operations',
      roles: [
        { title: 'Strategy Consultant', level: 'Expert', xp: '8,500+' },
        { title: 'Operations Research Director', level: 'Senior', xp: '7,000+' },
        { title: 'Process Improvement Manager', level: 'Mid', xp: '5,000+' },
        { title: 'Business Analyst', level: 'Mid', xp: '3,500+' }
      ]
    }
  ];

  const stats = [
    { label: 'System Efficiency', value: '4.2x', icon: Gear },
    { label: 'Prediction Accuracy', value: '94%', icon: Brain },
    { label: 'Cost Reduction', value: '38%', icon: ChartLineUp },
    { label: 'Automation Rate', value: '87%', icon: Code }
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full text-sm font-medium text-purple-700 mb-6"
                >
                  <Gear size={16} className="mr-2" weight="duotone" />
                  Mage Role
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
                >
                  The Systems
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Architect</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  Analytical architects who transform complexity into elegant solutions. You don&apos;t just understand systems—you design, optimize, and evolve them into powerful engines of success.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {role.traits.map((trait, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <GameController size={20} className="inline mr-2" weight="bold" />
                    Start Mage Journey
                  </button>
                  <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-all duration-300">
                    <Target size={20} className="inline mr-2" weight="bold" />
                    View Arcane Arts
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
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 mx-auto mb-4">
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-purple-200">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'overview', label: 'Overview', icon: Gear },
                { id: 'skills', label: 'Arcane Arts', icon: MagicWand },
                { id: 'careers', label: 'Scholar Paths', icon: Trophy },
                { id: 'evolutions', label: 'Evolution Paths', icon: Brain }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-purple-50 hover:text-purple-700'
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
                        title: 'Systems Architecture',
                        description: 'Design scalable frameworks that can handle complexity and growth while maintaining elegant simplicity.',
                        icon: Gear,
                        gradient: 'from-purple-600 to-indigo-600'
                      },
                      {
                        title: 'Data Mastery',
                        description: 'Transform raw information into actionable insights through advanced analysis and predictive modeling.',
                        icon: Atom,
                        gradient: 'from-indigo-600 to-violet-600'
                      },
                      {
                        title: 'Process Optimization',
                        description: 'Streamline operations and automate workflows to achieve maximum efficiency with minimal resources.',
                        icon: MagicWand,
                        gradient: 'from-violet-600 to-purple-600'
                      },
                      {
                        title: 'Strategic Analysis',
                        description: 'Break down complex problems into manageable components and synthesize comprehensive solutions.',
                        icon: Brain,
                        gradient: 'from-purple-600 to-pink-600'
                      }
                    ].map((ability, index) => (
                      <motion.div
                        key={ability.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300"
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
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200">
                    <div className="space-y-4">
                      {role.bestFor.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex items-center"
                        >
                          <CheckCircle size={20} className="text-purple-600 mr-3 flex-shrink-0" weight="duotone" />
                          <span className="text-slate-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200">
                    <h4 className="font-bold text-purple-800 mb-3">Combat Style Type</h4>
                    <div className="space-y-2">
                      {role.neurotypeMatch.map((type, index) => (
                        <div key={index} className="flex items-center">
                          <Star size={16} className="text-purple-600 mr-2" weight="fill" />
                          <span className="text-purple-700 font-medium">{type}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-sm text-purple-600 font-medium">
                      {role.progressionTeaser}
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Arcane Arts Skill Trees</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Three paths of systematic mastery. Develop your systems architecture, data sorcery, and process optimization abilities.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {skillTrees.map((tree, treeIndex) => (
                  <motion.div
                    key={tree.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: treeIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200"
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
                              ? 'border-purple-300 bg-purple-50 shadow-lg'
                              : 'border-purple-200 bg-white/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-slate-900">{skill.name}</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Scholar Career Paths</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Mage roles focused on systems thinking, data mastery, and strategic optimization across technology and business domains.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {careerPaths.map((path, pathIndex) => (
                  <motion.div
                    key={path.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pathIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">{path.category}</h4>
                    <div className="space-y-4">
                      {path.roles.map((role, roleIndex) => (
                        <motion.div
                          key={role.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (pathIndex * 0.2) + (roleIndex * 0.1), duration: 0.4 }}
                          className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-slate-900 flex-1">{role.title}</h5>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-2">
                              {role.level}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Required XP: {role.xp}</span>
                            <Trophy size={16} className="text-purple-600" weight="duotone" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'evolutions' && (
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
                  How different cognitive types excel in the Mage role, and the unique systematic advantages each brings to architectural mastery.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Natural Affinity */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 border border-purple-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star size={32} className="text-white" weight="fill" />
                    </div>
                    <h4 className="text-2xl font-bold text-purple-800">Natural Synergy</h4>
                    <div className="text-purple-600 font-medium">+15% XP Bonus</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Obsidia (Architect)',
                        strengths: ['Systems thinking', 'Logical analysis', 'Pattern recognition', 'Structural design'],
                        bonus: 'Enhanced framework design and complexity mastery'
                      },
                      {
                        neuroclass: 'Aureus (Seeker)',
                        strengths: ['Research mastery', 'Data analysis', 'Knowledge synthesis', 'Experimental thinking'],
                        bonus: 'Superior data sorcery and predictive modeling'
                      }
                    ].map((match) => (
                      <div key={match.neuroclass} className="bg-white/70 rounded-xl p-4">
                        <h5 className="font-bold text-purple-800 mb-2">{match.neuroclass}</h5>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {match.strengths.map((strength, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle size={14} className="text-purple-600 mr-1" weight="fill" />
                              <span className="text-purple-700">{strength}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-purple-600 font-medium">
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
                  className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain size={32} className="text-white" weight="duotone" />
                    </div>
                    <h4 className="text-2xl font-bold text-amber-800">Cross-Class Potential</h4>
                    <div className="text-amber-600 font-medium">Adaptation XP</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Lumina (Visioneer)',
                        adaptation: 'Visionary Architect',
                        challenge: 'Balance big picture thinking with detailed system design'
                      },
                      {
                        neuroclass: 'Azura (Empath)',
                        adaptation: 'Human-Centered Mage',
                        challenge: 'Integrate emotional intelligence into analytical frameworks'
                      },
                      {
                        neuroclass: 'Crimsonix (Executor)',
                        adaptation: 'Action-Oriented Architect',
                        challenge: 'Develop patience for thorough analysis and design'
                      },
                      {
                        neuroclass: 'Noxion (Challenger)',
                        adaptation: 'Disruptive Architect',
                        challenge: 'Channel intensity into systematic problem-solving'
                      },
                      {
                        neuroclass: 'Solara (Artisan)',
                        adaptation: 'Creative Systems Designer',
                        challenge: 'Balance artistic intuition with logical rigor'
                      }
                    ].map((cross, index) => (
                      <motion.div
                        key={cross.neuroclass}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="bg-white/70 rounded-xl p-4"
                      >
                        <h5 className="font-bold text-amber-800 mb-2">{cross.neuroclass}</h5>
                        <div className="text-sm text-amber-700 mb-2">
                          <strong>Adaptation:</strong> {cross.adaptation}
                        </div>
                        <div className="text-sm text-amber-600">
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
            className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Master the Arcane Arts?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Transform complexity into clarity. Build systems that scale, analyze data that reveals truth, and architect solutions that change industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/assessment'}
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Brain size={20} className="inline mr-2" weight="bold" />
                Discover Your Neuroclass
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/roles'}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
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
