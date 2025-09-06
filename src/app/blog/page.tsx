'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Article, 
  Clock,
  Calendar,
  User,
  Tag,
  ArrowRight,
  Brain,
  Target,
  Trophy,
  Lightbulb,
  Users,
  Sparkle,
  Fire
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts', icon: Article },
    { id: 'neuroclass', label: 'Neuroclass Insights', icon: Brain },
    { id: 'roles', label: 'Role Mastery', icon: Target },
    { id: 'careers', label: 'Career Growth', icon: Trophy },
    { id: 'productivity', label: 'Productivity', icon: Lightbulb },
    { id: 'leadership', label: 'Leadership', icon: Users }
  ];

  const featuredPost = {
    title: 'The Future of Work: Why Cognitive Diversity is Your Competitive Advantage',
    excerpt: 'Discover how understanding your team\'s neuroclass can unlock unprecedented levels of performance and innovation in the modern workplace.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'neuroclass',
    image: '/blog/featured-cognitive-diversity.jpg',
    tags: ['Neuroscience', 'Team Dynamics', 'Future of Work']
  };

  const blogPosts = [
    {
      title: 'From Lumina to Leadership: A Visioneer\'s Journey to Strategic Impact',
      excerpt: 'How one Lumina professional transformed their big-picture thinking into executive leadership success.',
      author: 'Marcus Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'neuroclass',
      tags: ['Lumina', 'Leadership', 'Career Growth']
    },
    {
      title: 'The Support Role Revolution: Why Strategic Enablers are the New CEOs',
      excerpt: 'Explore how Support role professionals are reshaping modern leadership through empowerment and guidance.',
      author: 'Jennifer Kim',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'roles',
      tags: ['Support Role', 'Leadership', 'Strategic Thinking']
    },
    {
      title: 'Pomodungeon Sessions: Gamifying Deep Work for Maximum Flow',
      excerpt: 'Master the art of focused productivity through our revolutionary Pomodungeon technique.',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'productivity',
      tags: ['Productivity', 'Focus', 'Gamification']
    },
    {
      title: 'Cross-Class Mastery: When Empaths Become Warriors',
      excerpt: 'Real stories of professionals who successfully adapted to roles outside their natural Neuroclass.',
      author: 'Dr. Maya Patel',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'careers',
      tags: ['Career Change', 'Adaptation', 'Growth']
    },
    {
      title: 'The Science Behind neuroclass: Understanding Your Cognitive Blueprint',
      excerpt: 'Dive deep into the research and methodology behind our cognitive assessment framework.',
      author: 'Dr. James Wilson',
      date: '2024-01-03',
      readTime: '12 min read',
      category: 'neuroclass',
      tags: ['Research', 'Neuroscience', 'Assessment']
    },
    {
      title: 'Building High-Performance Teams with Neuroclass Diversity',
      excerpt: 'Learn how to intentionally design teams that leverage cognitive diversity for breakthrough results.',
      author: 'Lisa Chang',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'leadership',
      tags: ['Team Building', 'Performance', 'Diversity']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-sm font-medium text-emerald-700 mb-6"
            >
              <Article size={16} className="mr-2" weight="duotone" />
              CareerRPG Blog
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Career Insights &
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Growth Tips</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Discover the latest insights on neuroclass, role mastery, and career development. 
              Transform your professional journey with science-backed strategies and real-world success stories.
            </motion.p>
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

        {/* Featured Post */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  <Fire size={14} className="mr-2" weight="duotone" />
                  Featured Article
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-xl opacity-90 mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center text-sm opacity-80 mb-6">
                  <User size={16} className="mr-2" weight="duotone" />
                  {featuredPost.author}
                  <Clock size={16} className="ml-4 mr-2" weight="duotone" />
                  {featuredPost.readTime}
                  <Calendar size={16} className="ml-4 mr-2" weight="duotone" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </div>
                
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Read Full Article
                  <ArrowRight size={20} className="inline ml-2" weight="bold" />
                </button>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-white/20 rounded-2xl flex items-center justify-center">
                  <Article size={80} className="text-white/50" weight="duotone" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                  {(() => {
                    const category = categories.find(cat => cat.id === post.category);
                    const IconComponent = category?.icon;
                    return (
                      <>
                        {IconComponent && <IconComponent size={14} className="mr-2" weight="duotone" />}
                        {category?.label}
                      </>
                    );
                  })()}
                </div>

                {/* Article Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 flex items-center justify-center">
                  <Article size={40} className="text-slate-400" weight="duotone" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs"
                    >
                      <Tag size={10} className="mr-1" weight="duotone" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" weight="duotone" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" weight="duotone" />
                    {post.readTime}
                  </div>
                </div>

                {/* Read More */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors duration-300">
                    Read Article
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-4xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl p-12 border border-slate-200"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkle size={32} className="text-white" weight="duotone" />
            </div>
            
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Stay Ahead of the Curve
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Get the latest career insights, Neuroclass discoveries, and productivity tips delivered to your inbox. 
              Join thousands of professionals leveling up their careers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-slate-500 mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
