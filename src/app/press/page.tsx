'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Microphone,
  Camera,
  Download,
  Calendar,
  Eye,
  Trophy,
  Star,
  ArrowRight,
  Quotes,
  Users,
  Buildings,
  Rocket,
  ChartLineUp,
  FileText,
  Image,
  VideoCamera,
  LinkSimple
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PressPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All News', icon: Newspaper },
    { id: 'funding', label: 'Funding & Growth', icon: ChartLineUp },
    { id: 'product', label: 'Product Updates', icon: Rocket },
    { id: 'research', label: 'Research & Studies', icon: FileText },
    { id: 'awards', label: 'Awards & Recognition', icon: Trophy }
  ];

  const pressReleases = [
    {
      id: 1,
      category: 'funding',
      title: 'CareerRPG Raises $15M Series A to Transform Career Development Through Cognitive Science',
      date: '2024-01-15',
      excerpt: 'Leading the future of work with gamified, science-backed career development platform that has helped over 25,000 professionals discover their cognitive strengths.',
      outlet: 'Company Announcement',
      views: '12.5K',
      featured: true
    },
    {
      id: 2,
      category: 'research',
      title: 'New Study Reveals 89% Accuracy in Cognitive Archetype Classification Using CareerRPG Framework',
      date: '2024-01-10',
      excerpt: 'Peer-reviewed research published in Journal of Applied Psychology validates the effectiveness of the Neuroclass assessment in workplace settings.',
      outlet: 'Research Publication',
      views: '8.7K',
      featured: true
    },
    {
      id: 3,
      category: 'awards',
      title: 'CareerRPG Named "Most Innovative HR Tech Startup" by TechCrunch',
      date: '2024-01-05',
      excerpt: 'Recognition for pioneering approach to career development that combines gaming mechanics with cognitive psychology insights.',
      outlet: 'TechCrunch',
      views: '15.2K',
      featured: true
    },
    {
      id: 4,
      category: 'product',
      title: 'CareerRPG Launches Enterprise Dashboard for Team Cognitive Diversity Analytics',
      date: '2023-12-20',
      excerpt: 'New features help managers understand team dynamics and optimize collaboration through cognitive diversity insights.',
      outlet: 'Product Update',
      views: '6.8K',
      featured: false
    },
    {
      id: 5,
      category: 'funding',
      title: 'CareerRPG Completes $3M Seed Round Led by Bessemer Venture Partners',
      date: '2023-11-15',
      excerpt: 'Early funding enables platform development and validation of cognitive assessment framework with initial user base.',
      outlet: 'Company Announcement',
      views: '9.3K',
      featured: false
    }
  ];

  const mediaKit = [
    {
      type: 'Company Logo',
      description: 'High-resolution CareerRPG logos in various formats',
      format: 'PNG, SVG, PDF',
      size: '2.3 MB',
      icon: Image
    },
    {
      type: 'Product Screenshots',
      description: 'Assessment interface, dashboard, and key features',
      format: 'PNG, JPG',
      size: '8.7 MB',
      icon: Camera
    },
    {
      type: 'Team Photos',
      description: 'Executive headshots and team photography',
      format: 'JPG',
      size: '12.1 MB',
      icon: Users
    },
    {
      type: 'Company Fact Sheet',
      description: 'Key statistics, milestones, and company overview',
      format: 'PDF',
      size: '1.2 MB',
      icon: FileText
    },
    {
      type: 'Video Assets',
      description: 'Product demos, founder interviews, and company story',
      format: 'MP4',
      size: '156 MB',
      icon: VideoCamera
    }
  ];

  const mediaContacts = [
    {
      name: 'Sarah Chen',
      title: 'CEO & Founder',
      email: 'sarah@careerrpg.com',
      phone: '+1 (555) 123-4567',
      expertise: ['Company Vision', 'Cognitive Science', 'Future of Work']
    },
    {
      name: 'Dr. Maya Patel',
      title: 'Head of Research',
      email: 'maya@careerrpg.com',
      phone: '+1 (555) 234-5678',
      expertise: ['Research Findings', 'Academic Studies', 'Neurodiversity']
    },
    {
      name: 'Jennifer Kim',
      title: 'Head of Growth',
      email: 'jennifer@careerrpg.com',
      phone: '+1 (555) 345-6789',
      expertise: ['User Stories', 'Market Trends', 'Customer Success']
    }
  ];

  const recentCoverage = [
    {
      outlet: 'Harvard Business Review',
      headline: 'The Science Behind Cognitive Diversity in High-Performing Teams',
      author: 'Dr. Maya Patel',
      date: '2024-01-12',
      type: 'Thought Leadership',
      url: '#'
    },
    {
      outlet: 'Fast Company',
      headline: 'This Startup is Gamifying Career Development—And It\'s Working',
      author: 'External',
      date: '2024-01-08',
      type: 'Feature Article',
      url: '#'
    },
    {
      outlet: 'MIT Sloan Management Review',
      headline: 'Adapting Organizational Structures for Cognitive Diversity',
      author: 'Lisa Chang',
      date: '2024-01-05',
      type: 'Research Article',
      url: '#'
    },
    {
      outlet: 'Wired',
      headline: 'The Future of Work is Cognitive: How AI Meets Psychology',
      author: 'External',
      date: '2023-12-28',
      type: 'Technology Focus',
      url: '#'
    },
    {
      outlet: 'Forbes',
      headline: '30 Under 30: Sarah Chen\'s Mission to Transform Career Development',
      author: 'External',
      date: '2023-12-15',
      type: 'Profile',
      url: '#'
    }
  ];

  const companyStats = [
    { label: 'Users Served', value: '25,000+', icon: Users },
    { label: 'Companies Using Platform', value: '500+', icon: Buildings },
    { label: 'Research Citations', value: '890+', icon: FileText },
    { label: 'Team Members', value: '47', icon: Rocket }
  ];

  const filteredReleases = selectedCategory === 'all' 
    ? pressReleases 
    : pressReleases.filter(release => release.category === selectedCategory);

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
              <Newspaper size={16} className="mr-2" weight="duotone" />
              Press & Media
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              CareerRPG in the
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> News</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Stay updated with our latest announcements, research findings, and media coverage. 
              Download our media kit or get in touch with our press team.
            </motion.p>

            {/* Company Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 mx-auto mb-4">
                    <stat.icon size={24} className="text-white" weight="duotone" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
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

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Press Releases */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Press Releases</h2>
              
              {filteredReleases.map((release, index) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 group ${
                    release.featured ? 'border-emerald-300 bg-emerald-50/50' : 'border-slate-200'
                  }`}
                >
                  {release.featured && (
                    <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                      <Star size={14} className="mr-1" weight="fill" />
                      Featured
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {release.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" weight="duotone" />
                          {new Date(release.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Newspaper size={14} className="mr-1" weight="duotone" />
                          {release.outlet}
                        </div>
                        <div className="flex items-center">
                          <Eye size={14} className="mr-1" weight="duotone" />
                          {release.views} views
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">{release.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300">
                      Read Full Release
                    </button>
                    <div className="flex items-center space-x-3">
                      <button className="p-2 rounded-lg border border-slate-300 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300">
                        <Download size={18} className="text-slate-600" weight="duotone" />
                      </button>
                      <button className="p-2 rounded-lg border border-slate-300 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300">
                        <LinkSimple size={18} className="text-slate-600" weight="duotone" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Recent Coverage */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Recent Media Coverage</h3>
                <div className="space-y-4">
                  {recentCoverage.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                              {article.headline}
                            </h4>
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">
                              {article.type}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <span className="font-medium">{article.outlet}</span>
                            <span>•</span>
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>By {article.author}</span>
                          </div>
                        </div>
                        <ArrowRight size={18} className="text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" weight="bold" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Media Kit */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">Media Kit</h3>
                <div className="space-y-4">
                  {mediaKit.map((item, index) => (
                    <motion.div
                      key={item.type}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-3 rounded-lg border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-white" weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                          {item.type}
                        </h4>
                        <p className="text-sm text-slate-600 mb-1">{item.description}</p>
                        <div className="flex items-center space-x-2 text-xs text-slate-500">
                          <span>{item.format}</span>
                          <span>•</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                      <Download size={16} className="text-slate-400 group-hover:text-emerald-500 transition-colors duration-300" weight="duotone" />
                    </motion.div>
                  ))}
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Download size={18} className="inline mr-2" weight="bold" />
                  Download Complete Kit
                </button>
              </motion.div>

              {/* Media Contacts */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">Media Contacts</h3>
                <div className="space-y-6">
                  {mediaContacts.map((contact, index) => (
                    <motion.div
                      key={contact.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                    >
                      <h4 className="font-semibold text-slate-900 mb-1">{contact.name}</h4>
                      <p className="text-sm text-emerald-600 font-medium mb-2">{contact.title}</p>
                      <div className="space-y-1 text-sm text-slate-600 mb-3">
                        <div className="flex items-center">
                          <Microphone size={14} className="mr-2" weight="duotone" />
                          {contact.email}
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-2" weight="duotone" />
                          {contact.phone}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {contact.expertise.map((topic, idx) => (
                          <span key={idx} className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Press Inquiry */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-6 border border-emerald-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Quotes size={24} className="text-white" weight="duotone" />
                </div>
                <h3 className="text-lg font-bold text-emerald-900 mb-3">Press Inquiry</h3>
                <p className="text-sm text-emerald-800 mb-4">
                  Working on a story about the future of work, cognitive diversity, or career development? 
                  We&apos;d love to help with insights and data.
                </p>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Microphone size={18} className="inline mr-2" weight="bold" />
                  Contact Press Team
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
