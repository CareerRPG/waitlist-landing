'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlass, 
  Star,
  CheckCircle,
  Users,
  Trophy,
  Brain,
  Target,
  GameController,
  ChartLineUp,
  Lightning,
  Compass,
  Lightbulb,
  Binoculars
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AssassinRolePage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const role = {
    id: 'assassin',
    name: 'Assassin',
    title: 'The Master of Efficiency',
    description: 'Strike at the heart of tasks with speed and precision. Ideal for clearing a to-do list quickly and efficiently.',
    icon: MagnifyingGlass,
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    traits: ['Efficient', 'Quick', 'Precise', 'Task-focused'],
    bestFor: ['To-do list clearing', 'Quick tasks', 'Efficiency sprints', 'Admin work'],
    neurotypeMatch: ['Permanent Combat Style'],
    examples: ['Task clearing', 'Efficiency optimization', 'Rapid completion', 'Administrative tasks'],
    progressionTeaser: 'Evolve into an Infiltrator, Shadowblade, or Phantom.',
    evolutions: [
      { name: 'Infiltrator', description: 'Master of penetrating complex task structures with surgical precision' },
      { name: 'Shadowblade', description: 'Speed specialist who eliminates tasks before they become problems' },
      { name: 'Phantom', description: 'Efficiency ghost who completes work so fast it seems effortless' }
    ]
  };

  const skillTrees = [
    {
      id: 'adaptability',
      name: 'Shadow Adaptability',
      icon: Compass,
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Environmental Scan', level: 1, description: 'Quickly assess new situations and opportunities' },
        { name: 'Rapid Learning', level: 2, description: 'Master new domains and skills with exceptional speed' },
        { name: 'Context Shifting', level: 3, description: 'Seamlessly adapt approach based on changing conditions' },
        { name: 'Opportunity Recognition', level: 4, description: 'Identify hidden potential in complex scenarios' },
        { name: 'Master Navigator', level: 5, description: 'Guide organizations through any unknown territory' }
      ]
    },
    {
      id: 'investigation',
      name: 'Intelligence Gathering',
      icon: Binoculars,
      color: 'from-emerald-400 to-teal-500',
      skills: [
        { name: 'Deep Research', level: 1, description: 'Uncover hidden insights and critical information' },
        { name: 'Pattern Detection', level: 2, description: 'Identify trends and connections others miss' },
        { name: 'Stakeholder Mapping', level: 3, description: 'Understand complex organizational dynamics' },
        { name: 'Strategic Intelligence', level: 4, description: 'Transform insights into competitive advantages' },
        { name: 'Omniscient Network', level: 5, description: 'Access any information needed for success' }
      ]
    },
    {
      id: 'innovation',
      name: 'Creative Solutions',
      icon: Lightbulb,
      color: 'from-teal-400 to-cyan-500',
      skills: [
        { name: 'Lateral Thinking', level: 1, description: 'Approach problems from unexpected angles' },
        { name: 'Resource Optimization', level: 2, description: 'Achieve maximum impact with minimal resources' },
        { name: 'Solution Synthesis', level: 3, description: 'Combine diverse elements into breakthrough innovations' },
        { name: 'Disruption Design', level: 4, description: 'Create new paradigms and business models' },
        { name: 'Reality Hacking', level: 5, description: 'Transform entire industries through creative solutions' }
      ]
    }
  ];

  const careerPaths = [
    {
      category: 'Product & Innovation',
      roles: [
        { title: 'Chief Product Officer', level: 'Executive', xp: '10,500+' },
        { title: 'VP of Innovation', level: 'Executive', xp: '9,000+' },
        { title: 'Principal Product Manager', level: 'Senior', xp: '7,000+' },
        { title: 'Product Manager', level: 'Mid', xp: '4,500+' }
      ]
    },
    {
      category: 'Business Development',
      roles: [
        { title: 'Chief Business Officer', level: 'Executive', xp: '9,500+' },
        { title: 'VP of Business Development', level: 'Senior', xp: '7,500+' },
        { title: 'Strategic Partnerships Lead', level: 'Senior', xp: '6,000+' },
        { title: 'Business Development Manager', level: 'Mid', xp: '4,000+' }
      ]
    },
    {
      category: 'Research & Consulting',
      roles: [
        { title: 'Principal Consultant', level: 'Expert', xp: '8,500+' },
        { title: 'Research Director', level: 'Senior', xp: '7,000+' },
        { title: 'Strategy Consultant', level: 'Mid', xp: '5,000+' },
        { title: 'Business Analyst', level: 'Mid', xp: '3,500+' }
      ]
    }
  ];

  const stats = [
    { label: 'Adaptation Speed', value: '5.2x', icon: Lightning },
    { label: 'Innovation Rate', value: '91%', icon: Lightbulb },
    { label: 'Market Insight', value: '88%', icon: Binoculars },
    { label: 'Problem Resolution', value: '94%', icon: Target }
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium text-green-700 mb-6"
                >
                  <MagnifyingGlass size={16} className="mr-2" weight="duotone" />
                  Assassin Role
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
                >
                  The Adaptive
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Navigator</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  Agile operators who thrive in uncertainty and discover opportunities others miss. You don&apos;t just solve problems—you find the problems worth solving.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {role.traits.map((trait, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <GameController size={20} className="inline mr-2" weight="bold" />
                    Start Assassin Journey
                  </button>
                  <button className="border-2 border-green-300 text-green-700 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all duration-300">
                    <Target size={20} className="inline mr-2" weight="bold" />
                    View Shadow Arts
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
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mx-auto mb-4">
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-green-200">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'overview', label: 'Overview', icon: MagnifyingGlass },
                { id: 'skills', label: 'Shadow Arts', icon: Compass },
                { id: 'careers', label: 'Navigator Paths', icon: Trophy },
                { id: 'neuroclass', label: 'Neuroclass Synergy', icon: Brain }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-green-50 hover:text-green-700'
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
                        title: 'Adaptive Intelligence',
                        description: 'Rapidly learn new domains and adjust strategies based on changing market conditions and opportunities.',
                        icon: Compass,
                        gradient: 'from-green-500 to-emerald-500'
                      },
                      {
                        title: 'Strategic Investigation',
                        description: 'Uncover hidden insights, market gaps, and competitive advantages through deep research and analysis.',
                        icon: Binoculars,
                        gradient: 'from-emerald-500 to-teal-500'
                      },
                      {
                        title: 'Innovation Catalyst',
                        description: 'Transform constraints into creative solutions and develop breakthrough products and services.',
                        icon: Lightbulb,
                        gradient: 'from-teal-500 to-cyan-500'
                      },
                      {
                        title: 'Opportunity Navigation',
                        description: 'Guide organizations through uncertainty by identifying and capitalizing on emerging opportunities.',
                        icon: Target,
                        gradient: 'from-cyan-500 to-blue-500'
                      }
                    ].map((ability, index) => (
                      <motion.div
                        key={ability.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300"
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
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200">
                    <div className="space-y-4">
                      {role.bestFor.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex items-center"
                        >
                          <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" weight="duotone" />
                          <span className="text-slate-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border border-green-200">
                    <h4 className="font-bold text-green-800 mb-3">Neuroclass Affinity</h4>
                    <div className="space-y-2">
                      {role.neurotypeMatch.map((neuroclass, index) => (
                        <div key={index} className="flex items-center">
                          <Star size={16} className="text-green-600 mr-2" weight="fill" />
                          <span className="text-green-700 font-medium">{neuroclass}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-sm text-green-600">
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Shadow Arts Skill Trees</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Three paths of adaptive mastery. Develop your shadow adaptability, intelligence gathering, and creative solution abilities.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {skillTrees.map((tree, treeIndex) => (
                  <motion.div
                    key={tree.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: treeIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200"
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
                              ? 'border-green-300 bg-green-50 shadow-lg'
                              : 'border-green-200 bg-white/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-slate-900">{skill.name}</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Navigator Career Paths</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Assassin roles focused on adaptation, innovation, and strategic navigation across dynamic business environments.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {careerPaths.map((path, pathIndex) => (
                  <motion.div
                    key={path.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pathIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">{path.category}</h4>
                    <div className="space-y-4">
                      {path.roles.map((role, roleIndex) => (
                        <motion.div
                          key={role.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (pathIndex * 0.2) + (roleIndex * 0.1), duration: 0.4 }}
                          className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-slate-900 flex-1">{role.title}</h5>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full ml-2">
                              {role.level}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Required XP: {role.xp}</span>
                            <Trophy size={16} className="text-green-500" weight="duotone" />
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
                  How different cognitive types excel in the Assassin role, and the unique adaptive advantages each brings to navigation mastery.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Natural Affinity */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 border border-green-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star size={32} className="text-white" weight="fill" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-800">Natural Synergy</h4>
                    <div className="text-green-600 font-medium">+15% XP Bonus</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Aureus (Seeker)',
                        strengths: ['Research mastery', 'Pattern recognition', 'Knowledge synthesis', 'Learning agility'],
                        bonus: 'Enhanced intelligence gathering and strategic investigation'
                      },
                      {
                        neuroclass: 'Crimsonix (Executor)',
                        strengths: ['Rapid execution', 'Opportunity seizing', 'Action orientation', 'Quick pivoting'],
                        bonus: 'Superior adaptive intelligence and opportunity navigation'
                      }
                    ].map((match) => (
                      <div key={match.neuroclass} className="bg-white/70 rounded-xl p-4">
                        <h5 className="font-bold text-green-800 mb-2">{match.neuroclass}</h5>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {match.strengths.map((strength, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle size={14} className="text-green-600 mr-1" weight="fill" />
                              <span className="text-green-700">{strength}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-green-600 font-medium">
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
                  className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 border border-indigo-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Lightning size={32} className="text-white" weight="duotone" />
                    </div>
                    <h4 className="text-2xl font-bold text-indigo-800">Cross-Class Potential</h4>
                    <div className="text-indigo-600 font-medium">Adaptation XP</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Lumina (Visioneer)',
                        adaptation: 'Visionary Navigator',
                        challenge: 'Balance long-term vision with immediate adaptability needs'
                      },
                      {
                        neuroclass: 'Azura (Empath)',
                        adaptation: 'Human-Centered Investigator',
                        challenge: 'Develop systematic research skills while maintaining empathy'
                      },
                      {
                        neuroclass: 'Obsidia (Architect)',
                        adaptation: 'Systematic Navigator',
                        challenge: 'Balance structured thinking with adaptive flexibility'
                      },
                      {
                        neuroclass: 'Noxion (Challenger)',
                        adaptation: 'Disruptive Navigator',
                        challenge: 'Channel intensity into patient investigation and research'
                      },
                      {
                        neuroclass: 'Solara (Artisan)',
                        adaptation: 'Creative Navigator',
                        challenge: 'Apply artistic intuition to business problem-solving'
                      }
                    ].map((cross, index) => (
                      <motion.div
                        key={cross.neuroclass}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="bg-white/70 rounded-xl p-4"
                      >
                        <h5 className="font-bold text-indigo-800 mb-2">{cross.neuroclass}</h5>
                        <div className="text-sm text-indigo-700 mb-2">
                          <strong>Adaptation:</strong> {cross.adaptation}
                        </div>
                        <div className="text-sm text-indigo-600">
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
            className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Navigate the Unknown?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Thrive in uncertainty and discover opportunities others miss. Adapt rapidly, investigate deeply, and innovate your way to breakthrough success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/assessment'}
                className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Brain size={20} className="inline mr-2" weight="bold" />
                Discover Your Neuroclass
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/roles'}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
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
