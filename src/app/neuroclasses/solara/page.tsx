'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  PaintBrush, 
  Star, 
  Target, 
  Camera, 
  TrendUp, 
  Crown, 
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  UserCircle,
  MusicNote,
  Sparkle
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuroClassNavigation from '@/components/NeuroClassNavigation';

export default function SolaraPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'traits' | 'careers' | 'growth'>('overview');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const strengths = [
    {
      icon: PaintBrush,
      title: 'Creative Expression',
      description: 'You have a natural gift for transforming ideas into compelling visual, written, or experiential forms that resonate with others.',
      examples: ['Brand storytelling', 'Visual design', 'Content creation']
    },
    {
      icon: Sparkle,
      title: 'Aesthetic Intelligence',
      description: 'You instinctively understand what looks, feels, and sounds right, bringing beauty and harmony to everything you touch.',
      examples: ['Design systems', 'User experience', 'Visual communication']
    },
    {
      icon: Camera,
      title: 'Innovation Through Art',
      description: 'You solve problems and communicate concepts through creative mediums, making complex ideas accessible and engaging.',
      examples: ['Creative problem solving', 'Visual storytelling', 'Concept development']
    },
    {
      icon: MusicNote,
      title: 'Authentic Voice',
      description: 'You bring your unique perspective to everything you create, infusing your work with personality and genuine expression.',
      examples: ['Personal branding', 'Thought leadership', 'Creative direction']
    }
  ];

  const careerPaths = [
    {
      category: 'Design & Creative',
      roles: [
        { title: 'Creative Director', growth: 'High', salary: '$120k - $200k' },
        { title: 'UX/UI Designer', growth: 'High', salary: '$85k - $150k' },
        { title: 'Brand Manager', growth: 'Medium', salary: '$75k - $130k' },
        { title: 'Art Director', growth: 'Medium', salary: '$70k - $120k' }
      ]
    },
    {
      category: 'Content & Media',
      roles: [
        { title: 'Content Strategy Director', growth: 'High', salary: '$90k - $160k' },
        { title: 'Video Producer', growth: 'Medium', salary: '$60k - $110k' },
        { title: 'Social Media Manager', growth: 'High', salary: '$50k - $90k' },
        { title: 'Creative Writer', growth: 'Medium', salary: '$45k - $85k' }
      ]
    },
    {
      category: 'Marketing & Communications',
      roles: [
        { title: 'Marketing Creative Lead', growth: 'High', salary: '$95k - $160k' },
        { title: 'Communications Director', growth: 'Medium', salary: '$85k - $140k' },
        { title: 'Event Experience Designer', growth: 'Medium', salary: '$60k - $100k' },
        { title: 'Digital Marketing Specialist', growth: 'High', salary: '$55k - $95k' }
      ]
    }
  ];

  const growthTips = [
    {
      phase: 'Creative Foundation',
      duration: '0-3 years',
      focus: 'Develop your artistic skills and build a portfolio',
      actions: [
        'Master core creative tools and software platforms',
        'Build a diverse portfolio showcasing your range',
        'Experiment with different creative mediums and styles',
        'Seek feedback from established creatives and mentors'
      ]
    },
    {
      phase: 'Professional Artist',
      duration: '3-7 years',
      focus: 'Bridge creativity with business strategy',
      actions: [
        'Learn business fundamentals and client management',
        'Develop expertise in user-centered design thinking',
        'Build relationships with cross-functional teams',
        'Take on creative leadership roles and mentor others'
      ]
    },
    {
      phase: 'Creative Visionary',
      duration: '7+ years',
      focus: 'Shape creative strategy and inspire innovation',
      actions: [
        'Lead brand and creative strategy at organizational level',
        'Speak at design conferences and industry events',
        'Mentor emerging creative talent and build teams',
        'Launch your own creative ventures or consultancy'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Maya Patel',
      role: 'Creative Director at Design Studios',
      content: 'Understanding my Solara nature helped me embrace my creative intuition. I stopped second-guessing my artistic choices and started trusting my aesthetic intelligence.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Carlos Rivera',
      role: 'Brand Strategy Lead',
      content: 'The Solara framework validated my creative approach to business problems. Now I confidently use visual thinking to solve complex challenges.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Jessica Wong',
      role: 'UX Design Manager',
      content: 'This neuroclass helped me understand why I thrive in creative environments. It gave me confidence to pursue leadership roles that blend creativity with strategy.',
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <Navbar />
      <NeuroClassNavigation currentClass="solara" />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full text-sm font-medium text-orange-700 mb-6"
                >
                  <Palette size={16} className="mr-2" weight="duotone" />
                  The Artisan
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Solara</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  You&apos;re a creative expressor who brings beauty and meaning to the world through 
                  your unique perspective. Your superpower lies in transforming ideas into 
                  compelling experiences that inspire and connect with others.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Play size={20} className="mr-2" weight="fill" />
                    Take Assessment
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
                  >
                    Explore Creative Careers
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
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-yellow-400/20"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20"
                  ></motion.div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                    <Palette size={120} className="text-white" weight="duotone" />
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-orange-200">
                  <div className="text-center">
                    <PaintBrush size={24} className="text-orange-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Creative</div>
                    <div className="text-xs text-slate-600">Expression</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-yellow-200">
                  <div className="text-center">
                    <Sparkle size={24} className="text-yellow-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Aesthetic</div>
                    <div className="text-xs text-slate-600">Intelligence</div>
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
                { key: 'overview', label: 'Overview', icon: Palette },
                { key: 'traits', label: 'Strengths', icon: Star },
                { key: 'careers', label: 'Careers', icon: Target },
                { key: 'growth', label: 'Growth', icon: TrendUp }
              ].map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as 'overview' | 'traits' | 'careers' | 'growth')}
                  className={`flex items-center justify-center px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Artistic Nature</h3>
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      <p>
                        As a Solara, you possess the remarkable ability to see beauty and possibility 
                        in the world around you and translate that vision into compelling creative works. 
                        You approach challenges through a lens of creativity and innovation, finding 
                        unique solutions that others might overlook.
                      </p>
                      <p>
                        Your artistic intelligence extends beyond traditional art forms—you bring 
                        creative thinking to business problems, user experiences, and communication 
                        challenges. You have an intuitive understanding of aesthetics, emotion, and 
                        human connection that makes your work deeply resonant and memorable.
                      </p>
                      <p>
                        While your creative nature is your greatest strength, it can sometimes lead to 
                        perfectionism or difficulty with constraints and deadlines. Learning to balance 
                        creative exploration with practical execution and developing strong project 
                        management skills will amplify your artistic impact.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Traits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { trait: 'Creative', description: 'You generate novel ideas and express them through various artistic mediums' },
                        { trait: 'Expressive', description: 'You communicate ideas and emotions through visual and experiential forms' },
                        { trait: 'Aesthetic', description: 'You have an intuitive sense for beauty, design, and visual harmony' },
                        { trait: 'Authentic', description: 'You bring your unique perspective and voice to everything you create' },
                        { trait: 'Innovative', description: 'You find creative solutions to problems others approach conventionally' },
                        { trait: 'Inspiring', description: 'Your work motivates and moves others, creating emotional connections' }
                      ].map((item, index) => (
                        <motion.div
                          key={item.trait}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
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
                  <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <Crown size={24} className="mr-2" weight="duotone" />
                      Quick Stats
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Creative Expression</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Aesthetic Intelligence</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Innovation</span>
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                          <Star size={16} className="text-white/50" weight="regular" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Systematic Planning</span>
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
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Famous Solaras</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Steve Jobs', role: 'Apple Co-founder & Designer' },
                        { name: 'Frida Kahlo', role: 'Artist & Icon' },
                        { name: 'David Bowie', role: 'Musician & Creative' },
                        { name: 'Virgil Abloh', role: 'Designer & Creative Director' }
                      ].map((item) => (
                        <div key={item.name} className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-3">
                            <UserCircle size={16} className="text-white" weight="duotone" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{item.name}</div>
                            <div className="text-xs text-slate-600">{item.role}</div>
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
                  These are the core strengths that make you exceptional as a Solara. 
                  Understanding and leveraging these will accelerate your creative career success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {strengths.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onMouseEnter={() => setHoveredCard(item.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 transition-all duration-300 ${
                      hoveredCard === item.title ? 'shadow-xl scale-105' : 'hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <item.icon size={24} className="text-white" weight="duotone" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Practical Applications:</h4>
                      <div className="space-y-2">
                        {item.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle size={16} className="text-orange-500 mr-2 flex-shrink-0" weight="duotone" />
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
                  These roles leverage your natural creative abilities and provide the artistic, 
                  expressive challenges that energize you most.
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
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg mr-3"></div>
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
                            className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 hover:from-orange-200 hover:to-yellow-200 text-orange-700 rounded-lg transition-all duration-300 text-sm font-medium"
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
                className="mt-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl p-12 text-white text-center"
              >
                <h3 className="text-3xl font-bold mb-4">Ready to Express Your Creativity?</h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Connect with our creative career specialists to build a path 
                  that maximizes your artistic superpowers.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Creative Career Coaching
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
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Creative Journey</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  A strategic roadmap for developing your Solara superpowers and building 
                  a career focused on creative expression and artistic innovation.
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
                            index === 0 ? 'bg-orange-100' : index === 1 ? 'bg-yellow-100' : 'bg-red-100'
                          }`}>
                            <div className={`w-6 h-6 rounded-full ${
                              index === 0 ? 'bg-orange-500' : index === 1 ? 'bg-yellow-500' : 'bg-red-500'
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
                          {phase.actions.map((action: string, actionIndex: number) => (
                            <div key={actionIndex} className="flex items-start">
                              <CheckCircle size={16} className="text-orange-500 mr-3 mt-0.5 flex-shrink-0" weight="duotone" />
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
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-3">
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
