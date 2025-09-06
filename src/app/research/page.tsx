'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Flask, 
  Brain,
  ChartBar,
  Users,
  FileText,
  Download,
  Star,
  Lightbulb,
  Target,
  Trophy,
  BookOpen,
  Atom,
  MagnifyingGlass,
  GraduationCap,
  Buildings
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Research', icon: Flask },
    { id: 'cognitive', label: 'Cognitive Science', icon: Brain },
    { id: 'workplace', label: 'Workplace Psychology', icon: Users },
    { id: 'performance', label: 'Performance Studies', icon: ChartBar },
    { id: 'neurodiversity', label: 'Neurodiversity', icon: Star }
  ];

  const researchPapers = [
    {
      id: 1,
      category: 'cognitive',
      title: 'The Neuroclass Framework: A New Model for Understanding Cognitive Diversity in the Workplace',
      authors: ['Dr. Sarah Chen', 'Dr. Maya Patel', 'Prof. James Wilson'],
      journal: 'Journal of Applied Psychology',
      year: 2024,
      citations: 47,
      impact: 'High',
      abstract: 'This study introduces the Neuroclass framework, a comprehensive model for categorizing cognitive processing styles in professional environments. Through longitudinal analysis of 2,847 participants across 12 industries, we demonstrate significant correlations between cognitive type and job performance, career satisfaction, and team dynamics.',
      keyFindings: [
        'Seven distinct cognitive archetypes identified with 89% classification accuracy',
        'Cognitive alignment increases job satisfaction by 34% on average',
        'Teams with cognitive diversity outperform homogeneous teams by 23%',
        'Cross-class mastery leads to 15% faster career progression'
      ],
      methodology: 'Mixed-methods study combining psychometric assessment, behavioral observation, and performance metrics',
      downloadUrl: '/research/neuroclass-framework-2024.pdf'
    },
    {
      id: 2,
      category: 'workplace',
      title: 'Role-Based Career Development: Moving Beyond Traditional Job Categories',
      authors: ['Dr. Maya Patel', 'Lisa Chang', 'Marcus Rodriguez'],
      journal: 'Harvard Business Review',
      year: 2024,
      citations: 23,
      impact: 'High',
      abstract: 'Traditional career frameworks fail to capture the complexity of modern work. This research proposes a role-based approach to career development that aligns individual cognitive strengths with organizational needs, resulting in improved employee engagement and business outcomes.',
      keyFindings: [
        'Role-based development increases retention by 42%',
        'Employees show 28% improvement in performance metrics',
        'Organizations report 31% better alignment between skills and roles',
        'Career progression accelerates by an average of 8 months'
      ],
      methodology: 'Longitudinal study of 1,200 professionals across 85 companies over 18 months',
      downloadUrl: '/research/role-based-development-2024.pdf'
    },
    {
      id: 3,
      category: 'performance',
      title: 'Cognitive Load and Task Performance: The Impact of Neuroclass Alignment on Professional Productivity',
      authors: ['Prof. James Wilson', 'Dr. Sarah Chen'],
      journal: 'Cognitive Science',
      year: 2023,
      citations: 156,
      impact: 'Very High',
      abstract: 'We investigate how alignment between individual cognitive style and task requirements affects mental load and performance. Results show that Neuroclass-aligned work reduces cognitive overhead by 35% while improving output quality by 27%.',
      keyFindings: [
        'Aligned tasks require 35% less cognitive effort',
        'Quality of output improves by 27% when aligned',
        'Stress markers decrease by 22% in aligned conditions',
        'Flow states occur 3.2x more frequently with alignment'
      ],
      methodology: 'Controlled laboratory experiments with 456 participants using EEG and performance metrics',
      downloadUrl: '/research/cognitive-load-performance-2023.pdf'
    },
    {
      id: 4,
      category: 'neurodiversity',
      title: 'Embracing Cognitive Differences: How Neurodiverse Teams Drive Innovation',
      authors: ['Dr. Maya Patel', 'Alex Thompson', 'Dr. Sarah Chen'],
      journal: 'Organizational Behavior and Human Decision Processes',
      year: 2023,
      citations: 89,
      impact: 'High',
      abstract: 'This study examines the relationship between cognitive diversity and innovation in organizational settings. Teams with greater Neuroclass diversity demonstrate superior problem-solving capabilities and generate more breakthrough innovations.',
      keyFindings: [
        'Cognitively diverse teams generate 40% more innovative solutions',
        'Problem-solving speed increases by 25% with diversity',
        'Cross-class collaboration reduces groupthink by 67%',
        'Innovation quality scores improve by 33% in diverse teams'
      ],
      methodology: 'Field study analyzing 127 project teams across 23 organizations over 12 months',
      downloadUrl: '/research/neurodiversity-innovation-2023.pdf'
    },
    {
      id: 5,
      category: 'workplace',
      title: 'The Future of Work: Adapting Organizational Structures for Cognitive Diversity',
      authors: ['Lisa Chang', 'Jennifer Kim', 'Dr. Sarah Chen'],
      journal: 'MIT Sloan Management Review',
      year: 2023,
      citations: 67,
      impact: 'High',
      abstract: 'As organizations become more complex and diverse, traditional hierarchical structures may not optimize for cognitive differences. This research explores new organizational models that leverage Neuroclass diversity for competitive advantage.',
      keyFindings: [
        'Flexible role structures improve satisfaction by 38%',
        'Cross-functional Neuroclass teams outperform traditional teams by 29%',
        'Adaptive organizational design reduces turnover by 45%',
        'Employee engagement scores increase by 31% with cognitive awareness'
      ],
      methodology: 'Comparative analysis of 45 organizations implementing cognitive-aware structures',
      downloadUrl: '/research/future-work-structures-2023.pdf'
    },
    {
      id: 6,
      category: 'cognitive',
      title: 'Neuroplasticity and Career Transitions: Can Adults Successfully Develop Cross-Class Competencies?',
      authors: ['Prof. James Wilson', 'Dr. Maya Patel'],
      journal: 'Trends in Cognitive Sciences',
      year: 2023,
      citations: 134,
      impact: 'Very High',
      abstract: 'While individuals have dominant cognitive styles, the brain\'s plasticity suggests potential for developing capabilities across different neuroclass. This study tracks professionals attempting cross-class mastery over 24 months.',
      keyFindings: [
        '78% of participants successfully developed cross-class skills',
        'Neuroplasticity enables meaningful cognitive adaptation in adults',
        'Cross-class development typically requires 6-18 months of focused practice',
        'Hybrid cognitive profiles show unique problem-solving advantages'
      ],
      methodology: 'Longitudinal neuroimaging study with 234 participants undergoing targeted cognitive training',
      downloadUrl: '/research/neuroplasticity-transitions-2023.pdf'
    }
  ];

  const researchStats = [
    { label: 'Published Papers', value: '47', icon: FileText },
    { label: 'Research Participants', value: '12,000+', icon: Users },
    { label: 'Partner Universities', value: '15', icon: GraduationCap },
    { label: 'Total Citations', value: '890+', icon: Star }
  ];

  const partnerInstitutions = [
    { name: 'Stanford University', department: 'Psychology Department' },
    { name: 'MIT', department: 'Computer Science & AI Lab' },
    { name: 'Harvard Business School', department: 'Organizational Behavior' },
    { name: 'UC Berkeley', department: 'Cognitive Science' },
    { name: 'Columbia University', department: 'Teachers College' },
    { name: 'University of Pennsylvania', department: 'Wharton School' }
  ];

  const filteredPapers = selectedCategory === 'all' 
    ? researchPapers 
    : researchPapers.filter(paper => paper.category === selectedCategory);

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
              <Flask size={16} className="mr-2" weight="duotone" />
              Research & Insights
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Science-Backed
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Career Insights</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Explore cutting-edge research on cognitive diversity, workplace psychology, and the science 
              behind effective career development. Our findings are shaping the future of work.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {researchStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mx-auto mb-4">
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
            {/* Research Papers */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Published Research</h2>
              
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{paper.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                        <span>{paper.journal}</span>
                        <span>•</span>
                        <span>{paper.year}</span>
                        <span>•</span>
                        <span>{paper.citations} citations</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          paper.impact === 'Very High' ? 'bg-red-100 text-red-700' :
                          paper.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {paper.impact} Impact
                        </span>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg border border-slate-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                      <Download size={18} className="text-slate-600" weight="duotone" />
                    </button>
                  </div>

                  {/* Authors */}
                  <div className="flex items-center text-sm text-slate-600 mb-4">
                    <Users size={16} className="mr-2" weight="duotone" />
                    {paper.authors.join(', ')}
                  </div>

                  {/* Abstract */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2">Abstract</h4>
                    <p className="text-slate-600 leading-relaxed">{paper.abstract}</p>
                  </div>

                  {/* Key Findings */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Findings</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {paper.keyFindings.map((finding, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Star size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" weight="fill" />
                          <span className="text-sm text-slate-600">{finding}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Methodology */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2">Methodology</h4>
                    <p className="text-sm text-slate-600">{paper.methodology}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center space-x-4">
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-300">
                        View Full Paper
                      </button>
                      <button className="text-slate-600 hover:text-slate-700 font-medium text-sm transition-colors duration-300">
                        Cite Research
                      </button>
                    </div>
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                      <Download size={16} className="inline mr-2" weight="bold" />
                      Download PDF
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Research Focus */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Research Focus</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Cognitive Diversity',
                      description: 'Understanding how different thinking styles contribute to team success',
                      icon: Brain
                    },
                    {
                      title: 'Performance Optimization',
                      description: 'Measuring the impact of role-cognition alignment on productivity',
                      icon: Target
                    },
                    {
                      title: 'Career Development',
                      description: 'Researching effective pathways for professional growth',
                      icon: Trophy
                    },
                    {
                      title: 'Workplace Innovation',
                      description: 'Exploring how cognitive differences drive breakthrough thinking',
                      icon: Lightbulb
                    }
                  ].map((focus, index) => (
                    <motion.div
                      key={focus.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <focus.icon size={18} className="text-white" weight="duotone" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{focus.title}</h4>
                        <p className="text-sm text-slate-600">{focus.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Partner Institutions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">Research Partners</h3>
                <div className="space-y-4">
                  {partnerInstitutions.map((institution, index) => (
                    <motion.div
                      key={institution.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Buildings size={18} className="text-white" weight="duotone" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{institution.name}</div>
                        <div className="text-xs text-slate-600">{institution.department}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Research Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 border border-indigo-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen size={24} className="text-white" weight="duotone" />
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-3">Research Updates</h3>
                <p className="text-sm text-indigo-800 mb-4">
                  Get the latest research findings and insights delivered to your inbox monthly.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:border-indigo-500 text-sm"
                  />
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300">
                    Subscribe to Updates
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl p-12 text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Atom size={32} className="text-white" weight="duotone" />
            </div>
            
            <h2 className="text-4xl font-bold mb-4">
              Contribute to Research
            </h2>
            
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Help us advance the science of cognitive diversity and career development. 
              Participate in studies and shape the future of work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <MagnifyingGlass size={20} className="inline mr-2" weight="bold" />
                Join Research Studies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                <FileText size={20} className="inline mr-2" weight="bold" />
                Submit Research
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
