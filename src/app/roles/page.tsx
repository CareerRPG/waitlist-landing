'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GameController, 
  Shield, 
  Heart, 
  Gear, 
  MagnifyingGlass, 
  Lightning,
  Play,
  CheckCircle,
  Trophy,
  Brain,
  Target,
  Sword,
  Lightbulb,
  Crown,
  IconProps
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Role {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  color: string;
  gradient: string;
  traits: string[];
  bestFor: string[];
  neurotypeMatch: string[];
  examples: string[];
  progressionTeaser: string;
}

export default function RolesPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const roles: Role[] = [
    {
      id: 'warrior',
      name: 'Warrior',
      title: 'The Master of Momentum',
      description: 'Charge through your task list with unstoppable momentum. Ideal for building powerful work streaks and conquering execution-heavy days.',
      icon: Sword,
      color: 'red',
      gradient: 'from-red-500 to-pink-500',
      traits: ['High-energy', 'Goal-crushing', 'Momentum-driven', 'Results-focused'],
      bestFor: ['Sales calls', 'Rapid prototyping', 'Critical deadlines', 'Performance sprints'],
      neurotypeMatch: ['Permanent Combat Style'],
      examples: ['Urgent tasks', 'High-energy execution', 'Deadline work', 'Power sessions'],
      progressionTeaser: 'Evolve into a Duelist, Warlord, or Titan.'
    },
    {
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
      progressionTeaser: 'Evolve into a Spellbinder, Arcanist, or Chronowise.'
    },
    {
      id: 'healer',
      name: 'Healer',
      title: 'The Champion of Sustainability',
      description: 'A master of preventing burnout. Ideal for maintaining consistent energy, managing stress, and fostering healthy work habits.',
      icon: Heart,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      traits: ['Sustainable', 'Balanced', 'Energy-focused', 'Harmonious'],
      bestFor: ['Long-term projects', 'Consistent daily habits', 'Stress management', 'Work-life balance'],
      neurotypeMatch: ['Permanent Combat Style'],
      examples: ['Sustainable work habits', 'Energy management', 'Balanced productivity', 'Burnout prevention'],
      progressionTeaser: 'Evolve into a Medic, Lifekeeper, or Reclaimer.'
    },
    {
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
      progressionTeaser: 'Evolve into a Sentinel, Bulwark, or Vanguard.'
    },
    {
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
      progressionTeaser: 'Evolve into an Infiltrator, Shadowblade, or Phantom.'
    },
    {
      id: 'archer',
      name: 'Archer',
      title: 'The Master of Prioritization',
      description: 'Take aim at your most important tasks for maximum impact. Excellent for high-leverage work that demands artistic flair or laser focus.',
      icon: Target,
      color: 'orange',
      gradient: 'from-orange-500 to-yellow-500',
      traits: ['Strategic', 'Precise', 'Impact-focused', 'Creative'],
      bestFor: ['Strategic projects', 'Creative work', 'High-impact tasks', 'Priority focus'],
      neurotypeMatch: ['Permanent Combat Style'],
      examples: ['High-leverage work', 'Creative projects', 'Strategic priorities', 'Impact-focused tasks'],
      progressionTeaser: 'Evolve into a hunter, Ranger, or Sniper.'
    },
    {
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
      progressionTeaser: 'Evolve into a Tactician, Sage, or Oracle.'
    }
  ];

  const stats = [
    { label: 'RPG Roles', value: '7', icon: GameController },
    { label: 'Career Paths', value: '200+', icon: Target },
    { label: 'Skill Combinations', value: '∞', icon: Lightning },
    { label: 'Growth Opportunities', value: 'Unlimited', icon: Trophy }
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

  const roleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
              <GameController size={16} className="mr-2" weight="duotone" />
              Career RPG Roles
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Choose Your
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Combat Style</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Your Role is your permanent Combat Style for the Pomodoro Dungeon. This is a meaningful, long-term choice that defines how you play the game of productivity. It has its own deep progression system with powerful Evolutions to unlock. This choice is completely independent of your professional path. <strong>Which class will you master?</strong>
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 mx-auto mb-4">
                    <stat.icon size={24} className="text-white" weight="duotone" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Roles Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The 7 Combat Styles
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each Combat Style is a permanent choice that defines your long-term progression in the game of productivity. 
              Master your chosen style, unlock powerful evolutions, and build deep expertise in your preferred approach to work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial="hidden"
                whileInView="visible"
                variants={roleVariants}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredRole(role.id)}
                onMouseLeave={() => setHoveredRole(null)}
                onClick={() => setSelectedRole(role.id)}
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                  hoveredRole === role.id 
                    ? 'shadow-2xl scale-105 border-emerald-300' 
                    : 'border-slate-200 hover:shadow-lg'
                } ${selectedRole === role.id ? 'ring-2 ring-emerald-500 ring-offset-2' : ''}`}
              >
                {/* Role Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${role.gradient} mb-4`}>
                  <role.icon size={32} className="text-white" weight="duotone" />
                </div>

                {/* Role Info */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{role.name}</h3>
                <p className="text-sm font-medium text-slate-600 mb-3">{role.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">{role.description}</p>

                {/* Traits */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {role.traits.slice(0, 3).map((trait, idx) => (
                    <span 
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full bg-${role.color}-100 text-${role.color}-700`}
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Gamification Focus */}
                <div className="text-xs text-slate-500 mb-3">
                  <span className="font-medium">Type:</span> {role.neurotypeMatch.join(', ')}
                </div>

                {/* Progression Teaser */}
                <div className="text-xs text-indigo-600 mb-4 font-medium bg-indigo-50 rounded-lg p-2">
                  {role.progressionTeaser}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `/roles/${role.id}`;
                  }}
                  className={`w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r ${role.gradient} text-white rounded-lg transition-all duration-300 text-sm font-medium`}
                >
                  Play as {role.name}
                  <Play size={14} className="ml-2" weight="bold" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Role Details Modal */}
        <AnimatePresence>
          {selectedRole && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedRole(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const role = roles.find(r => r.id === selectedRole);
                  if (!role) return null;

                  return (
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mr-4`}>
                          <role.icon size={32} className="text-white" weight="duotone" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{role.name}</h3>
                          <p className="text-slate-600">{role.title}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-700 leading-relaxed mb-6">{role.description}</p>

                      {/* Core Traits */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Core Traits</h4>
                        <div className="flex flex-wrap gap-2">
                          {role.traits.map((trait, idx) => (
                            <span 
                              key={idx}
                              className={`px-3 py-1 rounded-full bg-${role.color}-100 text-${role.color}-700 text-sm font-medium`}
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Best For */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Best For</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {role.bestFor.map((item, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle size={16} className="text-emerald-500 mr-2" weight="duotone" />
                              <span className="text-sm text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Career Examples */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-slate-900 mb-3">Career Examples</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {role.examples.map((example, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle size={16} className="text-slate-500 mr-2" weight="duotone" />
                              <span className="text-sm text-slate-700">{example}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.location.href = `/roles/${role.id}`}
                          className={`flex-1 bg-gradient-to-r ${role.gradient} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300`}
                        >
                          Play as {role.name}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedRole(null)}
                          className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300"
                        >
                          Close
                        </motion.button>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pomodoro Dungeon Focus */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                The Pomodoro Dungeon Experience
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Transform your focused work sessions into immersive gaming adventures
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Gamification Focus */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GameController size={40} className="text-white" weight="duotone" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Permanent Combat Style</h3>
                <div className="bg-white/70 rounded-2xl p-6 text-left">
                  <p className="text-slate-700 mb-4">
                    <strong>A meaningful, long-term choice</strong> — your permanent approach to productivity gaming.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Independent of cognitive type</li>
                    <li>• Deep progression system</li>
                    <li>• Unique abilities per Combat Style</li>
                    <li>• Powerful evolution paths</li>
                  </ul>
                  <div className="mt-4 p-3 bg-indigo-100 rounded-xl">
                    <p className="text-sm text-indigo-700">
                      <strong>Example:</strong> Choose Warrior to master momentum-based productivity and evolve into a Duelist, Warlord, or Titan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Session Enhancement */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightning size={40} className="text-white" weight="duotone" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enhanced Focus</h3>
                <div className="bg-white/70 rounded-2xl p-6 text-left">
                  <p className="text-slate-700 mb-4">
                    <strong>Unique abilities boost your productivity</strong> — role-specific enhancements.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• +25-30% productivity bonuses</li>
                    <li>• Role-specific power-ups</li>
                    <li>• Immersive work experience</li>
                    <li>• Achievement unlocks</li>
                  </ul>
                  <div className="mt-4 p-3 bg-emerald-100 rounded-xl">
                    <p className="text-sm text-emerald-700">
                      <strong>Example:</strong> Mage gets +30% analysis power, Warrior gets +30% execution speed.
                    </p>
                  </div>
                </div>
              </div>

              {/* No Wrong Choice */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Crown size={40} className="text-white" weight="duotone" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mastery & Evolution</h3>
                <div className="bg-white/70 rounded-2xl p-6 text-left">
                  <p className="text-slate-700 mb-4">
                    <strong>Commitment brings rewards</strong> — master your chosen path for powerful evolutions.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Build expertise over time</li>
                    <li>• Unlock advanced abilities</li>
                    <li>• Access evolution paths</li>
                    <li>• Develop specialized mastery</li>
                  </ul>
                  <div className="mt-4 p-3 bg-orange-100 rounded-xl">
                    <p className="text-sm text-orange-700">
                      <strong>Example:</strong> A dedicated Tank can evolve into a Sentinel (focus mastery), Bulwark (defense expert), or Vanguard (leadership).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* How It Works */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Combat Style System
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Combat Styles are permanent choices that define your long-term progression path. Choose wisely and 
              commit to mastering your style to unlock powerful evolutions and advanced abilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Combat Style',
                description: 'Select your permanent Combat Style - a meaningful choice that defines your long-term progression path.',
                icon: Brain
              },
              {
                step: '2',
                title: 'Master Your Abilities',
                description: 'Each Combat Style grants unique productivity bonuses and deep specialization opportunities.',
                icon: Target
              },
              {
                step: '3',
                title: 'Unlock Evolutions',
                description: 'Progress through your chosen path to unlock powerful evolutions and advanced abilities.',
                icon: Trophy
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 mx-auto mb-6">
                  <item.icon size={28} className="text-white" weight="duotone" />
                </div>
                <div className="text-sm font-bold text-emerald-600 mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Choose Your Combat Style & Begin Your Journey
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Transform your work into an epic adventure. Select your permanent Combat Style, master your abilities, 
              and evolve into a productivity champion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <GameController size={20} className="inline mr-2" weight="bold" />
                Start Playing Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/assessment'}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                <Brain size={20} className="inline mr-2" weight="bold" />
                Take Assessment First
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
