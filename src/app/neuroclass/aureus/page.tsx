'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlass, 
  BookOpen, 
  Star, 
  Compass, 
  Target, 
  Binoculars, 
  TrendUp, 
  Crown, 
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  UserCircle,
  Flask
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuroClassNavigation from '@/components/NeuroClassNavigation';

export default function AureusPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'traits' | 'careers' | 'growth'>('overview');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const strengths = [
    {
      icon: MagnifyingGlass,
      title: 'Insatiable Curiosity',
      description: 'You have an endless drive to understand how things work and discover new knowledge. Your curiosity fuels continuous learning.',
      examples: ['Research and investigation', 'Trend analysis', 'Knowledge synthesis']
    },
    {
      icon: Compass,
      title: 'Adaptive Learning',
      description: 'You quickly absorb new information and adapt to changing circumstances, thriving in environments that require flexibility.',
      examples: ['Skill acquisition', 'Technology adoption', 'Cross-functional collaboration']
    },
    {
      icon: Binoculars,
      title: 'Pattern Recognition',
      description: 'You excel at identifying connections and trends across different domains, synthesizing insights from diverse sources.',
      examples: ['Market research', 'Competitive analysis', 'Strategic insights']
    },
    {
      icon: Flask,
      title: 'Experimental Mindset',
      description: 'You approach challenges with scientific rigor, testing hypotheses and iterating based on evidence and feedback.',
      examples: ['A/B testing', 'Prototype development', 'Process optimization']
    }
  ];

  const careerPaths = [
    {
      category: 'Research & Analysis',
      roles: [
        { title: 'Research Scientist', growth: 'High', salary: '$80k - $150k' },
        { title: 'Market Research Director', growth: 'Medium', salary: '$95k - $160k' },
        { title: 'Business Intelligence Analyst', growth: 'High', salary: '$70k - $120k' },
        { title: 'User Research Lead', growth: 'High', salary: '$85k - $140k' }
      ]
    },
    {
      category: 'Consulting & Strategy',
      roles: [
        { title: 'Management Consultant', growth: 'High', salary: '$120k - $220k' },
        { title: 'Strategy Analyst', growth: 'Medium', salary: '$80k - $140k' },
        { title: 'Business Development Manager', growth: 'High', salary: '$90k - $160k' },
        { title: 'Innovation Consultant', growth: 'Medium', salary: '$85k - $150k' }
      ]
    },
    {
      category: 'Product & Technology',
      roles: [
        { title: 'Product Manager', growth: 'High', salary: '$110k - $180k' },
        { title: 'Technical Product Manager', growth: 'High', salary: '$120k - $200k' },
        { title: 'Growth Product Manager', growth: 'High', salary: '$115k - $190k' },
        { title: 'Data Product Manager', growth: 'High', salary: '$125k - $210k' }
      ]
    }
  ];

  const growthTips = [
    {
      phase: 'Knowledge Explorer',
      duration: '0-3 years',
      focus: 'Build broad expertise and research skills',
      actions: [
        'Develop strong research methodologies and analytical skills',
        'Learn to synthesize information from multiple sources',
        'Build expertise in data analysis and visualization tools',
        'Practice communicating complex findings to diverse audiences'
      ]
    },
    {
      phase: 'Strategic Investigator',
      duration: '3-7 years',
      focus: 'Apply learning agility to drive business impact',
      actions: [
        'Take on cross-functional projects requiring diverse knowledge',
        'Develop expertise in strategic thinking and business frameworks',
        'Learn to translate insights into actionable recommendations',
        'Build relationships across different departments and industries'
      ]
    },
    {
      phase: 'Knowledge Architect',
      duration: '7+ years',
      focus: 'Lead innovation through continuous learning',
      actions: [
        'Drive organizational learning and knowledge management initiatives',
        'Lead research and development of new business opportunities',
        'Mentor others in developing learning agility and curiosity',
        'Speak at conferences about trends and insights in your field'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Emily Chen',
      role: 'Senior Research Director at Innovation Labs',
      content: 'Understanding my Aureus nature helped me embrace my constant curiosity. I stopped feeling scattered and started seeing my diverse interests as a strategic advantage.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Strategy Lead',
      content: 'The Aureus framework validated my love of learning new things. Now I actively seek roles that let me explore different domains and connect insights across industries.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Sarah Thompson',
      role: 'Management Consultant',
      content: 'This neuroclass helped me understand why I excel at understanding complex business problems. My curiosity and adaptability are exactly what clients need.',
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navbar />
      <NeuroClassNavigation currentClass="aureus" />
      
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
              <div>
                <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium text-green-700 mb-6"
                >
                  <MagnifyingGlass size={16} className="mr-2" weight="duotone" />
                  The Seeker
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Aureus</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  You&apos;re a curious explorer who thrives on continuous learning and discovery. 
                  Your superpower lies in adapting quickly to new environments and synthesizing 
                  insights from diverse sources to drive innovation.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Play size={20} className="mr-2" weight="fill" />
                    Take Assessment
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-green-300 text-green-700 hover:bg-green-50 font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
                  >
                    Explore Research Careers
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
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-400/20"
                  ></motion.div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <MagnifyingGlass size={120} className="text-white" weight="duotone" />
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-green-200">
                  <div className="text-center">
                    <BookOpen size={24} className="text-green-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Continuous</div>
                    <div className="text-xs text-slate-600">Learner</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-emerald-200">
                  <div className="text-center">
                    <Compass size={24} className="text-emerald-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Adaptive</div>
                    <div className="text-xs text-slate-600">Explorer</div>
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
                { key: 'overview', label: 'Overview', icon: MagnifyingGlass },
                { key: 'traits', label: 'Strengths', icon: Star },
                { key: 'careers', label: 'Careers', icon: Target },
                { key: 'growth', label: 'Growth', icon: TrendUp }
              ].map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as 'overview' | 'traits' | 'careers' | 'growth')}
                  className={`flex items-center justify-center px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Seeker Nature</h3>
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      <p>
                        As an Aureus, you possess an extraordinary ability to learn, adapt, and discover. 
                        Your mind is naturally curious and agile, constantly seeking new knowledge and 
                        making connections across different domains. You thrive in environments that 
                        offer variety, intellectual stimulation, and opportunities for growth.
                      </p>
                      <p>
                        Your learning agility makes you invaluable in rapidly changing industries and 
                        complex problem-solving situations. You excel at research, analysis, and synthesis, 
                        often becoming the go-to person for understanding new trends, technologies, or 
                        market dynamics. Your ability to quickly grasp new concepts gives you a competitive edge.
                      </p>
                      <p>
                        While your curiosity is your greatest strength, it can sometimes lead to analysis 
                        paralysis or difficulty choosing a single path. Learning to focus your exploration 
                        and developing decision-making frameworks will help you channel your seeking nature 
                        into sustained impact and career advancement.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Traits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { trait: 'Curious', description: 'You have an insatiable desire to understand and explore new ideas' },
                        { trait: 'Adaptable', description: 'You quickly adjust to new environments and changing circumstances' },
                        { trait: 'Analytical', description: 'You break down complex information to find patterns and insights' },
                        { trait: 'Synthesizing', description: 'You connect ideas from different sources to create new understanding' },
                        { trait: 'Learning-Focused', description: 'You continuously seek opportunities to grow and develop new skills' },
                        { trait: 'Open-Minded', description: 'You approach new ideas with receptivity and intellectual humility' }
                      ].map((item, index) => (
                        <motion.div
                          key={item.trait}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
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
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <Crown size={24} className="mr-2" weight="duotone" />
                      Quick Stats
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Learning Agility</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Research Skills</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Adaptability</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Deep Specialization</span>
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
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Famous Aureuses</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Leonardo da Vinci', role: 'Renaissance Polymath' },
                        { name: 'Marie Curie', role: 'Pioneering Scientist' },
                        { name: 'Benjamin Franklin', role: 'Inventor & Diplomat' },
                        { name: 'Jane Goodall', role: 'Primatologist & Explorer' }
                      ].map((person) => (
                        <div key={person.name} className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-3">
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
                  These are the core strengths that make you exceptional as an Aureus. 
                  Understanding and leveraging these will accelerate your research and innovation career success.
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
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                            <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" weight="duotone" />
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
                  These roles leverage your natural curiosity and learning agility, providing the research, 
                  analysis, and discovery challenges that energize you most.
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
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mr-3"></div>
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
                            className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 text-green-700 rounded-lg transition-all duration-300 text-sm font-medium"
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
                className="mt-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-12 text-white text-center"
              >
                <h3 className="text-3xl font-bold mb-4">Ready to Explore Your Potential?</h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Connect with our research and innovation specialists to create a learning path 
                  that maximizes your curiosity superpowers.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Learning Strategy Coaching
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
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Learning Journey</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  A strategic roadmap for developing your Aureus superpowers and building 
                  a career focused on continuous discovery and innovation.
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
                            index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-green-100' : 'bg-emerald-100'
                          }`}>
                            <div className={`w-6 h-6 rounded-full ${
                              index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-emerald-500'
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
                              <CheckCircle size={16} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" weight="duotone" />
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
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-3">
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
