'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Question, 
  MagnifyingGlass,
  Book,
  ChatCircle,
  Envelope,
  CaretDown,
  CheckCircle,
  Lightbulb,
  Gear,
  Users,
  Target,
  Brain,
  GameController,
  Star,
  ArrowRight,
  VideoCamera,
  FileText
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Topics', icon: Book },
    { id: 'getting-started', label: 'Getting Started', icon: Lightbulb },
    { id: 'neuroclass', label: 'Neuroclass', icon: Brain },
    { id: 'roles', label: 'Roles & Careers', icon: Target },
    { id: 'platform', label: 'Platform Features', icon: Gear },
    { id: 'account', label: 'Account & Billing', icon: Users }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with CareerRPG',
      description: 'Complete guide to setting up your account and taking your first assessment',
      category: 'getting-started',
      readTime: '5 min',
      icon: Lightbulb
    },
    {
      title: 'Understanding Your Neuroclass Results',
      description: 'Deep dive into what your cognitive assessment reveals about your thinking style',
      category: 'neuroclass',
      readTime: '8 min',
      icon: Brain
    },
    {
      title: 'Choosing the Right Role for Your Career',
      description: 'How to select a role that aligns with your goals and cognitive strengths',
      category: 'roles',
      readTime: '6 min',
      icon: Target
    },
    {
      title: 'Mastering Pomodungeon Sessions',
      description: 'Maximize your productivity with our gamified focus technique',
      category: 'platform',
      readTime: '7 min',
      icon: GameController
    },
    {
      title: 'Building Your Professional Avatar',
      description: 'Customize your CareerRPG character and track your growth journey',
      category: 'platform',
      readTime: '4 min',
      icon: Star
    },
    {
      title: 'Team Assessment & Analytics',
      description: 'How managers can use CareerRPG for team development and insights',
      category: 'platform',
      readTime: '10 min',
      icon: Users
    }
  ];

  const faqs = [
    {
      id: 'what-is-neuroclass',
      category: 'neuroclass',
      question: 'What is a Neuroclass and how is it determined?',
      answer: 'A Neuroclass is your cognitive identity—how your brain naturally processes information, makes decisions, and approaches problems. It\'s determined through our comprehensive assessment that evaluates your thinking patterns, preferences, and cognitive strengths across multiple dimensions.'
    },
    {
      id: 'role-vs-neuroclass',
      category: 'roles',
      question: 'What\'s the difference between my Neuroclass and my Role?',
      answer: 'Your Neuroclass is WHO you are cognitively—your natural thinking style. Your Role is HOW you choose to grow—your intentional mastery path. You can play to your Neuroclass strengths for bonuses, or challenge yourself with cross-class mastery for adaptation XP.'
    },
    {
      id: 'assessment-accuracy',
      category: 'neuroclass',
      question: 'How accurate is the CareerRPG assessment?',
      answer: 'Our assessment is based on validated psychological research and has been tested with thousands of professionals. It\'s designed to capture your dominant cognitive patterns, though remember that people are complex and may exhibit traits from multiple neuroclass.'
    },
    {
      id: 'change-role',
      category: 'roles',
      question: 'Can I change my Role after selecting one?',
      answer: 'Yes! While we encourage commitment to see real growth, you can explore different Roles. However, each Role requires dedicated practice to master. We recommend focusing on one Role at a time for maximum development.'
    },
    {
      id: 'team-features',
      category: 'platform',
      question: 'Does CareerRPG offer team and enterprise features?',
      answer: 'Absolutely! We offer team dashboards, manager insights, collaborative challenges, and organizational analytics. Contact our enterprise team to learn about bulk licensing and advanced team features.'
    },
    {
      id: 'data-privacy',
      category: 'account',
      question: 'How is my personal data protected?',
      answer: 'We take privacy seriously. Your assessment results and personal data are encrypted and never shared without your explicit consent. We comply with GDPR, CCPA, and other privacy regulations. You own your data and can export or delete it anytime.'
    },
    {
      id: 'mobile-app',
      category: 'platform',
      question: 'Is there a mobile app available?',
      answer: 'Our web platform is fully responsive and works great on mobile devices. A dedicated mobile app is in development and will be available in Q2 2024 with additional features like offline mode and push notifications.'
    },
    {
      id: 'pricing-plans',
      category: 'account',
      question: 'What pricing plans are available?',
      answer: 'We offer a free tier with basic assessment and role exploration, plus premium plans with advanced features, detailed analytics, and team collaboration tools. Enterprise pricing is available for organizations.'
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? popularArticles 
    : popularArticles.filter(article => article.category === selectedCategory);

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: ChatCircle,
      action: 'Start Chat',
      available: 'Mon-Fri, 9AM-6PM PST',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Envelope,
      action: 'Send Email',
      available: '24/7 - Response within 24hrs',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides',
      icon: VideoCamera,
      action: 'Watch Videos',
      available: 'Available anytime',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Documentation',
      description: 'Browse our comprehensive docs',
      icon: FileText,
      action: 'Read Docs',
      available: 'Always up to date',
      color: 'from-orange-500 to-red-500'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-sm font-medium text-indigo-700 mb-6"
            >
              <Question size={16} className="mr-2" weight="duotone" />
              Help Center
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              How can we
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> help you?</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Find answers to your questions, explore guides, and get the support you need to master your CareerRPG journey.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              variants={itemVariants}
              className="max-w-2xl mx-auto relative"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlass size={20} className="text-slate-400" weight="duotone" />
              </div>
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 text-lg"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-200">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-700'
                  }`}
                >
                  <category.icon size={18} className="mr-2" weight={selectedCategory === category.id ? 'bold' : 'regular'} />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Popular Articles */}
              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Popular Articles</h2>
                <div className="space-y-4">
                  {filteredArticles.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon size={20} className="text-white" weight="duotone" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 mb-3">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500">{item.readTime} read</span>
                            <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors duration-300">
                              Read Article
                              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {filteredFaqs.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                      >
                        <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                        <CaretDown 
                          size={20} 
                          className={`text-slate-400 transition-transform duration-300 ${
                            openFaq === item.id ? 'rotate-180' : ''
                          }`} 
                          weight="bold" 
                        />
                      </button>
                      <AnimatePresence>
                        {openFaq === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 border-t border-slate-200">
                              <p className="text-slate-600 pt-4 leading-relaxed">{item.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Support Options */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">Need More Help?</h3>
                <div className="space-y-4">
                  {supportOptions.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <item.icon size={18} className="text-white" weight="duotone" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-600 mb-2">{item.description}</p>
                          <div className="text-xs text-slate-500">{item.available}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Tips */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 border border-indigo-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb size={24} className="text-white" weight="duotone" />
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-4">Quick Tips</h3>
                <div className="space-y-3">
                  {[
                    'Take your time with the assessment for accurate results',
                    'Explore different roles before committing to one',
                    'Use Pomodungeon sessions for focused learning',
                    'Check your progress regularly in the dashboard'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-indigo-600 mt-0.5 flex-shrink-0" weight="duotone" />
                      <span className="text-sm text-indigo-800">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
