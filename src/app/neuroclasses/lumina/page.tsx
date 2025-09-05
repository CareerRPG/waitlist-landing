'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightning, 
  Lightbulb, 
  Star, 
  Eye, 
  Rocket, 
  Target, 
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

export default function LuminaPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'traits' | 'careers' | 'growth'>('overview');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const strengths = [
    {
      icon: Eye,
      title: 'Visionary Thinking',
      description: 'You naturally see the big picture and can envision futures that others miss. Your mind connects distant possibilities.',
      examples: ['Strategic planning', 'Innovation roadmaps', 'Market trend analysis']
    },
    {
      icon: Lightbulb,
      title: 'Creative Innovation',
      description: 'You generate breakthrough ideas by combining concepts in novel ways. Your creativity sparks transformation.',
      examples: ['Product innovation', 'Process redesign', 'Creative problem solving']
    },
    {
      icon: Rocket,
      title: 'Inspirational Leadership',
      description: 'You motivate others through compelling visions of the future. People follow your passion and clarity.',
      examples: ['Team motivation', 'Change management', 'Cultural transformation']
    },
    {
      icon: Target,
      title: 'Future-Focused Planning',
      description: 'You excel at anticipating trends and preparing for what\'s next. Your foresight gives teams a competitive edge.',
      examples: ['Strategic forecasting', 'Scenario planning', 'Trend identification']
    }
  ];

  const careerPaths = [
    {
      category: 'Leadership & Strategy',
      roles: [
        { title: 'Chief Innovation Officer', growth: 'High', salary: '$180k - $350k' },
        { title: 'VP of Strategy', growth: 'High', salary: '$150k - $280k' },
        { title: 'Startup Founder/CEO', growth: 'Variable', salary: 'Equity-based' },
        { title: 'Management Consultant', growth: 'Medium', salary: '$120k - $250k' }
      ]
    },
    {
      category: 'Product & Innovation',
      roles: [
        { title: 'Product Visionary', growth: 'High', salary: '$140k - $220k' },
        { title: 'Innovation Manager', growth: 'Medium', salary: '$110k - $180k' },
        { title: 'Design Thinking Facilitator', growth: 'Medium', salary: '$90k - $150k' },
        { title: 'Future Research Analyst', growth: 'High', salary: '$100k - $160k' }
      ]
    },
    {
      category: 'Creative Industries',
      roles: [
        { title: 'Creative Director', growth: 'Medium', salary: '$120k - $200k' },
        { title: 'Brand Strategist', growth: 'Medium', salary: '$85k - $140k' },
        { title: 'Content Strategy Lead', growth: 'High', salary: '$90k - $160k' },
        { title: 'Experience Designer', growth: 'High', salary: '$95k - $170k' }
      ]
    }
  ];

  const growthTips = [
    {
      phase: 'Foundation Building',
      duration: '0-2 years',
      focus: 'Develop your vision communication skills',
      actions: [
        'Practice storytelling and presentation skills',
        'Learn design thinking methodologies',
        'Build a portfolio of innovative projects',
        'Study successful visionaries and their approaches'
      ]
    },
    {
      phase: 'Skill Expansion',
      duration: '2-5 years',
      focus: 'Bridge vision with execution',
      actions: [
        'Learn project management and agile methodologies',
        'Develop basic business and financial literacy',
        'Practice leading cross-functional teams',
        'Build a network in innovation and strategy circles'
      ]
    },
    {
      phase: 'Leadership Mastery',
      duration: '5+ years',
      focus: 'Scale your visionary impact',
      actions: [
        'Mentor other emerging visionaries',
        'Lead organization-wide transformations',
        'Speak at industry conferences and events',
        'Advise startups or serve on innovation boards'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Chief Innovation Officer at TechFlow',
      content: 'Understanding my Lumina nature helped me lean into my visionary strengths. I stopped apologizing for thinking big and started communicating my ideas more effectively.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Startup Founder',
      content: 'The Lumina framework gave me language for my natural tendencies. Now I know why I excel at strategy but need execution partners.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Dr. Angela Wright',
      role: 'Innovation Consultant',
      content: 'This neuroclass helped me understand why I thrive in ambiguous, future-focused environments. It validated my career pivot into strategic consulting.',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <Navbar />
      <NeuroClassNavigation currentClass="lumina" />
      
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
              <div>
                <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-slate-100 rounded-full text-sm font-medium text-gray-700 mb-6"
                >
                  <Lightning size={16} className="mr-2" weight="duotone" />
                  The Visioneer
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-gray-500 to-slate-500 bg-clip-text text-transparent">Lumina</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  You&apos;re a natural-born innovator who sees possibilities where others see obstacles. 
                  Your superpower lies in envisioning the future and inspiring others to join you on 
                  the journey toward transformation.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-gray-500 to-slate-500 hover:from-gray-600 hover:to-slate-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Play size={20} className="mr-2" weight="fill" />
                    Take Assessment
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
                  >
                    Explore Career Paths
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
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400/20 to-slate-400/20"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full bg-gradient-to-r from-slate-400/20 to-gray-400/20"
                  ></motion.div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-500 to-slate-500 flex items-center justify-center">
                    <Lightning size={120} className="text-white" weight="duotone" />
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                  <div className="text-center">
                    <Lightbulb size={24} className="text-gray-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Innovation</div>
                    <div className="text-xs text-slate-600">Master</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                  <div className="text-center">
                    <Eye size={24} className="text-gray-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Vision</div>
                    <div className="text-xs text-slate-600">Expert</div>
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
                { key: 'overview', label: 'Overview', icon: Eye },
                { key: 'traits', label: 'Strengths', icon: Star },
                { key: 'careers', label: 'Careers', icon: Target },
                { key: 'growth', label: 'Growth', icon: TrendUp }
              ].map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as 'overview' | 'traits' | 'careers' | 'growth')}
                  className={`flex items-center justify-center px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-lg'
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Visionary Nature</h3>
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      <p>
                        As a Lumina, you possess the rare ability to see beyond the present moment. Your mind 
                        naturally gravitates toward possibilities, patterns, and potential futures that others 
                        might overlook. This isn&apos;t just optimism—it&apos;s a cognitive superpower that allows you 
                        to identify opportunities and envision solutions before they become obvious.
                      </p>
                      <p>
                        Your visionary thinking manifests in multiple ways: you excel at connecting seemingly 
                        unrelated concepts, you&apos;re drawn to transformative ideas over incremental improvements, 
                        and you have an intuitive sense for timing and market dynamics. People often describe 
                        you as &quot;ahead of your time&quot; because you see trends before they happen.
                      </p>
                      <p>
                        However, your greatest strength can also be your biggest challenge. While you excel 
                        at the &quot;what&quot; and &quot;why,&quot; you might struggle with the &quot;how&quot; and &quot;when&quot; of execution. 
                        Learning to partner with detail-oriented collaborators and developing project management 
                        skills will amplify your natural gifts.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Traits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { trait: 'Future-Focused', description: 'You naturally think in terms of possibilities and potential outcomes' },
                        { trait: 'Pattern Recognition', description: 'You excel at seeing connections and trends others miss' },
                        { trait: 'Inspirational', description: 'Your passion for the future motivates and energizes others' },
                        { trait: 'Strategic', description: 'You think in systems and long-term cause-and-effect relationships' },
                        { trait: 'Creative', description: 'You generate novel solutions by combining ideas in unique ways' },
                        { trait: 'Optimistic', description: 'You believe in the potential for positive change and transformation' }
                      ].map((item, index) => (
                        <motion.div
                          key={item.trait}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 bg-gray-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
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
                  <div className="bg-gradient-to-br from-gray-500 to-slate-500 rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <Crown size={24} className="mr-2" weight="duotone" />
                      Quick Stats
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Innovation Potential</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Strategic Thinking</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Leadership Potential</span>
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                          <Star size={16} className="text-white/50" weight="regular" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Detail Execution</span>
                        <div className="flex">
                          {[...Array(2)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                          {[...Array(3)].map((_, i) => (
                            <Star key={i} size={16} className="text-white/50" weight="regular" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Famous Luminahs</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Steve Jobs', role: 'Apple Co-founder' },
                        { name: 'Elon Musk', role: 'Tesla/SpaceX CEO' },
                        { name: 'Oprah Winfrey', role: 'Media Mogul' },
                        { name: 'Jeff Bezos', role: 'Amazon Founder' }
                      ].map((person) => (
                        <div key={person.name} className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-slate-400 rounded-full flex items-center justify-center mr-3">
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
                  These are the core strengths that make you exceptional as a Lumina. 
                  Understanding and leveraging these will accelerate your career success.
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
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                            <CheckCircle size={16} className="text-gray-500 mr-2 flex-shrink-0" weight="duotone" />
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
                  These roles leverage your natural visionary abilities and provide the strategic, 
                  future-focused challenges that energize you most.
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
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-slate-500 rounded-lg mr-3"></div>
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
                                  ? 'bg-gray-100 text-gray-700'
                                  : 'bg-slate-100 text-slate-700'
                              }`}>
                                {role.growth} Growth
                              </div>
                            </div>
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-100 to-slate-100 hover:from-gray-200 hover:to-slate-200 text-gray-700 rounded-lg transition-all duration-300 text-sm font-medium"
                          >
                            Learn More
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
                className="mt-16 bg-gradient-to-br from-gray-500 to-slate-500 rounded-3xl p-12 text-white text-center"
              >
                <h3 className="text-3xl font-bold mb-4">Ready to Explore Your Path?</h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Connect with our career specialists to create a personalized roadmap 
                  that leverages your Lumina strengths.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Career Consultation
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
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Growth Journey</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  A strategic roadmap for developing your Lumina superpowers and building 
                  a legendary career over time.
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
                            index === 0 ? 'bg-green-100' : index === 1 ? 'bg-gray-100' : 'bg-orange-100'
                          }`}>
                            <div className={`w-6 h-6 rounded-full ${
                              index === 0 ? 'bg-green-500' : index === 1 ? 'bg-gray-500' : 'bg-orange-500'
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
                              <CheckCircle size={16} className="text-gray-500 mr-3 mt-0.5 flex-shrink-0" weight="duotone" />
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
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-slate-400 rounded-full flex items-center justify-center mr-3">
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
