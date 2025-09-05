'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Detective, 
  Star, 
  Target, 
  Warning, 
  TrendUp, 
  Crown, 
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  UserCircle,
  Scales,
  Eye
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuroClassNavigation from '@/components/NeuroClassNavigation';

export default function NoxionPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'traits' | 'careers' | 'growth'>('overview');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const strengths = [
    {
      icon: Detective,
      title: 'Critical Analysis',
      description: 'You excel at identifying flaws, inconsistencies, and potential issues that others might overlook. Your critical eye ensures quality and accuracy.',
      examples: ['Risk assessment', 'Quality assurance', 'Problem identification']
    },
    {
      icon: Eye,
      title: 'Truth-Seeking',
      description: 'You have an unwavering commitment to uncovering facts and reality, even when it\'s uncomfortable or challenges popular beliefs.',
      examples: ['Fact-checking', 'Due diligence', 'Investigation']
    },
    {
      icon: Scales,
      title: 'Objective Evaluation',
      description: 'You maintain impartiality and fairness in your assessments, providing balanced perspectives free from emotional bias.',
      examples: ['Performance review', 'Compliance auditing', 'Standards enforcement']
    },
    {
      icon: Warning,
      title: 'Protective Instincts',
      description: 'You naturally identify and warn against potential dangers, risks, or poor decisions before they cause significant harm.',
      examples: ['Risk management', 'Security assessment', 'Regulatory compliance']
    }
  ];

  const careerPaths = [
    {
      category: 'Legal & Compliance',
      roles: [
        { title: 'Legal Counsel', growth: 'Medium', salary: '$120k - $200k' },
        { title: 'Compliance Officer', growth: 'Medium', salary: '$80k - $140k' },
        { title: 'Risk Manager', growth: 'Medium', salary: '$95k - $160k' },
        { title: 'Internal Auditor', growth: 'Medium', salary: '$70k - $120k' }
      ]
    },
    {
      category: 'Quality & Security',
      roles: [
        { title: 'Quality Assurance Director', growth: 'Medium', salary: '$100k - $160k' },
        { title: 'Security Analyst', growth: 'High', salary: '$85k - $140k' },
        { title: 'Information Security Manager', growth: 'High', salary: '$110k - $180k' },
        { title: 'Cybersecurity Specialist', growth: 'High', salary: '$90k - $150k' }
      ]
    },
    {
      category: 'Finance & Analysis',
      roles: [
        { title: 'Financial Analyst', growth: 'Medium', salary: '$70k - $120k' },
        { title: 'Credit Risk Analyst', growth: 'Medium', salary: '$75k - $125k' },
        { title: 'Forensic Accountant', growth: 'Medium', salary: '$80k - $140k' },
        { title: 'Investment Research Analyst', growth: 'Medium', salary: '$85k - $150k' }
      ]
    }
  ];

  const growthTips = [
    {
      phase: 'Critical Foundation',
      duration: '0-3 years',
      focus: 'Develop analytical and evaluation skills',
      actions: [
        'Master analytical frameworks and evaluation methodologies',
        'Learn industry standards and regulatory requirements',
        'Develop expertise in risk assessment and quality control',
        'Practice delivering constructive criticism and difficult feedback'
      ]
    },
    {
      phase: 'Expert Evaluator',
      duration: '3-7 years',
      focus: 'Balance criticism with strategic thinking',
      actions: [
        'Take on roles requiring independent judgment and evaluation',
        'Learn to frame criticism constructively and solution-oriented',
        'Develop expertise in change management and improvement processes',
        'Build reputation as a trusted advisor for difficult decisions'
      ]
    },
    {
      phase: 'Guardian Leader',
      duration: '7+ years',
      focus: 'Lead organizational integrity and quality',
      actions: [
        'Drive enterprise-wide risk management and quality initiatives',
        'Develop and enforce organizational standards and policies',
        'Mentor others in critical thinking and evaluation skills',
        'Serve on boards or advisory roles requiring independent oversight'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'Chief Risk Officer at FinanceCorps',
      content: 'Understanding my Noxion nature helped me embrace my critical perspective. I learned to frame my concerns constructively and became more effective at protecting the organization.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Lisa Martinez',
      role: 'Quality Assurance Director',
      content: 'The Noxion framework validated my attention to detail and high standards. Now I confidently lead quality initiatives knowing my critical eye is exactly what teams need.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'David Thompson',
      role: 'Legal Counsel',
      content: 'This neuroclass helped me understand why I excel at identifying potential issues. My protective instincts and analytical nature are perfect for legal and compliance work.',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Navbar />
      <NeuroClassNavigation currentClass="noxion" />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-zinc-100 rounded-full text-sm font-medium text-gray-700 mb-6"
                >
                  <Shield size={16} className="mr-2" weight="duotone" />
                  The Challenger
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">Noxion</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  You&apos;re a critical thinker who questions everything and ensures quality through 
                  rigorous analysis. Your superpower lies in identifying risks, flaws, and 
                  inconsistencies that protect organizations from costly mistakes.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Play size={20} className="mr-2" weight="fill" />
                    Take Assessment
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
                  >
                    Explore Quality Careers
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
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600/20 to-black/20"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full bg-gradient-to-r from-gray-800/20 to-black/20"
                  ></motion.div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <Shield size={120} className="text-white" weight="duotone" />
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-slate-200">
                  <div className="text-center">
                    <Detective size={24} className="text-slate-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Critical</div>
                    <div className="text-xs text-slate-600">Analysis</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                  <div className="text-center">
                    <Scales size={24} className="text-slate-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Truth</div>
                    <div className="text-xs text-slate-600">Seeker</div>
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
                { key: 'overview', label: 'Overview', icon: Shield },
                { key: 'traits', label: 'Strengths', icon: Star },
                { key: 'careers', label: 'Careers', icon: Target },
                { key: 'growth', label: 'Growth', icon: TrendUp }
              ].map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as 'overview' | 'traits' | 'careers' | 'growth')}
                  className={`flex items-center justify-center px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-gray-800 to-black text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Challenger Nature</h3>
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      <p>
                        As a Noxion, you possess the invaluable ability to see what others miss—the flaws, 
                        risks, and potential problems that could derail projects or harm organizations. 
                        Your critical thinking and attention to detail serve as essential safeguards, 
                        ensuring quality and protecting against costly mistakes.
                      </p>
                      <p>
                        Your analytical mind naturally questions assumptions and challenges the status quo, 
                        not from negativity, but from a genuine desire to improve and protect. You excel 
                        in roles that require independent judgment, objective evaluation, and the courage 
                        to speak truth to power when you identify significant issues.
                      </p>
                      <p>
                        While your critical nature is your greatest strength, it can sometimes be perceived 
                        as negative or obstructionist. Learning to frame your concerns constructively and 
                        developing strong communication skills will help others appreciate the protective 
                        value you bring to teams and organizations.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Traits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { trait: 'Critical Thinking', description: 'You analyze information thoroughly and identify potential flaws or inconsistencies' },
                        { trait: 'Quality-Focused', description: 'You maintain high standards and ensure work meets rigorous criteria' },
                        { trait: 'Risk-Aware', description: 'You naturally identify potential problems before they become serious issues' },
                        { trait: 'Independent', description: 'You form your own opinions based on evidence rather than popular consensus' },
                        { trait: 'Protective', description: 'You feel responsible for preventing harm and maintaining standards' },
                        { trait: 'Truth-Seeking', description: 'You value accuracy and honesty even when it\'s uncomfortable' }
                      ].map((item, index) => (
                        <motion.div
                          key={item.trait}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 bg-gray-800 rounded-full mt-3 mr-3 flex-shrink-0"></div>
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
                  <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <Crown size={24} className="mr-2" weight="duotone" />
                      Quick Stats
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Critical Analysis</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Quality Assurance</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Risk Assessment</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Innovation Drive</span>
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
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Famous Noxions</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Ruth Bader Ginsburg', role: 'Supreme Court Justice' },
                        { name: 'Nassim Nicholas Taleb', role: 'Risk Analyst & Author' },
                        { name: 'Elizabeth Warren', role: 'Senator & Consumer Advocate' },
                        { name: 'Sherron Watkins', role: 'Enron Whistleblower' }
                      ].map((item) => (
                        <div key={item.name} className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-black rounded-full flex items-center justify-center mr-3">
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
                  These are the core strengths that make you exceptional as a Noxion. 
                  Understanding and leveraging these will accelerate your quality assurance and risk management career success.
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
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                            <CheckCircle size={16} className="text-gray-700 mr-2 flex-shrink-0" weight="duotone" />
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
                  These roles leverage your natural critical thinking abilities and provide the quality, 
                  compliance, and risk management challenges that energize you most.
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
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-lg mr-3"></div>
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
                            className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-100 to-zinc-100 hover:from-gray-200 hover:to-zinc-200 text-gray-700 rounded-lg transition-all duration-300 text-sm font-medium"
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
                className="mt-16 bg-gradient-to-br from-gray-800 to-black rounded-3xl p-12 text-white text-center"
              >
                <h3 className="text-3xl font-bold mb-4">Ready to Guard Quality?</h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Connect with our risk and quality specialists to create a career path 
                  that maximizes your critical thinking superpowers.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Quality Leadership Coaching
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
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Guardian Journey</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  A strategic roadmap for developing your Noxion superpowers and building 
                  a career focused on quality assurance and organizational protection.
                </p>
              </div>

              <div className="space-y-8">
                {growthTips.map((item, index) => (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                      <div className="lg:w-1/3">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                            index === 0 ? 'bg-gray-100' : index === 1 ? 'bg-zinc-100' : 'bg-stone-100'
                          }`}>
                            <div className={`w-6 h-6 rounded-full ${
                              index === 0 ? 'bg-gray-700' : index === 1 ? 'bg-gray-800' : 'bg-black'
                            }`}></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">{item.phase}</h3>
                            <div className="flex items-center text-sm text-slate-600">
                              <Clock size={14} className="mr-1" weight="duotone" />
                              {item.duration}
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-700 font-medium">{item.focus}</p>
                      </div>
                      
                      <div className="lg:w-2/3">
                        <h4 className="font-semibold text-slate-900 mb-4">Key Actions:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                            {item.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-start">
                              <CheckCircle size={16} className="text-gray-700 mr-3 mt-0.5 flex-shrink-0" weight="duotone" />
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
                  {testimonials.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-black rounded-full flex items-center justify-center mr-3">
                          <UserCircle size={24} className="text-white" weight="duotone" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{item.name}</div>
                          <div className="text-sm text-slate-600">{item.role}</div>
                        </div>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed italic">
                        &quot;{item.content}&quot;
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
