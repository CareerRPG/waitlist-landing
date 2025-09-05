'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Star,
  CheckCircle,
  Users,
  Trophy,
  Brain,
  GameController,
  ChartLineUp,
  Palette,
  Crosshair,
  PaintBrush,
  Camera
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ArcherRolePage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const role = {
    id: 'archer',
    name: 'Archer',
    title: 'The Master of Prioritization',
    description: 'Take aim at your most important tasks for maximum impact. Excellent for high-leverage work that demands artistic flair or laser focus.',
    icon: Target,
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
    traits: ['Strategic', 'Precise', 'Impact-focused', 'Creative'],
    bestFor: ['Strategic projects', 'Creative work', 'High-impact tasks', 'Priority focus'],
    neurotypeMatch: ['Permanent Combat Style'],
    examples: ['High-leverage work', 'Creative projects', 'Strategic priorities', 'Impact-focused tasks'],
    progressionTeaser: 'Evolve into a hunter, Ranger, or Sniper.',
    evolutions: [
      { name: 'hunter', description: 'Expert at identifying and pursuing the highest-value targets' },
      { name: 'Ranger', description: 'Long-range strategist who spots important opportunities from afar' },
      { name: 'Sniper', description: 'Precision specialist who eliminates low-priority tasks with surgical accuracy' }
    ]
  };

  const skillTrees = [
    {
      id: 'precision',
      name: 'Precision Craft',
      icon: Crosshair,
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Detail Mastery', level: 1, description: 'Perfect execution of intricate creative elements' },
        { name: 'Quality Focus', level: 2, description: 'Maintain exceptional standards across all outputs' },
        { name: 'Technical Excellence', level: 3, description: 'Master tools and techniques for flawless delivery' },
        { name: 'Perfection Protocol', level: 4, description: 'Achieve consistently exceptional creative results' },
        { name: 'Legendary Craft', level: 5, description: 'Create works that define industry standards' }
      ]
    },
    {
      id: 'creativity',
      name: 'Creative Vision',
      icon: PaintBrush,
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Conceptual Thinking', level: 1, description: 'Generate original ideas and unique perspectives' },
        { name: 'Aesthetic Sense', level: 2, description: 'Develop refined taste and visual judgment' },
        { name: 'Innovation Flow', level: 3, description: 'Channel creativity into breakthrough solutions' },
        { name: 'Artistic Leadership', level: 4, description: 'Guide teams to achieve creative excellence' },
        { name: 'Visionary Expression', level: 5, description: 'Create works that inspire entire industries' }
      ]
    },
    {
      id: 'strategy',
      name: 'Strategic Design',
      icon: Camera,
      color: 'from-red-400 to-orange-500',
      skills: [
        { name: 'Design Thinking', level: 1, description: 'Apply systematic approaches to creative problems' },
        { name: 'User-Centered Focus', level: 2, description: 'Create solutions that deeply resonate with audiences' },
        { name: 'Brand Architecture', level: 3, description: 'Build cohesive creative systems and identities' },
        { name: 'Experience Design', level: 4, description: 'Craft meaningful journeys and interactions' },
        { name: 'Cultural Impact', level: 5, description: 'Create designs that influence society and culture' }
      ]
    }
  ];

  const careerPaths = [
    {
      category: 'Creative Leadership',
      roles: [
        { title: 'Chief Creative Officer', level: 'Executive', xp: '10,000+' },
        { title: 'Creative Director', level: 'Senior', xp: '7,500+' },
        { title: 'Art Director', level: 'Senior', xp: '6,000+' },
        { title: 'Senior Designer', level: 'Mid', xp: '4,500+' }
      ]
    },
    {
      category: 'Product & UX Design',
      roles: [
        { title: 'Head of Design', level: 'Executive', xp: '9,000+' },
        { title: 'Principal UX Designer', level: 'Senior', xp: '7,000+' },
        { title: 'Product Designer', level: 'Mid', xp: '5,000+' },
        { title: 'UX/UI Designer', level: 'Mid', xp: '4,000+' }
      ]
    },
    {
      category: 'Brand & Marketing',
      roles: [
        { title: 'Brand Director', level: 'Senior', xp: '6,500+' },
        { title: 'Marketing Creative Lead', level: 'Senior', xp: '5,500+' },
        { title: 'Brand Manager', level: 'Mid', xp: '4,000+' },
        { title: 'Content Creative', level: 'Mid', xp: '3,500+' }
      ]
    }
  ];

  const stats = [
    { label: 'Creative Impact', value: '4.7x', icon: Palette },
    { label: 'Design Quality', value: '96%', icon: Target },
    { label: 'User Satisfaction', value: '93%', icon: Users },
    { label: 'Brand Strength', value: '89%', icon: ChartLineUp }
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm font-medium text-orange-700 mb-6"
                >
                  <Target size={16} className="mr-2" weight="duotone" />
                  Archer Role
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
                >
                  The Creative
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Specialist</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  Precision creatives who hit the mark every time. You don&apos;t just make things beautiful—you craft experiences that resonate deeply and drive meaningful impact.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {role.traits.map((trait, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <GameController size={20} className="inline mr-2" weight="bold" />
                    Start Archer Journey
                  </button>
                  <button className="border-2 border-orange-300 text-orange-700 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-all duration-300">
                    <Target size={20} className="inline mr-2" weight="bold" />
                    View Creative Arts
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
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 mx-auto mb-4">
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-orange-200">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'overview', label: 'Overview', icon: Target },
                { id: 'skills', label: 'Creative Arts', icon: PaintBrush },
                { id: 'careers', label: 'Design Paths', icon: Trophy },
                { id: 'neuroclass', label: 'Neuroclass Synergy', icon: Brain }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-orange-50 hover:text-orange-700'
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
                        title: 'Precision Creativity',
                        description: 'Combine artistic vision with meticulous execution to create works that are both beautiful and functionally perfect.',
                        icon: Crosshair,
                        gradient: 'from-orange-500 to-red-500'
                      },
                      {
                        title: 'Design Strategy',
                        description: 'Translate business objectives into compelling visual narratives that drive engagement and results.',
                        icon: Camera,
                        gradient: 'from-red-500 to-orange-500'
                      },
                      {
                        title: 'Aesthetic Leadership',
                        description: 'Guide teams and stakeholders toward creative excellence while maintaining artistic integrity.',
                        icon: PaintBrush,
                        gradient: 'from-pink-500 to-red-500'
                      },
                      {
                        title: 'User-Centered Innovation',
                        description: 'Create solutions that balance creativity with deep understanding of user needs and behaviors.',
                        icon: Users,
                        gradient: 'from-orange-500 to-red-500'
                      }
                    ].map((ability, index) => (
                      <motion.div
                        key={ability.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300"
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
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                    <div className="space-y-4">
                      {role.bestFor.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex items-center"
                        >
                          <CheckCircle size={20} className="text-orange-500 mr-3 flex-shrink-0" weight="duotone" />
                          <span className="text-slate-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 border border-orange-200">
                    <h4 className="font-bold text-orange-800 mb-3">Neuroclass Affinity</h4>
                    <div className="space-y-2">
                      {role.neurotypeMatch.map((neuroclass, index) => (
                        <div key={index} className="flex items-center">
                          <Star size={16} className="text-orange-600 mr-2" weight="fill" />
                          <span className="text-orange-700 font-medium">{neuroclass}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-sm text-orange-600">
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Creative Arts Skill Trees</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Three paths of creative mastery. Develop your precision craft, creative vision, and strategic design abilities to hit every creative target.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {skillTrees.map((tree, treeIndex) => (
                  <motion.div
                    key={tree.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: treeIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200"
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
                              ? 'border-orange-300 bg-orange-50 shadow-lg'
                              : 'border-orange-200 bg-white/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-slate-900">{skill.name}</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Design Career Paths</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Archer roles focused on creative excellence, user experience, and brand development across design and marketing domains.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {careerPaths.map((path, pathIndex) => (
                  <motion.div
                    key={path.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pathIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">{path.category}</h4>
                    <div className="space-y-4">
                      {path.roles.map((role, roleIndex) => (
                        <motion.div
                          key={role.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (pathIndex * 0.2) + (roleIndex * 0.1), duration: 0.4 }}
                          className="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-slate-900 flex-1">{role.title}</h5>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full ml-2">
                              {role.level}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Required XP: {role.xp}</span>
                            <Trophy size={16} className="text-orange-500" weight="duotone" />
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
                  How different cognitive types excel in the Archer role, and the unique creative advantages each brings to precision design.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Natural Affinity */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 border border-orange-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star size={32} className="text-white" weight="fill" />
                    </div>
                    <h4 className="text-2xl font-bold text-orange-800">Natural Synergy</h4>
                    <div className="text-orange-600 font-medium">+15% XP Bonus</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Solara (Artisan)',
                        strengths: ['Aesthetic mastery', 'Creative expression', 'Attention to detail', 'Artistic intuition'],
                        bonus: 'Enhanced creative vision and precision craft'
                      },
                      {
                        neuroclass: 'Lumina (Visioneer)',
                        strengths: ['Innovative thinking', 'Big picture design', 'Trend anticipation', 'Strategic creativity'],
                        bonus: 'Superior strategic design and innovation flow'
                      }
                    ].map((match) => (
                      <div key={match.neuroclass} className="bg-white/70 rounded-xl p-4">
                        <h5 className="font-bold text-orange-800 mb-2">{match.neuroclass}</h5>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {match.strengths.map((strength, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle size={14} className="text-orange-600 mr-1" weight="fill" />
                              <span className="text-orange-700">{strength}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-orange-600 font-medium">
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
                  className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 border border-emerald-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Palette size={32} className="text-white" weight="duotone" />
                    </div>
                    <h4 className="text-2xl font-bold text-emerald-800">Cross-Class Potential</h4>
                    <div className="text-emerald-600 font-medium">Adaptation XP</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Azura (Empath)',
                        adaptation: 'Human-Centered Designer',
                        challenge: 'Balance emotional resonance with aesthetic excellence'
                      },
                      {
                        neuroclass: 'Crimsonix (Executor)',
                        adaptation: 'Results-Driven Creative',
                        challenge: 'Develop patience for iterative creative processes'
                      },
                      {
                        neuroclass: 'Obsidia (Architect)',
                        adaptation: 'Systematic Designer',
                        challenge: 'Balance structure with creative spontaneity'
                      },
                      {
                        neuroclass: 'Noxion (Challenger)',
                        adaptation: 'Disruptive Designer',
                        challenge: 'Channel intensity into refined creative expression'
                      },
                      {
                        neuroclass: 'Aureus (Seeker)',
                        adaptation: 'Research-Driven Designer',
                        challenge: 'Transform insights into compelling visual narratives'
                      }
                    ].map((cross, index) => (
                      <motion.div
                        key={cross.neuroclass}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="bg-white/70 rounded-xl p-4"
                      >
                        <h5 className="font-bold text-emerald-800 mb-2">{cross.neuroclass}</h5>
                        <div className="text-sm text-emerald-700 mb-2">
                          <strong>Adaptation:</strong> {cross.adaptation}
                        </div>
                        <div className="text-sm text-emerald-600">
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
            className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Hit Every Creative Target?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Combine artistry with precision to create designs that resonate. Build brands, craft experiences, and shape the visual future of industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/assessment'}
                className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Brain size={20} className="inline mr-2" weight="bold" />
                Discover Your Neuroclass
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/roles'}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
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
