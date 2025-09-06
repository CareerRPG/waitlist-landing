'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightning, 
  Fire, 
  Star, 
  Target, 
  Users, 
  TrendUp, 
  Crown, 
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  UserCircle
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuroClassNavigation from '@/components/NeuroClassNavigation';
import { Bolt } from 'lucide-react';

export default function CrimsonixPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'traits' | 'careers' | 'growth'>('overview');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const strengths = [
    {
      icon: Lightning,
      title: 'Decisive Action',
      description: 'You excel at making quick, confident decisions even with incomplete information. Your bias toward action creates momentum.',
      examples: ['Crisis management', 'Quick pivots', 'Time-sensitive decisions']
    },
    {
      icon: Target,
      title: 'Results-Driven Focus',
      description: 'You have laser focus on outcomes and deliverables. You naturally prioritize high-impact activities over busy work.',
      examples: ['Goal achievement', 'Performance optimization', 'Resource allocation']
    },
    {
      icon: Users,
      title: 'Natural Leadership',
      description: 'People naturally look to you for direction during uncertainty. Your confidence and clarity inspire others to follow.',
      examples: ['Team leadership', 'Change initiatives', 'Performance coaching']
    },
    {
      icon: Bolt,
      title: 'Execution Excellence',
      description: 'You turn ideas into reality with remarkable speed and efficiency. Your implementation skills are your superpower.',
      examples: ['Project delivery', 'Process improvement', 'Rapid prototyping']
    }
  ];

  const careerPaths = [
    {
      category: 'Executive Leadership',
      roles: [
        { title: 'Chief Executive Officer', growth: 'High', salary: '$200k - $500k+' },
        { title: 'Chief Operating Officer', growth: 'High', salary: '$180k - $400k' },
        { title: 'General Manager', growth: 'Medium', salary: '$120k - $250k' },
        { title: 'Division President', growth: 'High', salary: '$150k - $350k' }
      ]
    },
    {
      category: 'Sales & Revenue',
      roles: [
        { title: 'VP of Sales', growth: 'High', salary: '$140k - $300k' },
        { title: 'Sales Director', growth: 'High', salary: '$110k - $200k' },
        { title: 'Business Development Lead', growth: 'Medium', salary: '$90k - $160k' },
        { title: 'Account Executive', growth: 'High', salary: '$80k - $180k' }
      ]
    },
    {
      category: 'Operations & Delivery',
      roles: [
        { title: 'Operations Director', growth: 'Medium', salary: '$120k - $200k' },
        { title: 'Project Management Lead', growth: 'Medium', salary: '$100k - $160k' },
        { title: 'Supply Chain Manager', growth: 'Medium', salary: '$90k - $150k' },
        { title: 'Manufacturing Director', growth: 'Medium', salary: '$110k - $180k' }
      ]
    }
  ];

  const growthTips = [
    {
      phase: 'Early Career Power',
      duration: '0-3 years',
      focus: 'Build your execution reputation',
      actions: [
        'Volunteer for high-visibility projects with tight deadlines',
        'Develop strong project management and organizational skills',
        'Learn to communicate progress clearly and frequently',
        'Build relationships with senior leaders through results'
      ]
    },
    {
      phase: 'Leadership Development',
      duration: '3-7 years',
      focus: 'Scale your impact through others',
      actions: [
        'Take on team leadership roles and P&L responsibility',
        'Develop coaching and performance management skills',
        'Learn strategic thinking to complement tactical excellence',
        'Build cross-functional partnerships and influence skills'
      ]
    },
    {
      phase: 'Executive Mastery',
      duration: '7+ years',
      focus: 'Drive organizational transformation',
      actions: [
        'Lead large-scale change and transformation initiatives',
        'Develop enterprise-level strategic thinking capabilities',
        'Mentor next generation of execution-focused leaders',
        'Serve on boards or as advisor to other organizations'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'COO at ScaleUp Tech',
      content: 'Learning about my Crimsonix nature helped me understand why I thrive under pressure. Now I deliberately seek out execution-heavy roles where I can make immediate impact.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Maria Santos',
      role: 'VP Sales at GrowthCorp',
      content: 'The Crimsonix framework validated my natural leadership style. I stopped second-guessing my quick decision-making and started leveraging it as a competitive advantage.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'James Mitchell',
      role: 'Operations Director',
      content: 'Understanding my execution-first mindset helped me build better partnerships with strategic thinkers. Now I know when to slow down and when to accelerate.',
      image: '/api/placeholder/64/64'
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
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <Navbar />
      <NeuroClassNavigation currentClass="crimsonix" />
      
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
              <div>
                <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-full text-sm font-medium text-red-700 mb-6"
                >
                  <Fire size={16} className="mr-2" weight="duotone" />
                  The Executor
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Crimsonix</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  You&apos;re a decisive action-taker who thrives on turning ideas into reality. 
                  Your superpower lies in cutting through complexity to deliver results with 
                  remarkable speed and precision.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Play size={20} className="mr-2" weight="fill" />
                    Take Assessment
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-red-300 text-red-700 hover:bg-red-50 font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
                  >
                    Explore Leadership Paths
                  </motion.button>
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative w-80 h-80 mx-auto">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/20 to-pink-400/20"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full bg-gradient-to-r from-pink-400/20 to-red-400/20"
                  ></motion.div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                    <Fire size={120} className="text-white" weight="duotone" />
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-red-200">
                  <div className="text-center">
                    <Target size={24} className="text-red-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Results</div>
                    <div className="text-xs text-slate-600">Focused</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-pink-200">
                  <div className="text-center">
                    <Lightning size={24} className="text-pink-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Action</div>
                    <div className="text-xs text-slate-600">Oriented</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Navigation Tabs */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-2">
            <div className="grid grid-cols-4 gap-2">
              {[
                { key: 'overview', label: 'Overview', icon: Lightning },
                { key: 'traits', label: 'Strengths', icon: Star },
                { key: 'careers', label: 'Careers', icon: Target },
                { key: 'growth', label: 'Growth', icon: TrendUp }
              ].map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as 'overview' | 'traits' | 'careers' | 'growth')}
                  className={`flex items-center justify-center px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  whileHover={activeTab !== tab.key ? { scale: 1.02 } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon size={20} className="mr-2" weight="duotone" />
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.section
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6 mb-20"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Executor Nature</h3>
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      <p>
                        As a Crimsonix, you possess an exceptional ability to translate ideas into action. 
                        You thrive in environments that demand quick decisions, clear direction, and measurable 
                        results. While others might hesitate or overanalyze, you instinctively know when to 
                        move and how to mobilize resources effectively.
                      </p>
                      <p>
                        Your execution-first mindset makes you invaluable during high-pressure situations, 
                        tight deadlines, and organizational changes. You have a natural talent for cutting 
                        through complexity to identify the most direct path to success. People rely on you 
                        to get things done, and you rarely disappoint.
                      </p>
                      <p>
                        However, your strength in rapid execution can sometimes come at the cost of thorough 
                        planning or stakeholder buy-in. Learning to balance your natural speed with strategic 
                        patience and inclusive decision-making will make you an even more effective leader.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Traits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { trait: 'Action-Oriented', description: 'You prefer doing over discussing and move quickly from decision to implementation' },
                        { trait: 'Results-Driven', description: 'You focus relentlessly on outcomes and measurable achievements' },
                        { trait: 'Decisive', description: 'You make confident decisions even with incomplete information' },
                        { trait: 'Performance-Focused', description: 'You naturally optimize for efficiency and effectiveness' },
                        { trait: 'Direct Communication', description: 'You communicate clearly and expect the same from others' },
                        { trait: 'Pressure-Resistant', description: 'You actually perform better under pressure and tight deadlines' }
                      ].map((item, index) => (
                        <motion.div
                          key={item.trait}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">{item.trait}</div>
                            <div className="text-sm text-slate-600">{item.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <Crown size={24} className="mr-2" weight="duotone" />
                      Quick Stats
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Execution Speed</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Decision Making</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Leadership Potential</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Strategic Planning</span>
                        <div className="flex">
                          {[...Array(3)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <Star key={i} size={16} className="text-white/50" weight="regular" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Famous Crimsonixi</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Jack Welch', role: 'Former GE CEO' },
                        { name: 'Indra Nooyi', role: 'Former PepsiCo CEO' },
                        { name: 'Tim Cook', role: 'Apple CEO' },
                        { name: 'Satya Nadella', role: 'Microsoft CEO' }
                      ].map((person) => (
                        <div key={person.name} className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                            <UserCircle size={16} className="text-white" weight="duotone" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{person.name}</div>
                            <div className="text-xs text-slate-600">{person.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === 'traits' && (
            <motion.section
              key="traits"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6 mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Superpowers</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  These are the core strengths that make you exceptional as a Crimsonix. 
                  Understanding and leveraging these will accelerate your leadership success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onMouseEnter={() => setHoveredCard(strength.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 transition-all duration-300 ${
                      hoveredCard === strength.title ? 'shadow-xl scale-105' : 'hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <strength.icon size={24} className="text-white" weight="duotone" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{strength.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{strength.description}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Practical Applications:</h4>
                      <div className="space-y-2">
                        {strength.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle size={16} className="text-red-500 mr-2 flex-shrink-0" weight="duotone" />
                            <span className="text-sm text-slate-700">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'careers' && (
            <motion.section
              key="careers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6 mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Ideal Career Paths</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  These roles leverage your natural execution abilities and provide the results-focused 
                  challenges that energize you most.
                </p>
              </div>

              <div className="space-y-12">
                {careerPaths.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg mr-3"></div>
                      {category.category}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.roles.map((role, roleIndex) => (
                        <motion.div
                          key={role.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (categoryIndex * 0.2) + (roleIndex * 0.1), duration: 0.4 }}
                          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-lg font-semibold text-slate-900">{role.title}</h4>
                            <div className="text-right">
                              <div className="text-sm font-medium text-slate-900">{role.salary}</div>
                              <div className={`text-xs px-2 py-1 rounded-full ${
                                role.growth === 'High' 
                                  ? 'bg-green-100 text-green-700' 
                                  : role.growth === 'Medium'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-slate-100 text-slate-700'
                              }`}>
                                {role.growth} Growth
                              </div>
                            </div>
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 hover:from-red-200 hover:to-pink-200 text-red-700 rounded-lg transition-all duration-300 text-sm font-medium"
                          >
                            Explore Path
                            <ArrowRight size={14} className="ml-2" weight="bold" />
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-12 text-white text-center"
              >
                <h3 className="text-3xl font-bold mb-4">Ready to Lead?</h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Connect with our executive coaches to accelerate your path to leadership 
                  and maximize your execution superpowers.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Leadership Coaching
                </motion.button>
              </motion.div>
            </motion.section>
          )}

          {activeTab === 'growth' && (
            <motion.section
              key="growth"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6 mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Leadership Journey</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  A strategic roadmap for developing your Crimsonix superpowers and building 
                  a legendary leadership career over time.
                </p>
              </div>

              <div className="space-y-8">
                {growthTips.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                      <div className="lg:w-1/3">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                            index === 0 ? 'bg-green-100' : index === 1 ? 'bg-orange-100' : 'bg-red-100'
                          }`}>
                            <div className={`w-6 h-6 rounded-full ${
                              index === 0 ? 'bg-green-500' : index === 1 ? 'bg-orange-500' : 'bg-red-500'
                            }`}></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">{phase.phase}</h3>
                            <div className="flex items-center text-sm text-slate-600">
                              <Clock size={14} className="mr-1" weight="duotone" />
                              {phase.duration}
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-700 font-medium">{phase.focus}</p>
                      </div>
                      
                      <div className="lg:w-2/3">
                        <h4 className="font-semibold text-slate-900 mb-4">Key Actions:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {phase.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-start">
                              <CheckCircle size={16} className="text-red-500 mr-3 mt-0.5 flex-shrink-0" weight="duotone" />
                              <span className="text-sm text-slate-700">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="mt-20">
                <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Success Stories</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                          <UserCircle size={24} className="text-white" weight="duotone" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{testimonial.name}</div>
                          <div className="text-sm text-slate-600">{testimonial.role}</div>
                        </div>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed italic">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
