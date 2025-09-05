'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Star,
  CheckCircle,
  Users,
  Trophy,
  Brain,
  Target,
  GameController,
  ChartLineUp,
  Peace,
  Flower,
  HeartStraight
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HealerRolePage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const role = {
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
    progressionTeaser: 'Evolve into a Medic, Lifekeeper, or Reclaimer.',
    evolutions: [
      { name: 'Medic', description: 'Expert in rapid recovery and energy restoration techniques' },
      { name: 'Lifekeeper', description: 'Master of long-term sustainability and work-life harmony' },
      { name: 'Reclaimer', description: 'Specialist in recovering from burnout and rebuilding energy systems' }
    ]
  };

  const skillTrees = [
    {
      id: 'empathy',
      name: 'Empathic Resonance',
      icon: Heart,
      color: 'from-blue-400 to-cyan-500',
      skills: [
        { name: 'Emotional Insight', level: 1, description: 'Read and understand team emotional dynamics' },
        { name: 'Compassionate Listening', level: 2, description: 'Create safe spaces for authentic expression' },
        { name: 'Healing Presence', level: 3, description: 'Restore team morale and individual confidence' },
        { name: 'Harmony Weaving', level: 4, description: 'Transform conflict into deeper collaboration' },
        { name: 'Soul Leadership', level: 5, description: 'Inspire profound personal and professional growth' }
      ]
    },
    {
      id: 'support',
      name: 'Team Restoration',
      icon: HeartStraight,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'Trust Building', level: 1, description: 'Establish psychological safety and openness' },
        { name: 'Growth Facilitation', level: 2, description: 'Guide individual development journeys' },
        { name: 'Collective Healing', level: 3, description: 'Restore team dynamics after challenges' },
        { name: 'Culture Cultivation', level: 4, description: 'Shape positive organizational environments' },
        { name: 'Legacy Nurturing', level: 5, description: 'Create sustainable cultures of care and excellence' }
      ]
    },
    {
      id: 'harmony',
      name: 'Harmony Mastery',
      icon: Peace,
      color: 'from-teal-400 to-green-500',
      skills: [
        { name: 'Conflict Resolution', level: 1, description: 'Navigate and resolve interpersonal tensions' },
        { name: 'Bridge Building', level: 2, description: 'Connect diverse perspectives and personalities' },
        { name: 'Synergy Creation', level: 3, description: 'Align individual strengths into collective power' },
        { name: 'Ecosystem Balance', level: 4, description: 'Maintain harmony across complex organizations' },
        { name: 'Unity Transcendence', level: 5, description: 'Achieve collective consciousness and shared purpose' }
      ]
    }
  ];

  const careerPaths = [
    {
      category: 'People & Culture',
      roles: [
        { title: 'Chief People Officer', level: 'Executive', xp: '9,000+' },
        { title: 'VP of Human Resources', level: 'Executive', xp: '8,000+' },
        { title: 'Director of People Experience', level: 'Senior', xp: '6,500+' },
        { title: 'HR Business Partner', level: 'Mid', xp: '4,000+' }
      ]
    },
    {
      category: 'Team Leadership',
      roles: [
        { title: 'Organizational Development Leader', level: 'Senior', xp: '7,000+' },
        { title: 'Team Development Manager', level: 'Senior', xp: '5,500+' },
        { title: 'Engineering Manager', level: 'Mid', xp: '4,500+' },
        { title: 'Scrum Master / Team Lead', level: 'Mid', xp: '3,500+' }
      ]
    },
    {
      category: 'Customer & Community',
      roles: [
        { title: 'Customer Success Director', level: 'Senior', xp: '6,000+' },
        { title: 'Community Manager', level: 'Mid', xp: '4,000+' },
        { title: 'Customer Experience Manager', level: 'Mid', xp: '3,500+' },
        { title: 'Support Team Lead', level: 'Mid', xp: '3,000+' }
      ]
    }
  ];

  const stats = [
    { label: 'Team Satisfaction', value: '94%', icon: Heart },
    { label: 'Retention Rate', value: '87%', icon: Users },
    { label: 'Conflict Resolution', value: '91%', icon: Peace },
    { label: 'Growth Acceleration', value: '2.8x', icon: ChartLineUp }
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-sm font-medium text-blue-700 mb-6"
                >
                  <Heart size={16} className="mr-2" weight="duotone" />
                  Healer Role
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
                >
                  The Harmony
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Builder</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  Compassionate connectors who create environments where people thrive. You don&apos;t just manage teams—you heal, nurture, and unlock human potential.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {role.traits.map((trait, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <GameController size={20} className="inline mr-2" weight="bold" />
                    Start Healer Journey
                  </button>
                  <button className="border-2 border-blue-300 text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300">
                    <Target size={20} className="inline mr-2" weight="bold" />
                    View Healing Arts
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
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-4">
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-blue-200">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'overview', label: 'Overview', icon: Heart },
                { id: 'skills', label: 'Healing Arts', icon: HeartStraight },
                { id: 'careers', label: 'Care Paths', icon: Trophy },
                { id: 'neuroclass', label: 'Neuroclass Synergy', icon: Brain }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
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
                        title: 'Empathic Leadership',
                        description: 'Understand and respond to team emotional needs, creating environments where everyone feels valued and heard.',
                        icon: Heart,
                        gradient: 'from-blue-500 to-cyan-500'
                      },
                      {
                        title: 'Conflict Transformation',
                        description: 'Turn tensions into opportunities for deeper understanding and stronger team bonds.',
                        icon: Peace,
                        gradient: 'from-cyan-500 to-teal-500'
                      },
                      {
                        title: 'Growth Nurturing',
                        description: 'Recognize individual potential and create personalized development pathways for each team member.',
                        icon: Flower,
                        gradient: 'from-teal-500 to-green-500'
                      },
                      {
                        title: 'Culture Healing',
                        description: 'Repair damaged team dynamics and build resilient, supportive organizational cultures.',
                        icon: HeartStraight,
                        gradient: 'from-green-500 to-blue-500'
                      }
                    ].map((ability, index) => (
                      <motion.div
                        key={ability.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300"
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
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200">
                    <div className="space-y-4">
                      {role.bestFor.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex items-center"
                        >
                          <CheckCircle size={20} className="text-blue-500 mr-3 flex-shrink-0" weight="duotone" />
                          <span className="text-slate-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-3">Neuroclass Affinity</h4>
                    <div className="space-y-2">
                      {role.neurotypeMatch.map((neuroclass, index) => (
                        <div key={index} className="flex items-center">
                          <Star size={16} className="text-blue-600 mr-2" weight="fill" />
                          <span className="text-blue-700 font-medium">{neuroclass}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-sm text-blue-600">
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Healing Arts Skill Trees</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Three paths of compassionate mastery. Develop your empathic resonance, team restoration abilities, and harmony creation skills.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {skillTrees.map((tree, treeIndex) => (
                  <motion.div
                    key={tree.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: treeIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200"
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
                              ? 'border-blue-300 bg-blue-50 shadow-lg'
                              : 'border-blue-200 bg-white/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-slate-900">{skill.name}</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Care Career Paths</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Healer leadership roles focused on people development, team harmony, and organizational wellbeing.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {careerPaths.map((path, pathIndex) => (
                  <motion.div
                    key={path.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pathIndex * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">{path.category}</h4>
                    <div className="space-y-4">
                      {path.roles.map((role, roleIndex) => (
                        <motion.div
                          key={role.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (pathIndex * 0.2) + (roleIndex * 0.1), duration: 0.4 }}
                          className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-slate-900 flex-1">{role.title}</h5>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full ml-2">
                              {role.level}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">Required XP: {role.xp}</span>
                            <Trophy size={16} className="text-blue-500" weight="duotone" />
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
                <h3 className="text-4xl font-bold text-slate-900 mb-4">Evolution Paths</h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Master your Healer Combat Style to unlock these powerful evolution paths and specialized abilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Natural Affinity */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 border border-blue-200"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star size={32} className="text-white" weight="fill" />
                    </div>
                    <h4 className="text-2xl font-bold text-blue-800">Natural Synergy</h4>
                    <div className="text-blue-600 font-medium">+15% XP Bonus</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Azura (Empath)',
                        strengths: ['Emotional intelligence', 'Interpersonal sensitivity', 'Conflict resolution', 'Team harmony'],
                        bonus: 'Enhanced empathic resonance and healing presence'
                      },
                      {
                        neuroclass: 'Solara (Artisan)',
                        strengths: ['Creative problem solving', 'Individual expression', 'Aesthetic harmony', 'Personal connection'],
                        bonus: 'Superior growth nurturing and culture cultivation'
                      }
                    ].map((match) => (
                      <div key={match.neuroclass} className="bg-white/70 rounded-xl p-4">
                        <h5 className="font-bold text-blue-800 mb-2">{match.neuroclass}</h5>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {match.strengths.map((strength, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle size={14} className="text-blue-600 mr-1" weight="fill" />
                              <span className="text-blue-700">{strength}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-blue-600 font-medium">
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
                      <Users size={32} className="text-white" weight="duotone" />
                    </div>
                    <h4 className="text-2xl font-bold text-purple-800">Cross-Class Potential</h4>
                    <div className="text-purple-600 font-medium">Adaptation XP</div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        neuroclass: 'Lumina (Visioneer)',
                        adaptation: 'Visionary Healer',
                        challenge: 'Balance big picture thinking with individual care needs'
                      },
                      {
                        neuroclass: 'Crimsonix (Executor)',
                        adaptation: 'Action-Oriented Healer',
                        challenge: 'Develop patience for gradual relationship building'
                      },
                      {
                        neuroclass: 'Obsidia (Architect)',
                        adaptation: 'Systematic Healer',
                        challenge: 'Balance structure with emotional flexibility'
                      },
                      {
                        neuroclass: 'Noxion (Challenger)',
                        adaptation: 'Transformative Healer',
                        challenge: 'Channel intensity into gentle but powerful healing'
                      },
                      {
                        neuroclass: 'Aureus (Seeker)',
                        adaptation: 'Wisdom Healer',
                        challenge: 'Apply insights to practical team relationship building'
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
            className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Heal and Harmonize?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Transform teams through empathy and care. Build cultures where everyone thrives and create lasting positive change through human connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/assessment'}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Brain size={20} className="inline mr-2" weight="bold" />
                Discover Your Neuroclass
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/roles'}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
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
