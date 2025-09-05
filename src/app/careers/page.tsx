'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MagnifyingGlass,
  MapPin,
  Clock,
  Users,
  Star,
  ArrowRight,
  SortAscending,
  Buildings,
  Rocket,
  Brain,
  Target,
  Heart,
  Gear,
  Shield,
  Lightbulb,
  Sword,
  CurrencyDollar,
  Sliders
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    role: 'All Roles',
    level: 'All Levels', 
    type: 'All Types',
    location: 'All Locations'
  });
  const [sortBy, setSortBy] = useState('relevance');

  const roleIcons = {
    'Support': Lightbulb,
    'Warrior': Sword,
    'Healer': Heart,
    'Mage': Gear,
    'Archer': Target,
    'Assassin': MagnifyingGlass,
    'Tank': Shield
  };

  const jobListings = [
    {
      id: 1,
      title: 'Senior Product Manager',
      company: 'TechFlow',
      location: 'San Francisco, CA',
      type: 'Full-time',
      level: 'Senior',
      salary: '$140k - $180k',
      role: 'Assassin',
      neuroclass: 'Aureus',
      description: 'Lead product strategy and development for our AI-powered analytics platform. Drive cross-functional collaboration and deliver user-centric solutions.',
      requirements: ['5+ years product management', 'B2B SaaS experience', 'Data-driven mindset', 'Strong communication skills'],
      posted: '2 days ago',
      applicants: 23,
      match: 95
    },
    {
      id: 2,
      title: 'UX Design Lead',
      company: 'DesignCorp',
      location: 'Remote',
      type: 'Full-time',
      level: 'Senior',
      salary: '$120k - $160k',
      role: 'Archer',
      neuroclass: 'Solara',
      description: 'Shape the future of our design system and lead a team of talented designers. Create beautiful, accessible experiences for millions of users.',
      requirements: ['7+ years UX design', 'Design systems experience', 'Leadership skills', 'Portfolio required'],
      posted: '1 week ago',
      applicants: 41,
      match: 92
    },
    {
      id: 3,
      title: 'Engineering Manager',
      company: 'DataSys',
      location: 'Seattle, WA',
      type: 'Full-time',
      level: 'Senior',
      salary: '$160k - $200k',
      role: 'Healer',
      neuroclass: 'Azura',
      description: 'Build and lead a high-performing engineering team. Foster a culture of innovation, mentorship, and technical excellence.',
      requirements: ['5+ years engineering', '2+ years management', 'Team building skills', 'Technical depth'],
      posted: '3 days ago',
      applicants: 18,
      match: 88
    },
    {
      id: 4,
      title: 'Chief Technology Officer',
      company: 'GrowthStart',
      location: 'Austin, TX',
      type: 'Full-time',
      level: 'Executive',
      salary: '$200k - $300k + equity',
      role: 'Warrior',
      neuroclass: 'Crimsonix',
      description: 'Scale our technical organization from 20 to 200+ engineers. Set technical vision and drive execution of ambitious product roadmap.',
      requirements: ['10+ years technical leadership', 'Startup experience', 'Scaling expertise', 'Strategic thinking'],
      posted: '5 days ago',
      applicants: 12,
      match: 91
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'ML Dynamics',
      location: 'Boston, MA',
      type: 'Full-time',
      level: 'Mid',
      salary: '$90k - $130k',
      role: 'Mage',
      neuroclass: 'Obsidia',
      description: 'Build machine learning models to power our recommendation engine. Work with large datasets and cutting-edge ML techniques.',
      requirements: ['Python/R proficiency', 'ML/Statistics background', 'PhD preferred', 'Research experience'],
      posted: '1 day ago',
      applicants: 67,
      match: 89
    },
    {
      id: 6,
      title: 'VP of People Operations',
      company: 'PeopleFirst',
      location: 'Denver, CO',
      type: 'Full-time',
      level: 'Executive',
      salary: '$150k - $190k',
      role: 'Support',
      neuroclass: 'Lumina',
      description: 'Shape our company culture and people strategy. Lead talent acquisition, development, and retention initiatives at scale.',
      requirements: ['8+ years HR leadership', 'Culture building', 'Strategic planning', 'Change management'],
      posted: '4 days ago',
      applicants: 29,
      match: 94
    },
    {
      id: 7,
      title: 'Quality Assurance Director',
      company: 'SecureBase',
      location: 'New York, NY',
      type: 'Full-time',
      level: 'Senior',
      salary: '$130k - $170k',
      role: 'Tank',
      neuroclass: 'Noxion',
      description: 'Establish and maintain world-class quality standards across all product releases. Lead QA team and implement robust testing processes.',
      requirements: ['6+ years QA leadership', 'Process optimization', 'Risk management', 'Team leadership'],
      posted: '6 days ago',
      applicants: 15,
      match: 87
    },
    {
      id: 8,
      title: 'Business Development Manager',
      company: 'PartnerLink',
      location: 'Chicago, IL',
      type: 'Full-time',
      level: 'Mid',
      salary: '$80k - $120k + commission',
      role: 'Assassin',
      neuroclass: 'Crimsonix',
      description: 'Drive strategic partnerships and new business opportunities. Build relationships with key stakeholders and expand market presence.',
      requirements: ['3+ years business development', 'Relationship building', 'Negotiation skills', 'Market analysis'],
      posted: '2 weeks ago',
      applicants: 38,
      match: 85
    }
  ];

  const filterOptions = {
    role: ['All Roles', 'Support', 'Warrior', 'Healer', 'Mage', 'Archer', 'Assassin', 'Tank'],
    level: ['All Levels', 'Entry', 'Mid', 'Senior', 'Executive'],
    type: ['All Types', 'Full-time', 'Part-time', 'Contract', 'Remote'],
    location: ['All Locations', 'Remote', 'San Francisco', 'New York', 'Seattle', 'Austin', 'Boston']
  };

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = selectedFilters.role === 'All Roles' || job.role === selectedFilters.role;
    const matchesLevel = selectedFilters.level === 'All Levels' || job.level.toLowerCase() === selectedFilters.level.toLowerCase();
    const matchesType = selectedFilters.type === 'All Types' || job.type.toLowerCase().includes(selectedFilters.type.toLowerCase());
    const matchesLocation = selectedFilters.location === 'All Locations' || job.location.toLowerCase().includes(selectedFilters.location.toLowerCase());

    return matchesSearch && matchesRole && matchesLevel && matchesType && matchesLocation;
  });

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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6"
            >
              <Briefcase size={16} className="mr-2" weight="duotone" />
              Career Opportunities
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Find Your Perfect
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Career Match</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Discover opportunities aligned with your Neuroclass and Role. 
              Jobs curated for cognitive fit and career growth potential.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              variants={itemVariants}
              className="max-w-3xl mx-auto relative mb-8"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MagnifyingGlass size={20} className="text-slate-400" weight="duotone" />
              </div>
              <input
                type="text"
                placeholder="Search by job title, company, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-lg"
              />
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-8 text-sm text-slate-600"
            >
              <div>{filteredJobs.length} jobs found</div>
              <div>• Top companies hiring</div>
              <div>• Neuroclass-matched positions</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-6 mb-8">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center text-slate-600">
                <Sliders size={18} className="mr-2" weight="duotone" />
                <span className="font-medium">Filters:</span>
              </div>
              
              {Object.entries(filterOptions).map(([key, options]) => (
                <select
                  key={key}
                  value={selectedFilters[key as keyof typeof selectedFilters]}
                  onChange={(e) => setSelectedFilters({...selectedFilters, [key]: e.target.value})}
                  className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 text-sm bg-white text-slate-700 min-w-[120px]"
                >
                  {options.map(option => (
                    <option key={option} value={option} className="text-slate-700">
                      {option}
                    </option>
                  ))}
                </select>
              ))}

              <div className="flex items-center ml-auto">
                <SortAscending size={18} className="mr-2 text-slate-600" weight="duotone" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 text-sm bg-white text-slate-700 min-w-[140px]"
                >
                  <option value="relevance" className="text-slate-700">Sort by Relevance</option>
                  <option value="date" className="text-slate-700">Date Posted</option>
                  <option value="salary" className="text-slate-700">Salary</option>
                  <option value="match" className="text-slate-700">Match Score</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {filteredJobs.map((job, index) => {
              const RoleIcon = roleIcons[job.role as keyof typeof roleIcons];
              
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      {/* Company Logo Placeholder */}
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Buildings size={24} className="text-white" weight="duotone" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {job.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            {/* Role Badge */}
                            <div className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                              <RoleIcon size={14} className="mr-1" weight="duotone" />
                              {job.role}
                            </div>
                            {/* Match Score */}
                            <div className="flex items-center px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                              <Star size={12} className="mr-1" weight="fill" />
                              {job.match}% match
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-slate-600 text-sm mb-3 space-x-4">
                          <span className="font-medium">{job.company}</span>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" weight="duotone" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <CurrencyDollar size={14} className="mr-1" weight="duotone" />
                            {job.salary}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" weight="duotone" />
                            {job.posted}
                          </div>
                        </div>
                        
                        <p className="text-slate-600 mb-4 leading-relaxed">{job.description}</p>
                        
                        {/* Requirements */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.requirements.slice(0, 4).map((req, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-sm">
                              {req}
                            </span>
                          ))}
                          {job.requirements.length > 4 && (
                            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-sm">
                              +{job.requirements.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col items-end space-y-3 ml-6">
                      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Apply Now
                        <ArrowRight size={16} className="inline ml-2" weight="bold" />
                      </button>
                      
                      <div className="text-right text-sm text-slate-500">
                        <div>{job.applicants} applicants</div>
                        <div>Best for {job.neuroclass}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Job Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.level} level</span>
                      <span>•</span>
                      <span>Matches your {job.role} profile</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-lg border border-slate-300 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                        <Heart size={18} className="text-slate-400 hover:text-blue-500" weight="duotone" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-blue-300 text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300">
              Load More Jobs
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-12 text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket size={32} className="text-white" weight="duotone" />
            </div>
            
            <h2 className="text-4xl font-bold mb-4">
              Not Finding the Right Fit?
            </h2>
            
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Discover your Neuroclass and unlock personalized career recommendations. 
              Get matched with opportunities that align with how you think and work best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Brain size={20} className="inline mr-2" weight="bold" />
                Take Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                <Users size={20} className="inline mr-2" weight="bold" />
                Join Talent Pool
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
