'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Quotes,
  ArrowRight,
  Users,
  Brain,
  Crown,
  Rocket,
  CheckCircle,
  Play,
  TrendUp
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SuccessStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Stories', icon: Trophy },
    { id: 'career-change', label: 'Career Transitions', icon: Rocket },
    { id: 'promotion', label: 'Promotions & Growth', icon: TrendUp },
    { id: 'leadership', label: 'Leadership Development', icon: Crown },
    { id: 'team-success', label: 'Team Transformations', icon: Users }
  ];

  const successStories = [
    {
      id: 'sarah-chen',
      category: 'career-change',
      name: 'Sarah Chen',
      role: 'From Engineer to Product Leader',
      company: 'TechFlow',
      neuroclass: 'Lumina',
      roleType: 'Support',
      timeframe: '8 months',
      salaryIncrease: '45%',
      image: '/testimonials/sarah.jpg',
      quote: "Understanding my Lumina Neuroclass revealed I was a natural strategic enabler. CareerRPG helped me transition from individual contributor to leading product strategy.",
      fullStory: "After 6 years as a software engineer, I felt stuck. The Neuroclass assessment revealed I'm a Lumina with strong Support role alignment. Within 8 months, I transitioned to Product Management, then to Head of Product Strategy. My ability to see the big picture and enable others has transformed my career.",
      achievements: [
        'Promoted from Engineer to Head of Product Strategy',
        'Led team that increased user engagement by 280%',
        'Mentored 12 engineers in their career transitions',
        'Developed product roadmap for $50M revenue stream'
      ],
      videoUrl: '/videos/sarah-story.mp4'
    },
    {
      id: 'marcus-rodriguez',
      category: 'leadership',
      name: 'Marcus Rodriguez',
      role: 'Engineering Manager to CTO',
      company: 'DataSys',
      neuroclass: 'Obsidia',
      roleType: 'Mage',
      timeframe: '18 months',
      salaryIncrease: '65%',
      image: '/testimonials/marcus.jpg',
      quote: "CareerRPG's systematic approach aligned perfectly with my Obsidia thinking style. The skill trees gave me a clear path to technical leadership.",
      fullStory: "As an Obsidia architect, I excelled at building systems but struggled with people leadership. CareerRPG's cross-class mastery approach helped me develop Healer abilities while leveraging my Mage strengths. I learned to balance technical excellence with team development.",
      achievements: [
        'Scaled engineering team from 15 to 80 people',
        'Reduced system downtime by 95%',
        'Implemented architecture serving 10M+ users',
        'Created engineering culture with 98% retention'
      ],
      videoUrl: '/videos/marcus-story.mp4'
    },
    {
      id: 'jennifer-kim',
      category: 'promotion',
      name: 'Jennifer Kim',
      role: 'Sales Rep to VP of Growth',
      company: 'GrowthStart',
      neuroclass: 'Crimsonix',
      roleType: 'Warrior',
      timeframe: '14 months',
      salaryIncrease: '120%',
      image: '/testimonials/jennifer.jpg',
      quote: "My Crimsonix energy and Warrior role were perfect for scaling high-growth teams. CareerRPG showed me how to channel intensity into strategic leadership.",
      fullStory: "I was always a top performer in sales, but leadership felt different. Learning about my Warrior role helped me understand how to lead through action and results. I developed skills in team motivation, strategic planning, and performance optimization that transformed my career trajectory.",
      achievements: [
        'Grew revenue from $2M to $15M ARR',
        'Built and led 25-person growth team',
        'Achieved 150% of targets for 6 consecutive quarters',
        'Developed scalable sales processes and playbooks'
      ],
      videoUrl: '/videos/jennifer-story.mp4'
    },
    {
      id: 'alex-thompson',
      category: 'career-change',
      name: 'Alex Thompson',
      role: 'Designer to Design Systems Lead',
      company: 'DesignCorp',
      neuroclass: 'Solara',
      roleType: 'Archer',
      timeframe: '12 months',
      salaryIncrease: '40%',
      image: '/testimonials/alex.jpg',
      quote: "Discovering my Archer role helped me combine creativity with systematic thinking. I went from making individual designs to architecting entire design systems.",
      fullStory: "As a Solara Archer, I realized my strength wasn't just in creating beautiful designs, but in building systems that enabled other designers to excel. CareerRPG's precision-focused skill trees helped me develop the strategic and technical skills needed to lead design at scale.",
      achievements: [
        'Created design system used by 200+ designers',
        'Reduced design-to-development time by 60%',
        'Led redesign that increased conversion by 35%',
        'Established design standards across 12 product teams'
      ],
      videoUrl: '/videos/alex-story.mp4'
    },
    {
      id: 'maya-patel',
      category: 'team-success',
      name: 'Dr. Maya Patel',
      role: 'Research Lead to Head of Innovation',
      company: 'ML Dynamics',
      neuroclass: 'Aureus',
      roleType: 'Assassin',
      timeframe: '10 months',
      salaryIncrease: '55%',
      image: '/testimonials/maya.jpg',
      quote: "The Assassin role perfectly captured my ability to navigate uncertainty and find breakthrough opportunities. CareerRPG helped me transform research insights into business impact.",
      fullStory: "My Aureus research background made me great at finding insights, but translating them to business value was challenging. The Assassin role framework taught me to be an adaptive navigator, connecting research discoveries to market opportunities and building innovation pipelines.",
      achievements: [
        'Led team that developed 3 patent-pending innovations',
        'Increased research-to-product pipeline by 200%',
        'Secured $5M in additional research funding',
        'Built partnerships with 8 leading universities'
      ],
      videoUrl: '/videos/maya-story.mp4'
    },
    {
      id: 'lisa-chang',
      category: 'leadership',
      name: 'Lisa Chang',
      role: 'HR Manager to Chief People Officer',
      company: 'PeopleFirst',
      neuroclass: 'Azura',
      roleType: 'Healer',
      timeframe: '16 months',
      salaryIncrease: '75%',
      image: '/testimonials/lisa.jpg',
      quote: "Understanding my Azura Healer identity transformed how I approached people leadership. I went from managing policies to healing and harmonizing entire organizations.",
      fullStory: "The Healer role resonated deeply with my Azura empathy. CareerRPG's skill development helped me move beyond traditional HR into strategic people leadership. I learned to build cultures that naturally support growth, resolve conflicts constructively, and create environments where teams thrive.",
      achievements: [
        'Improved employee satisfaction from 72% to 94%',
        'Reduced turnover by 60% across all departments',
        'Implemented wellbeing programs reaching 500+ employees',
        'Built inclusive culture recognized by 5 industry awards'
      ],
      videoUrl: '/videos/lisa-story.mp4'
    }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === selectedCategory);

  const stats = [
    { label: 'Average Salary Increase', value: '65%', icon: TrendUp },
    { label: 'Career Transitions', value: '2,500+', icon: Rocket },
    { label: 'Leadership Promotions', value: '1,800+', icon: Crown },
    { label: 'Success Rate', value: '89%', icon: Trophy }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
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
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-sm font-medium text-emerald-700 mb-6"
            >
              <Trophy size={16} className="mr-2" weight="duotone" />
              Success Stories
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Real People,
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Real Results</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Discover how professionals transformed their careers by understanding their Neuroclass 
              and choosing the right Role. These are their stories of growth, promotion, and fulfillment.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 mx-auto mb-4">
                    <item.icon size={24} className="text-white" weight="duotone" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{item.value}</div>
                  <div className="text-sm text-slate-600">{item.label}</div>
                </motion.div>
              ))}
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
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
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

        {/* Success Stories Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStories.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Users size={24} className="text-white" weight="duotone" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                    <p className="text-emerald-600 font-medium">{item.role}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
                        {item.neuroclass}
                      </span>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs font-medium">
                        {item.roleType}
                      </span>
                    </div>
                  </div>
                  
                  {/* Video Play Button */}
                  <button className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Play size={20} className="text-white ml-1" weight="fill" />
                  </button>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quotes size={24} className="absolute -top-2 -left-2 text-emerald-500" weight="fill" />
                  <p className="text-slate-700 italic leading-relaxed pl-6">
                      &quot;{item.quote}&quot;
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">{item.timeframe}</div>
                    <div className="text-xs text-slate-500">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.salaryIncrease}</div>
                    <div className="text-xs text-slate-500">Salary Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{item.company}</div>
                    <div className="text-xs text-slate-500">Company</div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {item.achievements.slice(0, 3).map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" weight="fill" />
                        <span className="text-sm text-slate-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setSelectedStory(selectedStory === item.id ? null : item.id)}
                    className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300"
                  >
                    {selectedStory === item.id ? 'Hide' : 'Read'} Full Story
                  </button>
                  <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Watch Video
                    <ArrowRight size={14} className="inline ml-2" weight="bold" />
                  </button>
                </div>

                {/* Full Story Expandable */}
                {selectedStory === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-slate-200"
                  >
                    <h4 className="font-semibold text-slate-900 mb-3">The Full Story</h4>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.fullStory}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">All Achievements</h5>
                        <div className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" weight="fill" />
                              <span className="text-sm text-slate-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-2">Career Impact</h5>
                        <div className="space-y-2 text-sm text-slate-600">
                          <div>✨ Discovered optimal role alignment</div>
                          <div>🚀 Accelerated career progression</div>
                          <div>💡 Developed new leadership capabilities</div>
                          <div>🎯 Achieved measurable business impact</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="max-w-4xl mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl p-12 text-white text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Quotes size={40} className="text-white" weight="fill" />
            </div>
            
            <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
              &quot;CareerRPG didn&apos;t just help me find a new job—it helped me understand who I am and how I can contribute my best work. The Neuroclass assessment was a revelation.&quot;
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Crown size={20} className="text-white" weight="duotone" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-sm opacity-80">Head of Product Strategy, TechFlow</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-200"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket size={32} className="text-white" weight="duotone" />
            </div>
            
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ready to Write Your Success Story?
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who&apos;ve transformed their careers through cognitive understanding and strategic role alignment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Brain size={20} className="inline mr-2" weight="bold" />
                Start Your Journey
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all duration-300">
                <Users size={20} className="inline mr-2" weight="bold" />
                Join Community
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
