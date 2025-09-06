'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  GameController, 
  Shield, 
  Heart, 
  Gear, 
  MagnifyingGlass, 
  Play,
  Trophy,
  Target,
  Sword,
  Lightbulb,
  Timer,
  LightningSlash,
  Icon
} from 'phosphor-react';

interface GameRole {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: Icon;
  color: string;
  gradient: string;
  playstyle: string[];
  abilities: string[];
  pomodoroFocus: string;
  examples: string[];
  progressionTeaser: string;
}

export default function GameRoles() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const gameRoles: GameRole[] = [
    {
      id: 'warrior',
      name: 'Warrior',
      title: 'The Master of Momentum',
      description: 'Charge through your task list with unstoppable momentum. Ideal for building powerful work streaks and conquering execution-heavy days.',
      icon: Sword,
      color: 'red',
      gradient: 'from-red-500 to-pink-500',
      playstyle: ['High-energy', 'Goal-crushing', 'Momentum-driven', 'Results-focused'],
      abilities: ['Execution Speed +30%', 'Focus Intensity +25%', 'Deadline Crusher', 'Power Hour Mode'],
      pomodoroFocus: 'High-energy execution, urgent tasks, and rapid completion work',
      examples: ['Sales calls', 'Rapid prototyping', 'Critical deadlines', 'Performance sprints'],
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
      playstyle: ['Analytical', 'Systematic', 'Logic-driven', 'Detail-oriented'],
      abilities: ['Analysis Power +25%', 'System Optimization +30%', 'Logic Enhancement', 'Pattern Recognition'],
      pomodoroFocus: 'Analysis, system design, data work, and complex problem-solving',
      examples: ['Data analysis', 'System architecture', 'Process optimization', 'Research deep-dives'],
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
      playstyle: ['Sustainable', 'Balanced', 'Energy-focused', 'Harmonious'],
      abilities: ['Energy Management +25%', 'Stress Resistance +30%', 'Burnout Prevention', 'Flow State'],
      pomodoroFocus: 'Sustainable work habits, energy management, and balanced productivity',
      examples: ['Long-term projects', 'Consistent daily habits', 'Stress management', 'Work-life balance'],
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
      playstyle: ['Protective', 'Focused', 'Consistent', 'Disciplined'],
      abilities: ['Distraction Defense +30%', 'Habit Formation +25%', 'Deep Focus', 'Environmental Control'],
      pomodoroFocus: 'Distraction-heavy environments, habit building, and consistent focus',
      examples: ['Open office work', 'Habit formation', 'Deep focus tasks', 'Routine building'],
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
      playstyle: ['Efficient', 'Quick', 'Precise', 'Task-focused'],
      abilities: ['Task Completion +30%', 'Efficiency Boost +25%', 'Quick Strike', 'Priority Focus'],
      pomodoroFocus: 'Task clearing, efficiency optimization, and rapid completion',
      examples: ['To-do list clearing', 'Quick tasks', 'Efficiency sprints', 'Admin work'],
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
      playstyle: ['Strategic', 'Precise', 'Impact-focused', 'Creative'],
      abilities: ['Priority Targeting +30%', 'Impact Amplification +25%', 'Creative Flow', 'Laser Focus'],
      pomodoroFocus: 'High-impact tasks, creative work, and strategic priorities',
      examples: ['Strategic projects', 'Creative work', 'High-impact tasks', 'Priority focus'],
      progressionTeaser: 'Evolve into a Hunter, Ranger, or Sniper.'
    },
    {
      id: 'support',
      name: 'Support',
      title: 'The Master of Preparation',
      description: 'A tactician who is always one step ahead. Ideal for planning, creating smooth workflows, and empowering your future self.',
      icon: Lightbulb,
      color: 'gray',
      gradient: 'from-gray-500 to-slate-500',
      playstyle: ['Strategic', 'Planning-focused', 'Systematic', 'Forward-thinking'],
      abilities: ['Planning Efficiency +25%', 'Workflow Optimization +30%', 'Future Preparation', 'System Design'],
      pomodoroFocus: 'Planning sessions, workflow design, and preparation tasks',
      examples: ['Project planning', 'Workflow design', 'System setup', 'Future preparation'],
      progressionTeaser: 'Evolve into a Tactician, Sage, or Oracle.'
    }
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
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-sm font-medium text-indigo-700 mb-6"
          >
            <GameController size={16} className="mr-2" weight="duotone" />
            RPG Roles
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Choose Your
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Combat Style</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Your Role is your permanent Combat Style for the Pomodoro Dungeon. This is a meaningful, long-term choice that defines how you play the game of productivity. It has its own deep progression system with powerful Evolutions to unlock. This choice is completely independent of your professional path.{' '}
            <span className="font-semibold text-indigo-600">Which class will you master?</span>
          </motion.p>
        </motion.div>

        {/* Pomodoro Dungeon Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 mb-16 text-white text-center"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
            <Timer size={32} className="mr-3" weight="duotone" />
            <h3 className="text-2xl font-bold">The Pomodoro Dungeon</h3>
          </motion.div>
          <motion.p variants={itemVariants} className="text-lg opacity-90 max-w-3xl mx-auto">
            Your permanent Combat Style transforms your focused work sessions into immersive gaming experiences. 
            Master your chosen class, unlock powerful evolutions, and turn productivity into an epic adventure!
          </motion.p>
        </motion.div>

        {/* Roles Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
        >
          {gameRoles.map((role, index) => (
            <motion.div
              key={role.id}
              variants={roleVariants}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredRole(role.id)}
              onMouseLeave={() => setHoveredRole(null)}
              onClick={() => setSelectedRole(role.id)}
              className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                hoveredRole === role.id 
                  ? 'shadow-2xl scale-105 border-indigo-300' 
                  : 'border-slate-200 hover:shadow-lg'
              } ${selectedRole === role.id ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
            >
              {/* Role Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${role.gradient} mb-4`}>
                <role.icon size={32} className="text-white" weight="duotone" />
              </div>

              {/* Role Info */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{role.name}</h3>
              <p className="text-sm font-medium text-slate-600 mb-3">{role.title}</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{role.description}</p>

              {/* Playstyle Tags */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-slate-500 mb-2">PLAYSTYLE</div>
                <div className="flex flex-wrap gap-1">
                  {role.playstyle.slice(0, 2).map((style, idx) => (
                    <span 
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full bg-${role.color}-100 text-${role.color}-700`}
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pomodoro Focus */}
              <div className="text-xs text-slate-500 mb-3">
                <span className="font-medium">Perfect for:</span> {role.pomodoroFocus}
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
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-12 mb-20"
        >
          <div className="text-center mb-12">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-slate-900 mb-4"
            >
              Gamified Productivity in Action
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Master your permanent Combat Style and unlock powerful evolutions through dedicated progression
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GameController,
                title: 'Choose Your Combat Style',
                description: 'Select your permanent Role - a meaningful choice that defines your long-term progression path.',
                color: 'indigo'
              },
              {
                icon: LightningSlash,
                title: 'Master Your Abilities',
                description: 'Each Role grants unique productivity bonuses and deep specialization opportunities.',
                color: 'purple'
              },
              {
                icon: Trophy,
                title: 'Unlock Evolutions',
                description: 'Progress through your chosen path to unlock powerful evolutions and advanced abilities.',
                color: 'emerald'
              }
            ].map((step) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="bg-white/70 rounded-2xl p-6 text-center"
              >
                <div className={`w-12 h-12 bg-${step.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <step.icon size={24} className={`text-${step.color}-600`} weight="duotone" />
                </div>
                <h4 className="font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Role Independence */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <GameController size={32} className="text-white" weight="duotone" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-slate-900">Permanent Combat Style</h3>
                <p className="text-slate-600">Independent of Neuroclass or Development Arc</p>
              </div>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Your Combat Style is a <strong>permanent, meaningful choice</strong> that defines your long-term 
              progression in the game of productivity. It&apos;s completely separate from your cognitive Neuroclass 
              and professional Development Arc. This choice unlocks a deep progression system with powerful 
              evolutions—making it a commitment worth mastering!
            </p>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Choose Your Combat Style?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Select your permanent Combat Style and begin your journey toward mastering the game of productivity
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <GameController size={20} className="inline mr-2" weight="bold" />
              Start Playing Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
