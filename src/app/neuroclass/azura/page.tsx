'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Star, 
  HeartStraight, 
  Target, 
  TrendUp, 
  Crown, 
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  UserCircle,
  ChatCircle,
  Peace
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuroClassNavigation from '@/components/NeuroClassNavigation';

export default function AzuraPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'traits' | 'careers' | 'growth'>('overview');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const strengths = [
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'You naturally understand and respond to others&apos; emotions, creating deep connections and trust in all your relationships.',
      examples: ['Conflict mediation', 'Team morale building', 'Empathetic leadership']
    },
    {
      icon: Users,
      title: 'Collaborative Excellence',
      description: 'You excel at bringing people together and creating environments where everyone feels valued and heard.',
      examples: ['Cross-team coordination', 'Inclusive decision making', 'Team building']
    },
    {
      icon: ChatCircle,
      title: 'Communication Mastery',
      description: 'You have a gift for clear, compassionate communication that builds bridges and resolves misunderstandings.',
      examples: ['Difficult conversations', 'Stakeholder alignment', 'Change communication']
    },
    {
      icon: HeartStraight,
      title: 'People Development',
      description: 'You naturally see potential in others and create growth opportunities that help individuals and teams flourish.',
      examples: ['Mentoring programs', 'Career coaching', 'Skill development']
    }
  ];

  const careerPaths = [
    {
      category: 'Human Resources & People',
      roles: [
        { title: 'Chief People Officer', growth: 'High', salary: '$150k - $300k' },
        { title: 'VP of Human Resources', growth: 'High', salary: '$120k - $220k' },
        { title: 'Organizational Development Manager', growth: 'Medium', salary: '$85k - $140k' },
        { title: 'Employee Experience Director', growth: 'High', salary: '$100k - $180k' }
      ]
    },
    {
      category: 'Healthcare & Wellness',
      roles: [
        { title: 'Healthcare Administrator', growth: 'Medium', salary: '$90k - $160k' },
        { title: 'Mental Health Counselor', growth: 'High', salary: '$50k - $90k' },
        { title: 'Wellness Program Director', growth: 'High', salary: '$70k - $120k' },
        { title: 'Patient Advocate', growth: 'Medium', salary: '$45k - $75k' }
      ]
    },
    {
      category: 'Education & Development',
      roles: [
        { title: 'Learning & Development Director', growth: 'High', salary: '$95k - $150k' },
        { title: 'Corporate Training Manager', growth: 'Medium', salary: '$70k - $110k' },
        { title: 'Educational Program Coordinator', growth: 'Medium', salary: '$55k - $85k' },
        { title: 'Executive Coach', growth: 'High', salary: '$80k - $200k' }
      ]
    }
  ];

  const growthTips = [
    {
      phase: 'Relationship Foundation',
      duration: '0-2 years',
      focus: 'Build your network and reputation as a connector',
      actions: [
        'Volunteer for cross-functional projects to build relationships',
        'Develop active listening and emotional intelligence skills',
        'Seek mentorship from senior people-focused leaders',
        'Practice facilitating team meetings and discussions'
      ]
    },
    {
      phase: 'Leadership Development',
      duration: '2-5 years',
      focus: 'Scale your people impact through formal roles',
      actions: [
        'Take on team leadership or people management responsibilities',
        'Learn business fundamentals to complement people skills',
        'Develop expertise in organizational psychology and change',
        'Build a reputation as someone who develops others'
      ]
    },
    {
      phase: 'Organizational Impact',
      duration: '5+ years',
      focus: 'Drive culture and people strategy at scale',
      actions: [
        'Lead organization-wide culture and transformation initiatives',
        'Develop strategic thinking about people and organizational design',
        'Mentor other emerging people leaders',
        'Speak at conferences about people-centered leadership'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'Chief People Officer at InnovateCorp',
      content: 'Understanding my Azura nature helped me embrace my empathetic leadership style. I learned to see my emotional intelligence as a strategic advantage, not a weakness.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Michael Chen',
      role: 'Learning & Development Director',
      content: 'The Azura framework validated my people-first approach. Now I confidently lead with empathy and create environments where everyone can thrive.',
      image: '/api/placeholder/64/64'
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'Organizational Psychologist',
      content: 'This neuroclass helped me understand why I&apos;m drawn to roles that involve helping others grow. It gave me clarity on my career path and unique value.',
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      <NeuroClassNavigation currentClass="azura" />
      
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
              <div>
                <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-sm font-medium text-blue-700 mb-6"
                >
                  <Heart size={16} className="mr-2" weight="duotone" />
                  The Empath
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Azura</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xl text-slate-600 mb-8 leading-relaxed"
                >
                  You&apos;re a natural healer and connector who creates harmony wherever you go. 
                  Your superpower lies in understanding people deeply and building environments 
                  where everyone can thrive and reach their potential.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Play size={20} className="mr-2" weight="fill" />
                    Take Assessment
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
                  >
                    Explore People-Focused Careers
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
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20"
                  ></motion.div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Heart size={120} className="text-white" weight="duotone" />
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-blue-200">
                  <div className="text-center">
                    <Users size={24} className="text-blue-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">People</div>
                    <div className="text-xs text-slate-600">Connector</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-cyan-200">
                  <div className="text-center">
                    <Peace size={24} className="text-cyan-600 mx-auto mb-2" weight="duotone" />
                    <div className="text-sm font-medium text-slate-900">Harmony</div>
                    <div className="text-xs text-slate-600">Builder</div>
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
                { key: 'overview', label: 'Overview', icon: Heart },
                { key: 'traits', label: 'Strengths', icon: Star },
                { key: 'careers', label: 'Careers', icon: Target },
                { key: 'growth', label: 'Growth', icon: TrendUp }
              ].map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as 'overview' | 'traits' | 'careers' | 'growth')}
                  className={`flex items-center justify-center px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Empathic Nature</h3>
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      <p>
                        As an Azura, you possess the remarkable ability to understand and connect with 
                        others on a deep emotional level. You naturally create safe spaces where people 
                        feel heard, valued, and supported. Your empathic intelligence allows you to read 
                        between the lines and respond to both spoken and unspoken needs.
                      </p>
                      <p>
                        Your collaborative approach makes you invaluable in team environments, conflict 
                        resolution, and change management situations. You excel at building consensus, 
                        facilitating difficult conversations, and ensuring that everyone&apos;s voice is heard. 
                        People naturally trust you and seek your guidance during challenging times.
                      </p>
                      <p>
                        While your empathic nature is your greatest strength, it can sometimes lead to 
                        emotional overwhelm or difficulty making tough decisions that might disappoint others. 
                        Learning to set healthy boundaries and balance empathy with decisive action will 
                        amplify your leadership impact.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Traits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { trait: 'Emotionally Intelligent', description: 'You understand and manage emotions - both your own and others&apos;' },
                        { trait: 'Collaborative', description: 'You naturally bring people together and create inclusive environments' },
                        { trait: 'Supportive', description: 'You genuinely care about others&apos; growth and wellbeing' },
                        { trait: 'Intuitive', description: 'You pick up on subtle cues and unspoken needs' },
                        { trait: 'Harmonious', description: 'You seek win-win solutions and avoid unnecessary conflict' },
                        { trait: 'Trustworthy', description: 'People naturally confide in you and seek your counsel' }
                      ].map((item, index) => (
                        <motion.div
                          key={item.trait}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
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
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <Crown size={24} className="mr-2" weight="duotone" />
                      Quick Stats
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Emotional Intelligence</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Team Collaboration</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Communication Skills</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-white" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Analytical Thinking</span>
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
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Famous Azuras</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Oprah Winfrey', role: 'Media Mogul & Philanthropist' },
                        { name: 'Brené Brown', role: 'Researcher & Author' },
                        { name: 'Simon Sinek', role: 'Leadership Expert' },
                        { name: 'Maya Angelou', role: 'Poet & Activist' }
                      ].map((person) => (
                        <div key={person.name} className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-3">
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
                  These are the core strengths that make you exceptional as an Azura. 
                  Understanding and leveraging these will accelerate your people-focused career success.
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
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                            <CheckCircle size={16} className="text-blue-500 mr-2 flex-shrink-0" weight="duotone" />
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
                  These roles leverage your natural empathic abilities and provide the people-focused 
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
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mr-3"></div>
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
                            className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-blue-700 rounded-lg transition-all duration-300 text-sm font-medium"
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
                className="mt-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 text-white text-center"
              >
                <h3 className="text-3xl font-bold mb-4">Ready to Make a People Impact?</h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Connect with our people development specialists to create a career path 
                  that maximizes your empathic superpowers.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book People Leadership Coaching
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
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Your People Leadership Journey</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  A strategic roadmap for developing your Azura superpowers and building 
                  a career focused on people development and organizational harmony.
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
                            index === 0 ? 'bg-green-100' : index === 1 ? 'bg-blue-100' : 'bg-purple-100'
                          }`}>
                            <div className={`w-6 h-6 rounded-full ${
                              index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'
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
                              <CheckCircle size={16} className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" weight="duotone" />
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
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-3">
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
