'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sword, 
  CheckCircle,
  Trophy, 
  Target,
  Crown,
  GameController,
  Lightning,
  Fire,
  Rocket,
  ArrowsClockwise,
  Play
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WarriorRolePage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const role = {
    id: 'warrior',
    name: 'Warrior',
    title: 'The Master of Momentum',
    description: 'Charge through your task list with unstoppable momentum. Ideal for building powerful work streaks and conquering execution-heavy days.',
    icon: Sword,
    color: 'red',
    gradient: 'from-red-500 to-pink-500',
    traits: ['High-energy', 'Goal-crushing', 'Momentum-driven', 'Results-focused'],
    bestFor: ['Sales calls', 'Rapid prototyping', 'Critical deadlines', 'Performance sprints'],
    pomodoroFocus: 'High-energy execution, urgent tasks, and rapid completion work',
    abilities: ['Execution Speed +30%', 'Focus Intensity +25%', 'Deadline Crusher', 'Power Hour Mode'],
    examples: ['Urgent tasks', 'High-energy execution', 'Deadline work', 'Power sessions'],
    progressionTeaser: 'Evolve into a Duelist, Warlord, or Titan.',
    evolutions: [
      { name: 'Duelist', description: 'Master of one-on-one challenges and competitive scenarios' },
      { name: 'Warlord', description: 'Leader of high-energy teams and massive project campaigns' },
      { name: 'Titan', description: 'Unstoppable force capable of moving mountains of work' }
    ]
  };

  const gamingAbilities = [
    {
      id: 'execution',
      name: 'Power Burst',
      icon: Lightning,
      color: 'from-red-400 to-orange-500',
      abilities: [
        { name: 'Quick Strike', level: 1, description: 'Complete tasks 20% faster during focused bursts' },
        { name: 'Battle Rhythm', level: 2, description: 'Maintain peak productivity for 45+ minute sessions' },
        { name: 'Victory Momentum', level: 3, description: 'Chain task completions for escalating XP bonuses' },
        { name: 'Power Hour', level: 4, description: 'Activate super-focus mode for deadline crushing' },
        { name: 'Legendary Sprint', level: 5, description: 'Enter flow state for maximum output sessions' }
      ]
    },
    {
      id: 'focus',
      name: 'Combat Focus',
      icon: Target,
      color: 'from-pink-400 to-red-500',
      abilities: [
        { name: 'Target Lock', level: 1, description: 'Eliminate distractions and lock onto objectives' },
        { name: 'Zone Control', level: 2, description: 'Create distraction-free work environments' },
        { name: 'Deep Strike', level: 3, description: 'Penetrate complex problems with laser focus' },
        { name: 'Time Warp', level: 4, description: 'Make time feel slower during intensive work' },
        { name: 'Flow State', level: 5, description: 'Achieve peak performance consciousness' }
      ]
    },
    {
      id: 'energy',
      name: 'Battle Energy',
      icon: Fire,
      color: 'from-orange-400 to-yellow-500',
      abilities: [
        { name: 'Energy Surge', level: 1, description: 'Boost motivation and enthusiasm for tasks' },
        { name: 'Stamina Boost', level: 2, description: 'Extend productive work sessions without fatigue' },
        { name: 'Adrenaline Rush', level: 3, description: 'Channel excitement into peak performance' },
        { name: 'Warrior Spirit', level: 4, description: 'Maintain high energy even during difficult work' },
        { name: 'Unstoppable Force', level: 5, description: 'Become virtually tireless during work sessions' }
      ]
    }
  ];

  const taskTypes = [
    {
      category: 'High-Energy Work',
      tasks: [
        { title: 'Sales Calls & Presentations', difficulty: 'Intense', bonus: '+35% Energy' },
        { title: 'Client Negotiations', difficulty: 'Intense', bonus: '+30% Focus' },
        { title: 'Rapid Prototyping', difficulty: 'High', bonus: '+25% Speed' },
        { title: 'Team Rallying Sessions', difficulty: 'High', bonus: '+20% Charisma' }
      ]
    },
    {
      category: 'Deadline Crushing',
      tasks: [
        { title: 'Critical Project Sprints', difficulty: 'Extreme', bonus: '+40% Urgency' },
        { title: 'Last-Minute Deliverables', difficulty: 'High', bonus: '+30% Speed' },
        { title: 'Performance Reviews', difficulty: 'High', bonus: '+25% Clarity' },
        { title: 'Crisis Management', difficulty: 'Intense', bonus: '+35% Focus' }
      ]
    },
    {
      category: 'Power Sessions',
      tasks: [
        { title: 'Strategic Planning Sprints', difficulty: 'High', bonus: '+30% Vision' },
        { title: 'Decision Making Blocks', difficulty: 'High', bonus: '+25% Clarity' },
        { title: 'Goal Setting Sessions', difficulty: 'Medium', bonus: '+20% Direction' },
        { title: 'Performance Optimization', difficulty: 'High', bonus: '+30% Results' }
      ]
    }
  ];

  const stats = [
    { label: 'Speed Boost', value: '+30%', icon: Lightning },
    { label: 'Focus Intensity', value: '+25%', icon: Target },
    { label: 'Energy Level', value: 'MAX', icon: Fire },
    { label: 'XP Multiplier', value: '2.5x', icon: Trophy }
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-full text-sm font-medium text-red-700 mb-6"
                >
                  <Sword size={16} className="mr-2" weight="duotone" />
                  Warrior Role
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
                >
                  The Action
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"> Hero</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  Charge through your task list with unstoppable momentum. Perfect for high-energy work sessions 
                  where you need to power through deadlines and crush your goals with decisive action.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {role.traits.map((item, index) => (
                    <span 
                      key={item}
                      className="px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <GameController size={20} className="inline mr-2" weight="bold" />
                    Play as Warrior
                  </button>
                  <button className="border-2 border-red-300 text-red-700 px-8 py-4 rounded-2xl font-semibold hover:bg-red-50 transition-all duration-300">
                    <Lightning size={20} className="inline mr-2" weight="bold" />
                    View Power-Ups
                  </button>
                </motion.div>
              </div>

              {/* Right Column - Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 mx-auto mb-4">
                      <item.icon size={24} className="text-white" weight="duotone" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{item.value}</div>
                    <div className="text-sm text-slate-600">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Navigation Tabs */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-red-200">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'overview', label: 'Overview', icon: Fire },
                { id: 'abilities', label: 'Power-Ups', icon: Lightning },
                { id: 'tasks', label: 'Best Tasks', icon: Target },
                { id: 'gaming', label: 'Gaming Style', icon: GameController }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-red-50 hover:text-red-700'
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
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Core Gaming Abilities</h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: 'Execution Speed +30%',
                        description: 'Complete tasks significantly faster during focused work sessions. Perfect for powering through your to-do list.',
                        icon: Lightning,
                        gradient: 'from-red-500 to-pink-500'
                      },
                      {
                        title: 'Focus Intensity +25%',
                        description: 'Lock onto objectives with laser precision. Eliminate distractions and maintain deep concentration.',
                        icon: Target,
                        gradient: 'from-pink-500 to-orange-500'
                      },
                      {
                        title: 'Deadline Crusher',
                        description: 'Activate special mode for urgent tasks. Time pressure becomes fuel for peak performance.',
                        icon: Rocket,
                        gradient: 'from-orange-500 to-red-500'
                      },
                      {
                        title: 'Power Hour Mode',
                        description: 'Enter maximum productivity state. Sustained high-energy output for challenging work sessions.',
                        icon: Fire,
                        gradient: 'from-red-500 to-pink-500'
                      }
                    ].map((ability, index) => (
                      <motion.div
                        key={ability.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300"
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

                {/* Perfect For */}
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Perfect For</h3>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200">
                    <div className="space-y-4">
                      {role.bestFor.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex items-center"
                        >
                          <CheckCircle size={20} className="text-red-500 mr-3 flex-shrink-0" weight="duotone" />
                          <span className="text-slate-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-6 border border-red-200">
                    <h4 className="font-bold text-red-800 mb-3">Pomodoro Focus</h4>
                    <p className="text-red-700 mb-4">{role.pomodoroFocus}</p>
                    <div className="space-y-2">
                      {role.abilities.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <Lightning size={16} className="text-red-600 mr-2" weight="fill" />
                          <span className="text-red-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'abilities' && (
            <motion.section
              key="abilities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6"
            >
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Warrior Power-Up Trees</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Three paths of gaming mastery. Level up your execution speed, focus intensity, and energy levels to dominate your productivity sessions.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {gamingAbilities.map((tree, treeIndex) => (
                  <motion.div
                    key={tree.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: treeIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200"
                  >
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tree.color} flex items-center justify-center mx-auto mb-4`}>
                        <tree.icon size={32} className="text-white" weight="duotone" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{tree.name}</h4>
                    </div>

                    <div className="space-y-4">
                      {tree.abilities.map((ability, abilityIndex) => (
                        <motion.div
                          key={ability.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (treeIndex * 0.2) + (abilityIndex * 0.1), duration: 0.4 }}
                          onMouseEnter={() => setHoveredSkill(ability.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                            hoveredSkill === ability.name
                              ? 'border-red-300 bg-red-50 shadow-lg'
                              : 'border-red-200 bg-white/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-slate-900">{ability.name}</span>
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                              LV {ability.level}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600">{ability.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'tasks' && (
            <motion.section
              key="tasks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6"
            >
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Best Task Types for Warriors</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Maximize your productivity bonuses by mastering tasks that align with your Warrior Combat Style. These work types unlock your biggest advantages.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {taskTypes.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">{category.category}</h4>
                    <div className="space-y-4">
                      {category.tasks.map((task, taskIndex) => (
                        <motion.div
                          key={task.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (categoryIndex * 0.2) + (taskIndex * 0.1), duration: 0.4 }}
                          className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-slate-900 flex-1">{task.title}</h5>
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full ml-2">
                              {task.difficulty}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Bonus: {task.bonus}</span>
                            <Lightning size={16} className="text-red-500" weight="duotone" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'gaming' && (
            <motion.section
              key="gaming"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6"
            >
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Warrior Gaming Style</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Your permanent Combat Style is all about high-energy action and rapid execution. Perfect for anyone who wants to master the game of productivity with intensity and momentum.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Gaming Philosophy */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-8 border border-red-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <GameController size={32} className="text-white" weight="fill" />
                    </div>
                    <h4 className="text-2xl font-bold text-red-800">Pure Gaming Fun</h4>
                    <div className="text-red-600 font-medium">No commitments required</div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/70 rounded-xl p-4">
                      <h5 className="font-bold text-red-800 mb-3">When to Choose Warrior</h5>
                      <div className="space-y-2">
                        {[
                          'High-energy days',
                          'Urgent deadlines',
                          'Need for speed',
                          'Action-heavy tasks',
                          'Power-through sessions'
                        ].map((when, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Lightning size={14} className="text-red-600 mr-2" weight="fill" />
                            <span className="text-red-700">{when}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/70 rounded-xl p-4">
                      <h5 className="font-bold text-red-800 mb-3">Gaming Benefits</h5>
                      <div className="space-y-2">
                        {[
                          'Instant motivation boost',
                          'Higher completion rates',
                          'Enhanced focus',
                          'Time efficiency',
                          'Achievement satisfaction'
                        ].map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Trophy size={14} className="text-red-600 mr-2" weight="fill" />
                            <span className="text-red-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Switching Roles */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 border border-indigo-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <ArrowsClockwise size={32} className="text-white" weight="duotone" />
                    </div>
                    <h4 className="text-2xl font-bold text-indigo-800">Evolution Paths</h4>
                    <div className="text-indigo-600 font-medium">Master your Combat Style</div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/70 rounded-xl p-4">
                      <h5 className="font-bold text-indigo-800 mb-3">Warrior Evolutions</h5>
                      <p className="text-sm text-indigo-700 mb-3">
                        Master your Warrior Combat Style to unlock these powerful evolution paths and specialized abilities.
                      </p>
                      <div className="space-y-2">
                        {[
                          'Duelist - Master of competitive challenges',
                          'Warlord - Leader of high-energy campaigns',
                          'Titan - Unstoppable productivity force'
                        ].map((suggestion, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Crown size={14} className="text-indigo-600 mr-2" weight="fill" />
                            <span className="text-indigo-700">{suggestion}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/70 rounded-xl p-4">
                      <h5 className="font-bold text-indigo-800 mb-3">Commitment Rewards</h5>
                      <p className="text-sm text-indigo-700">
                        Your permanent Combat Style choice brings deep rewards through mastery. The longer you commit to your Warrior path, the more powerful evolutions you unlock.
                      </p>
                    </div>
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
            className="bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Power Through Your Tasks?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Transform your work sessions into high-energy gaming adventures. Choose Warrior when you need speed, intensity, and unstoppable momentum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play size={20} className="inline mr-2" weight="bold" />
                Start Playing as Warrior
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/roles'}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <GameController size={20} className="inline mr-2" weight="bold" />
                Try Other Roles
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
