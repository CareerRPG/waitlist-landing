'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Lightning, 
  Star, 
  Check, 
  X,
  Brain,
  GameController,
  Users,
  Sparkle
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'explorer',
      name: 'Explorer',
      subtitle: 'Perfect for curious minds',
      icon: Brain,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      price: { monthly: 0, annual: 0 },
      description: 'Start your journey with essential features',
      features: [
        'Basic Neuroclass Assessment',
        'Access to 3 Core Roles',
        'Weekly Pomodungeon Sessions',
        'Basic Progress Tracking',
        'Community Access',
        'Mobile App Access'
      ],
      limitations: [
        'Limited to 5 quests per month',
        'Basic analytics only',
        'Standard support'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      id: 'champion',
      name: 'Champion',
      subtitle: 'For dedicated professionals',
      icon: Star,
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-500',
      price: { monthly: 29, annual: 24 },
      description: 'Unlock your full potential with advanced features',
      features: [
        'Complete Neuroclass Assessment',
        'Access to All 7 Roles',
        'Unlimited Pomodungeon Sessions',
        'Advanced Progress Analytics',
        'Priority Community Access',
        'Cross-Platform Sync',
        'Personalized Quest Recommendations',
        'Career Path Mapping',
        'Weekly Coaching Sessions',
        'Custom Goal Setting'
      ],
      limitations: [],
      cta: 'Start Champion',
      popular: true
    },
    {
      id: 'legend',
      name: 'Legend',
      subtitle: 'For teams and organizations',
      icon: Crown,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      price: { monthly: 99, annual: 79 },
      description: 'Complete team transformation with enterprise features',
      features: [
        'Everything in Champion',
        'Team Dashboard & Analytics',
        'Multi-User Management',
        'Custom Team Challenges',
        'Advanced Reporting',
        'Priority Support',
        'Team Coaching Sessions',
        'Custom Integrations',
        'White-label Options',
        'Dedicated Account Manager',
        'Custom Neuroclass Training',
        'API Access'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faq = [
    {
      question: 'What is a Neuroclass and how does it work?',
      answer: 'A Neuroclass is your unique cognitive archetype - think of it as your professional personality type with RPG flair. Our assessment analyzes your thinking patterns, work preferences, and natural strengths to match you with one of 7 distinct neuroclass, each with their own superpowers and optimal career paths.'
    },
    {
      question: 'Can I switch plans anytime?',
      answer: 'Absolutely! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at your next billing cycle, and we\'ll prorate any differences fairly.'
    },
    {
      question: 'What are Pomodungeon sessions?',
      answer: 'Pomodungeons are gamified productivity sessions that turn your work into epic RPG adventures. Each session is a "dungeon run" where you battle distractions, earn XP for completed tasks, and unlock rewards. It\'s the Pomodoro meets RPG!'
    },
    {
      question: 'Is there a team discount?',
      answer: 'Yes! The Legend plan includes team features and volume discounts. For organizations with 10+ users, we offer custom enterprise pricing with additional features and dedicated support.'
    },
    {
      question: 'How does the assessment work?',
      answer: 'Our scientifically-backed assessment takes about 15-20 minutes and evaluates your cognitive preferences, work style, and natural talents. You\'ll get detailed insights into your Neuroclass, compatible roles, and personalized career recommendations.'
    },
    {
      question: 'Can I use this with my existing productivity tools?',
      answer: 'Yes! Our Champion and Legend plans include integrations with popular tools like Notion, Slack, Trello, and more. We\'re constantly adding new integrations based on user feedback.'
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
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-sm font-medium text-emerald-700 mb-6"
            >
              <Sparkle size={16} className="mr-2" weight="duotone" />
              Choose Your Adventure
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Level Up Your 
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Career</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Transform your professional journey into an epic RPG adventure. Discover your Neuroclass, 
              conquer productivity dungeons, and unlock your true potential.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center mb-16"
            >
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200">
                <div className="flex items-center">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      billingCycle === 'monthly'
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('annual')}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      billingCycle === 'annual'
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Annual
                    <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                      Save 17%
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                onMouseEnter={() => setHoveredPlan(item.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                  item.popular
                    ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl scale-105'
                    : 'border-slate-200 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:scale-102'
                } ${hoveredPlan === item.id ? 'shadow-2xl scale-105' : ''}`}
              >
                {item.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Star size={14} className="inline mr-1" weight="fill" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-4`}>
                    <item.icon size={28} className="text-white" weight="duotone" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{item.subtitle}</p>
                  
                  <div className="mb-4">
                    {item.price[billingCycle] === 0 ? (
                      <div className="text-4xl font-bold text-slate-900">Free</div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="text-4xl font-bold text-slate-900">
                          ${item.price[billingCycle]}
                        </span>
                        <span className="text-slate-600 ml-2">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                    )}
                    
                    {billingCycle === 'annual' && item.price.monthly > 0 && (
                      <div className="text-sm text-slate-500">
                        ${item.price.monthly}/month billed annually
                      </div>
                    )}
                  </div>
                  
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check size={18} className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" weight="bold" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {item.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start opacity-60">
                      <X size={18} className="text-slate-400 mr-3 mt-0.5 flex-shrink-0" weight="bold" />
                      <span className="text-slate-600 text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    item.popular
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg'
                      : `bg-gradient-to-r ${item.gradient} hover:shadow-lg text-white`
                  }`}
                >
                  {item.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose CareerRPG?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We&apos;re not just another productivity app. We&apos;re a complete career transformation platform 
              that makes professional growth feel like an epic adventure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'Science-Backed',
                description: 'Our assessments are based on cognitive research and validated psychological frameworks.',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: GameController,
                title: 'Gamified Experience',
                description: 'Turn boring tasks into epic quests with our immersive RPG mechanics.',
                color: 'from-blue-500 to-indigo-500'
              },
              {
                icon: Users,
                title: 'Community Driven',
                description: 'Join thousands of professionals on similar journeys in our supportive community.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Lightning,
                title: 'Proven Results',
                description: 'Our users report 40% higher productivity and 60% better job satisfaction.',
                color: 'from-orange-500 to-red-500'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} mb-4`}>
                  <item.icon size={24} className="text-white" weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about CareerRPG
            </p>
          </motion.div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.question}</h3>
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Epic Career Journey?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who&apos;ve transformed their careers into epic adventures. 
              Your legendary story starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Take Assessment
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
