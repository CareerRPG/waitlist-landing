'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Brain,
  Target,
  Trophy,
  Lightbulb,
  Coffee,
  GameController,
  Sparkle,
  CheckCircle
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CompanyCareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', label: 'All Positions', icon: Users },
    { id: 'engineering', label: 'Engineering', icon: Brain },
    { id: 'product', label: 'Product', icon: Target },
    { id: 'design', label: 'Design', icon: Sparkle },
    { id: 'research', label: 'Research', icon: Lightbulb },
    { id: 'marketing', label: 'Marketing', icon: Trophy },
    { id: 'operations', label: 'Operations', icon: CheckCircle }
  ];

  const companyValues = [
    {
      title: 'Cognitive Diversity First',
      description: 'We celebrate different thinking styles and believe our diversity makes us stronger',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Growth Through Play',
      description: 'Learning should be engaging. We gamify development and make growth irresistible',
      icon: GameController,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Science-Backed Decisions',
      description: 'Every choice is grounded in research. We combine rigor with intuitive design',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Human-Centered Impact',
      description: 'Technology serves humanity. We design for human flourishing and authentic connection',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health, dental, and vision insurance',
        'Mental health support and counseling services',
        'Annual wellness stipend for fitness and self-care',
        'Flexible work arrangements and unlimited PTO'
      ]
    },
    {
      category: 'Growth & Development',
      items: [
        'Annual learning budget of $3,000 per employee',
        'Conference attendance and professional development',
        'Internal mentorship and coaching programs',
        'Cross-team collaboration and skill sharing'
      ]
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Flexible remote and hybrid work options',
        'Quarterly team retreats and off-sites',
        'Sabbatical opportunities after 5 years',
        'Family-friendly policies and parental leave'
      ]
    },
    {
      category: 'Financial Security',
      items: [
        'Competitive salary with equity participation',
        '401(k) with company matching up to 6%',
        'Annual performance bonuses',
        'Stock option program for all employees'
      ]
    }
  ];

  const openPositions = [
    {
      id: 1,
      department: 'engineering',
      title: 'Senior Full-Stack Engineer',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      level: 'Senior',
      neuroclass: 'Obsidia preferred',
      role: 'Mage',
      description: 'Build the core platform that powers CareerRPG. Work on assessment algorithms, user experience, and scalable architecture.',
      requirements: ['5+ years full-stack development', 'React/Node.js expertise', 'System design experience', 'Psychology/assessment interest'],
      posted: '2 days ago'
    },
    {
      id: 2,
      department: 'product',
      title: 'Principal Product Manager',
      location: 'Remote',
      type: 'Full-time',
      level: 'Senior',
      neuroclass: 'Lumina preferred',
      role: 'Support',
      description: 'Drive product strategy for our enterprise offerings. Define roadmap, gather insights, and guide cross-functional teams.',
      requirements: ['7+ years product management', 'B2B SaaS experience', 'Data-driven approach', 'Leadership skills'],
      posted: '1 week ago'
    },
    {
      id: 3,
      department: 'design',
      title: 'Senior UX Designer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      level: 'Senior',
      neuroclass: 'Solara preferred',
      role: 'Archer',
      description: 'Shape the user experience of our assessment and career development platform. Create delightful, accessible interfaces.',
      requirements: ['5+ years UX design', 'Design systems experience', 'User research skills', 'Psychology understanding'],
      posted: '3 days ago'
    },
    {
      id: 4,
      department: 'research',
      title: 'Research Scientist - Cognitive Psychology',
      location: 'Remote',
      type: 'Full-time',
      level: 'Senior',
      neuroclass: 'Aureus preferred',
      role: 'Assassin',
      description: 'Advance our understanding of cognitive diversity in workplace settings. Design studies and analyze behavioral data.',
      requirements: ['PhD in Psychology/Cognitive Science', 'Research methodology expertise', 'Statistical analysis skills', 'Publication record'],
      posted: '5 days ago'
    },
    {
      id: 5,
      department: 'marketing',
      title: 'Growth Marketing Manager',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      level: 'Mid',
      neuroclass: 'Crimsonix preferred',
      role: 'Warrior',
      description: 'Drive user acquisition and engagement through data-driven marketing campaigns. Optimize conversion funnels.',
      requirements: ['3+ years growth marketing', 'Analytics expertise', 'A/B testing experience', 'Creative mindset'],
      posted: '1 week ago'
    },
    {
      id: 6,
      department: 'operations',
      title: 'Head of People Operations',
      location: 'San Francisco, CA',
      type: 'Full-time',
      level: 'Executive',
      neuroclass: 'Azura preferred',
      role: 'Healer',
      description: 'Build and scale our people-first culture. Design systems for hiring, development, and employee experience.',
      requirements: ['8+ years people ops', 'Scaling experience', 'Culture building', 'Strategic thinking'],
      posted: '2 weeks ago'
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-700 mb-6"
            >
              <Rocket size={16} className="mr-2" weight="duotone" />
              Join Our Team
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Build the Future of
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Work</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Join a team of diverse thinkers transforming how people discover their potential and build meaningful careers. 
              We&apos;re looking for passionate individuals across all Neuroclass and Roles.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Users size={20} className="inline mr-2" weight="bold" />
                View Open Positions
              </button>
              <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-all duration-300">
                <Heart size={20} className="inline mr-2" weight="bold" />
                Learn Our Culture
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-4 gap-6"
            >
              {[
                { label: 'Team Members', value: '47', icon: Users },
                { label: 'Countries', value: '12', icon: MapPin },
                { label: 'Open Positions', value: '8', icon: Rocket },
                { label: 'Avg Tenure', value: '3.2 years', icon: Clock }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-4">
                    <stat.icon size={24} className="text-white" weight="duotone" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Company Values */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide how we work, build, and grow together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}>
                  <value.icon size={32} className="text-white" weight="duotone" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Department Filter */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-200">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-700'
                  }`}
                >
                  <dept.icon size={18} className="mr-2" weight={selectedDepartment === dept.id ? 'bold' : 'regular'} />
                  {dept.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Job Listings */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Open Positions</h2>
              
              <div className="space-y-6">
                {filteredPositions.map((position, index) => (
                  <motion.div
                    key={position.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                            {position.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                              {position.role}
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                              {position.level}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-slate-600 text-sm mb-3 space-x-4">
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" weight="duotone" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" weight="duotone" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <Brain size={14} className="mr-1" weight="duotone" />
                            {position.neuroclass}
                          </div>
                        </div>
                        
                        <p className="text-slate-600 mb-4 leading-relaxed">{position.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {position.requirements.map((req, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-sm">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div className="text-sm text-slate-500">
                        Posted {position.posted}
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-300">
                          Learn More
                        </button>
                        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                          Apply Now
                          <ArrowRight size={16} className="inline ml-2" weight="bold" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">Why Join CareerRPG?</h3>
                <div className="space-y-6">
                  {benefits.map((category) => (
                    <div key={category.category}>
                      <h4 className="font-semibold text-slate-900 mb-3">{category.category}</h4>
                      <div className="space-y-2">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle size={16} className="text-purple-500 mt-0.5 flex-shrink-0" weight="fill" />
                            <span className="text-sm text-slate-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Culture Highlight */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 border border-purple-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Coffee size={24} className="text-white" weight="duotone" />
                </div>
                <h3 className="text-lg font-bold text-purple-900 mb-3">Remote-First Culture</h3>
                <p className="text-sm text-purple-800 mb-4">
                  We&apos;ve been remote-first since day one. Our distributed team spans 12 countries, 
                  bringing diverse perspectives to everything we build.
                </p>
                <div className="space-y-2 text-sm text-purple-700">
                  <div>🌍 Global team collaboration</div>
                  <div>⏰ Flexible working hours</div>
                  <div>🏖️ Quarterly team retreats</div>
                  <div>💻 Home office stipend</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl p-12 text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkle size={32} className="text-white" weight="duotone" />
            </div>
            
            <h2 className="text-4xl font-bold mb-4">
              Don&apos;t See Your Perfect Role?
            </h2>
            
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent. Send us your resume and tell us how 
              you&apos;d like to contribute to the future of work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Heart size={20} className="inline mr-2" weight="bold" />
                Send General Application
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                <Users size={20} className="inline mr-2" weight="bold" />
                Join Our Talent Pool
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
