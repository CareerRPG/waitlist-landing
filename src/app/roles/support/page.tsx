'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  Star,
  CheckCircle,
  Users,
  Trophy,
  Brain,
  Target,
  Crown,
  GameController,
  ChartLineUp,
  Eye,
  Compass
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SupportRolePage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const role = {
    id: 'support',
    name: 'Support',
    title: 'The Master of Preparation',
    description: 'A tactician who is always one step ahead. Ideal for planning, creating smooth workflows, and empowering your future self.',
    icon: Lightbulb,
    color: 'gray',
    gradient: 'from-gray-500 to-slate-500',
    traits: ['Strategic', 'Planning-focused', 'Systematic', 'Forward-thinking'],
    bestFor: ['Project planning', 'Workflow design', 'System setup', 'Future preparation'],
    neurotypeMatch: ['Permanent Combat Style'],
    examples: ['Strategic planning', 'Workflow optimization', 'System design', 'Preparation tasks'],
    progressionTeaser: 'Evolve into a Tactician, Sage, or Oracle.',
    evolutions: [
      { name: 'Tactician', description: 'Master strategist who creates flawless execution plans' },
      { name: 'Sage', description: 'Wisdom keeper who designs systems that anticipate future needs' },
      { name: 'Oracle', description: 'Visionary planner who sees optimal paths before others recognize them' }
    ]
  };

  const skillTrees = [
    {
      id: 'vision',
      name: 'Visionary Strategy',
      icon: Eye,
      color: 'from-gray-400 to-slate-500',
      skills: [
        { name: 'Future Sight', level: 1, description: 'Anticipate industry trends and opportunities' },
        { name: 'Innovation Framework', level: 2, description: 'Design systematic approaches to innovation' },
        { name: 'Strategic Roadmapping', level: 3, description: 'Create comprehensive long-term plans' },
        { name: 'Transformation Leadership', level: 4, description: 'Guide organizations through major changes' },
        { name: 'Legacy Architecture', level: 5, description: 'Build systems that outlast generations' }
      ]
    },
    {
      id: 'enablement',
      name: 'Team Enablement',
      icon: Users,
      color: 'from-slate-400 to-gray-500',
      skills: [
        { name: 'Talent Recognition', level: 1, description: 'Identify hidden potential in team members' },
        { name: 'Growth Facilitation', level: 2, description: 'Create environments for skill development' },
        { name: 'Mentorship Mastery', level: 3, description: 'Guide others to reach their full potential' },
        { name: 'Leadership Development', level: 4, description: 'Cultivate next generation of leaders' },
        { name: 'Organizational Catalyst', level: 5, description: 'Transform entire company cultures' }
      ]
    },
    {
      id: 'guidance',
      name: 'Strategic Guidance',
      icon: Compass,
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Decision Architecture', level: 1, description: 'Structure complex decision-making processes' },
        { name: 'Stakeholder Alignment', level: 2, description: 'Unite diverse perspectives toward common goals' },
        { name: 'Crisis Navigation', level: 3, description: 'Provide clarity during uncertain times' },
        { name: 'Executive Advisory', level: 4, description: 'Counsel senior leadership on strategic matters' },
        { name: 'Wisdom Integration', level: 5, description: 'Synthesize experience into actionable insights' }
      ]
    }
  ];

  const careerPaths = [
    {
      category: 'Strategic Leadership',
      roles: [
        { title: 'Chief Strategy Officer', level: 'Executive', xp: '10,000+' },
        { title: 'Head of Innovation', level: 'Senior', xp: '7,500+' },
        { title: 'Strategy Director', level: 'Senior', xp: '5,000+' },
        { title: 'Strategic Planning Manager', level: 'Mid', xp: '2,500+' }
      ]
    },
    {
      category: 'People Development',
      roles: [
        { title: 'VP of People & Culture', level: 'Executive', xp: '8,000+' },
        { title: 'Chief Learning Officer', level: 'Executive', xp: '9,000+' },
        { title: 'Head of Talent Development', level: 'Senior', xp: '6,000+' },
        { title: 'Leadership Development Manager', level: 'Mid', xp: '3,000+' }
      ]
    },
    {
      category: 'Executive Coaching',
      roles: [
        { title: 'Executive Coach', level: 'Expert', xp: '7,000+' },
        { title: 'Organizational Development Consultant', level: 'Senior', xp: '5,500+' },
        { title: 'Change Management Leader', level: 'Senior', xp: '4,500+' },
        { title: 'Team Development Specialist', level: 'Mid', xp: '2,000+' }
      ]
    }
  ];

  const stats = [
    { label: 'Strategic Impact', value: '95%', icon: Target },
    { label: 'Team Growth Rate', value: '3.2x', icon: ChartLineUp },
    { label: 'Innovation Score', value: '8.7/10', icon: Lightbulb },
    { label: 'Leadership Multiplier', value: '4.5x', icon: Crown }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-neutral-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-slate-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-slate-100 rounded-full text-sm font-medium text-gray-700 mb-6"
                >
                  <Lightbulb size={16} className="mr-2" weight="duotone" />
                  Support Role
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
                >
                  The Strategic
                  <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent"> Enabler</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  Visionary enablers who empower others through strategic guidance and transformational mentorship. 
                  You don&apos;t just lead—you multiply leadership across entire organizations.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {role.traits.map((trait, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-gradient-to-r from-gray-500 to-slate-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <GameController size={20} className="inline mr-2" weight="bold" />
                    Start Support Journey
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300">
                    <Target size={20} className="inline mr-2" weight="bold" />
                    View Skill Tree
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
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500 to-slate-500 mx-auto mb-4">
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'overview', label: 'Overview', icon: Eye },
                { id: 'skills', label: 'Skill Trees', icon: Target },
                { id: 'careers', label: 'Career Paths', icon: Trophy },
                { id: 'neuroclass', label: 'Neuroclass Synergy', icon: Brain }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-gray-50 hover:text-gray-700'
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
                        title: 'Strategic Vision',
                        description: 'See beyond immediate challenges to identify long-term opportunities and create roadmaps that others can follow.',
                        icon: Eye,
                        gradient: 'from-gray-500 to-slate-500'
                      },
                      {
                        title: 'Leadership Multiplication',
                        description: 'Transform individual contributors into leaders by recognizing potential and providing the right growth opportunities.',
                        icon: Users,
                        gradient: 'from-slate-500 to-orange-500'
                      },
                      {
                        title: 'Innovation Catalyst',
                        description: 'Create environments where breakthrough ideas emerge naturally and teams feel empowered to take creative risks.',
                        icon: Lightbulb,
                        gradient: 'from-orange-500 to-red-500'
                      },
                      {
                        title: 'Wisdom Integration',
                        description: 'Synthesize complex information from multiple sources into clear, actionable insights that drive organizational success.',
                        icon: Brain,
                        gradient: 'from-red-500 to-pink-500'
                      }
                    ].map((ability, index) => (
                      <motion.div
                        key={ability.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
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
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                    <div className="space-y-4">
                      {role.bestFor.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex items-center"
                        >
                          <CheckCircle size={20} className="text-gray-500 mr-3 flex-shrink-0" weight="duotone" />
                          <span className="text-slate-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-br from-gray-100 to-slate-100 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Neuroclass Affinity</h4>
                    <div className="space-y-2">
                      {role.neurotypeMatch.map((neuroclass, index) => (
                        <div key={index} className="flex items-center">
                          <Star size={16} className="text-gray-600 mr-2" weight="fill" />
                          <span className="text-gray-700 font-medium">{neuroclass}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Skill Trees</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Three specialized paths of mastery. Progress through each tree to unlock powerful abilities and transform your strategic impact.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {skillTrees.map((tree, treeIndex) => (
                  <motion.div
                    key={tree.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: treeIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200"
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
                              ? 'border-gray-300 bg-gray-50 shadow-lg'
                              : 'border-gray-200 bg-white/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-slate-900">{skill.name}</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Career Progression Paths</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Strategic enabler roles across industries. Each path offers unique opportunities to guide organizations and develop leaders.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {careerPaths.map((path, pathIndex) => (
                  <motion.div
                    key={path.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pathIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">{path.category}</h4>
                    <div className="space-y-4">
                      {path.roles.map((role, roleIndex) => (
                        <motion.div
                          key={role.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (pathIndex * 0.2) + (roleIndex * 0.1), duration: 0.4 }}
                          className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-slate-900 flex-1">{role.title}</h5>
                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full ml-2">
                              {role.level}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Required XP: {role.xp}</span>
                            <Trophy size={16} className="text-gray-500" weight="duotone" />
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
                  How different cognitive types excel in the Support role, and the unique advantages each brings to strategic enablement.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Natural Affinity */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-gray-100 to-slate-100 rounded-2xl p-8 border border-gray-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star size={32} className="text-white" weight="fill" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">Natural Synergy</h4>
                    <div className="text-gray-600 font-medium">+15% XP Bonus</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Lumina (Visioneer)',
                        strengths: ['Future-focused thinking', 'Pattern recognition', 'Innovation catalyst', 'Big picture synthesis'],
                        bonus: 'Enhanced strategic foresight and transformational leadership'
                      },
                      {
                        neuroclass: 'Azura (Empath)',
                        strengths: ['People development', 'Emotional intelligence', 'Team harmony', 'Individual mentorship'],
                        bonus: 'Superior talent recognition and growth facilitation'
                      }
                    ].map((match) => (
                      <div key={match.neuroclass} className="bg-white/70 rounded-xl p-4">
                        <h5 className="font-bold text-gray-800 mb-2">{match.neuroclass}</h5>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {match.strengths.map((strength, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle size={14} className="text-gray-600 mr-1" weight="fill" />
                              <span className="text-gray-700">{strength}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
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
                  className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 border border-purple-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Crown size={32} className="text-white" weight="duotone" />
                    </div>
                    <h4 className="text-2xl font-bold text-purple-800">Cross-Class Potential</h4>
                    <div className="text-purple-600 font-medium">Adaptation XP</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Crimsonix (Executor)',
                        adaptation: 'Decisive Strategic Leadership',
                        challenge: 'Balance quick execution with long-term vision'
                      },
                      {
                        neuroclass: 'Obsidia (Architect)',
                        adaptation: 'Systematic Enablement',
                        challenge: 'Structure growth processes while maintaining flexibility'
                      },
                      {
                        neuroclass: 'Noxion (Challenger)',
                        adaptation: 'Transformational Catalyst',
                        challenge: 'Channel intensity into constructive mentorship'
                      },
                      {
                        neuroclass: 'Solara (Artisan)',
                        adaptation: 'Creative Strategy',
                        challenge: 'Blend innovative thinking with practical guidance'
                      },
                      {
                        neuroclass: 'Aureus (Seeker)',
                        adaptation: 'Research-Driven Leadership',
                        challenge: 'Transform insights into actionable team development'
                      }
                    ].map((cross, index) => (
                      <motion.div
                        key={cross.neuroclass}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="bg-white/70 rounded-xl p-4"
                      >
                        <h5 className="font-bold text-purple-800 mb-2">{cross.neuroclass}</h5>
                        <div className="text-sm text-purple-700 mb-2">
                          <strong>Adaptation:</strong> {cross.adaptation}
                        </div>
                        <div className="text-sm text-purple-600">
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
            className="bg-gradient-to-br from-gray-500 to-slate-500 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Become a Strategic Enabler?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Transform your vision into organizational reality. Guide teams, develop leaders, and multiply your impact across entire companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/assessment'}
                className="bg-white text-gray-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Brain size={20} className="inline mr-2" weight="bold" />
                Discover Your Neuroclass
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/roles'}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-600 transition-all duration-300"
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
