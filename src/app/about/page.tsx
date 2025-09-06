'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart,
  Brain,
  Users,
  Trophy,
  Lightbulb,
  Rocket,
  Shield,
  Star,
  GameController,
  Sparkle,
  Fire,
  Crown,
  Lightning
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('mission');

  const teamMembers = [
    {
      name: 'Hafiz Kadir (Fiz)',
      role: 'Founder, CEO & CTO',
      neuroclass: 'Lumina',
      roleType: 'Mage',
      bio: 'Hafiz Kadir, known as Fiz, is a Computer Science graduate from Malaysia\'s top 2 university with 3+ years of experience across MNC, GLC & SME. With 132 IQ and coding since age 11, blending technical expertise with a deep passion for gaming culture and community building. Fiz\'s philosophy "How you play games is how you do everything" drives his approach to gamifying career growth.',
      specialties: [
        {
          name: 'Gamification & Product Design',
          description: 'Expert in applying RPG mechanics, quest systems, and progression models to real-world professional growth. A gamer, from Dota Overwatch to Valorant representing his University in Malaysia InterUniversity Grand Finale for Valorant'
        },
        {
          name: 'Ikigai & Brain Color Psychology',
          description: 'Creator of the CareerRPG Neuroclass™, translating cognitive diversity into character classes for career paths'
        },
        {
          name: 'Software Development',
          description: 'Skilled in Next.js, Go, and system architecture design, with hands-on product builds from MVP to scale'
        },
        {
          name: 'Community Building',
          description: 'Proven ability to grow engaged communities (Top 100 MDEC-PRISMA streamer, gaming Discord founder of 250+ community members)'
        },
        {
          name: 'Leadership',
          description: 'Experienced in agile project management, stakeholder engagement, and mentoring young talent through NexzGen Internship eXperience (NIX)'
        }
      ]
    },
    {
      name: 'Tengku Haiqal (Tenku)',
      role: 'Co-Founder & Founding Engineer',
      neuroclass: 'Obsidia',
      roleType: 'Mage',
      bio: 'Tengku Haiqal, known as Tenku, is a Game & Interactive Media Design graduate from Widad University College, bringing together his expertise as both a game developer and full-stack engineer. Tenku has hands-on experience in both storytelling and systems design. He is the solo creator of Stigma Birth, a 2D story-based platformer released on the Google Play Store, demonstrating his end-to-end capabilities in game development, design, and publishing.',
      specialties: [
        {
          name: 'Game Development & Design',
          description: 'Solo creator of Stigma Birth, a 2D story-based platformer on Google Play Store. Expert in end-to-end game development, design, and publishing'
        },
        {
          name: 'Full-Stack Engineering',
          description: 'Technical execution of CareerRPG MVP, building brain-color onboarding assessment, Pomodoro Battle System, and RPG progression engine'
        },
        {
          name: 'Systems Architecture',
          description: 'Translates RPG mechanics into scalable systems, ensuring CareerRPG\'s game-inspired features are deeply immersive yet technically robust'
        },
        {
          name: 'Interactive Storytelling',
          description: 'Combines technical expertise with creative storytelling, bringing game design principles to professional development'
        },
        {
          name: 'Gaming Culture',
          description: 'Avid gamer and critic with Minecraft and Genshin Impact shaping his creative instincts and passion for interactive worlds'
        }
      ]
    },
    // {
    //   name: 'Marcus Rodriguez',
    //   role: 'Head of Product',
    //   neuroclass: 'Obsidia',
    //   roleType: 'Mage',
    //   bio: 'Former Principal PM at Amazon with expertise in gamification and user experience. Architect of the CareerRPG platform.',
    //   specialties: ['Product Design', 'System Architecture', 'User Research']
    // },
    // {
    //   name: 'Dr. Maya Patel',
    //   role: 'Head of Research',
    //   neuroclass: 'Aureus',
    //   roleType: 'Assassin',
    //   bio: 'Research scientist with PhD in Organizational Psychology. Published 50+ papers on cognitive diversity and team performance.',
    //   specialties: ['Research Methodology', 'Data Science', 'Organizational Psychology']
    // },
    // {
    //   name: 'Jennifer Kim',
    //   role: 'Head of Growth',
    //   neuroclass: 'Crimsonix',
    //   roleType: 'Warrior',
    //   bio: 'Growth leader who scaled three startups from 0 to $100M+. Expert in performance marketing and community building.',
    //   specialties: ['Growth Strategy', 'Marketing', 'Community Building']
    // },
    // {
    //   name: 'Alex Thompson',
    //   role: 'Head of Design',
    //   neuroclass: 'Solara',
    //   roleType: 'Archer',
    //   bio: 'Award-winning designer with 12+ years creating delightful user experiences. Previously Design Director at Airbnb.',
    //   specialties: ['UX Design', 'Brand Identity', 'Design Systems']
    // },
    // {
    //   name: 'Lisa Chang',
    //   role: 'Head of People',
    //   neuroclass: 'Azura',
    //   roleType: 'Healer',
    //   bio: 'People operations expert who built high-performance cultures at Netflix and Spotify. Champion of psychological safety.',
    //   specialties: ['Culture Development', 'Team Building', 'Leadership Coaching']
    // }
  ];

  const values = [
    {
      title: 'Cognitive Diversity',
      description: 'We believe every thinking style brings unique value. True innovation emerges when different minds collaborate.',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Growth Through Play',
      description: 'Learning should be engaging and fun. We gamify professional development to make growth irresistible.',
      icon: GameController,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Gaming Philosophy',
      description: 'How you play games is how you do everything. Your approach to challenges, strategy, and collaboration in games reflects your professional potential.',
      icon: Crown,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Science-Backed',
      description: 'Every feature is grounded in research. We combine rigorous science with intuitive design for maximum impact.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Continuous Evolution',
      description: 'We embrace change and iteration. Like a great game, we constantly improve based on user feedback and emerging insights.',
      icon: Lightning,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Human-Centered',
      description: 'Technology serves humanity, not the other way around. We design for human flourishing and authentic connection.',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Research Foundation',
      description: 'Fiz begins research on cognitive diversity in Malaysia tech teams.',
      icon: Lightbulb
    },
    {
      year: '2025',
      title: 'Company Founded',
      description: 'CareerRPG incorporated with initial team of 3. First prototype developed.',
      icon: Rocket
    },
    {
      year: '2025',
      title: 'Beta Launch',
      description: 'Closed beta with 500 users validates core concept. Neuroclass framework refined.',
      icon: Users
    },
    {
      year: '2026',
      title: 'Public Launch',
      description: 'Platform opens to public. X+ professionals discover their Neuroclass.',
      icon: Star
    },
    {
      year: '2026+',
      title: 'Global Expansion',
      description: 'International rollout planned. Enterprise solutions and advanced features coming.',
      icon: Crown
    }
  ];

  const stats = [
    { label: 'Professionals Served', value: '25,000+', icon: Users },
    { label: 'Companies Using CareerRPG', value: '500+', icon: Shield },
    { label: 'Career Transformations', value: '12,000+', icon: Trophy },
    { label: 'Avg. Performance Increase', value: '34%', icon: Lightning }
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
              <Heart size={16} className="mr-2" weight="duotone" />
              About CareerRPG
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Transforming Work Into
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Epic Quests</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-3xl mx-auto mb-12"
            >
              We&apos;re building the future of professional development, where understanding your cognitive wiring 
              unlocks your true potential and makes career growth an engaging adventure.
            </motion.p>

            {/* Stats */}
            {/* <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, index) => (
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
            </motion.div> */}
          </div>
        </motion.section>

        {/* Navigation Tabs */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-purple-200">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'mission', label: 'Our Mission', icon: Target },
                { id: 'story', label: 'Our Story', icon: Fire },
                { id: 'team', label: 'Our Team', icon: Users },
                { id: 'values', label: 'Our Values', icon: Heart }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  <tab.icon size={18} className="mr-2" weight={activeSection === tab.id ? 'bold' : 'regular'} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        {activeSection === 'mission' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Unlock human potential through cognitive understanding and gamified growth
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Why CareerRPG Exists
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Traditional career development treats everyone the same. One-size-fits-all training, 
                    generic advice, and outdated approaches that ignore how uniquely our minds work.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We believe that understanding your cognitive wiring, your Neuroclass, is the key to 
                    unlocking extraordinary performance. When you know how you think, you can choose 
                    how you grow.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    By gamifying this journey, we make professional development engaging, measurable, 
                    and deeply personal. Because when growth feels like an adventure, you never stop leveling up.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Personalized Growth', icon: Target, color: 'from-purple-500 to-indigo-500' },
                  { title: 'Engaging Experience', icon: GameController, color: 'from-blue-500 to-cyan-500' },
                  { title: 'Scientific Foundation', icon: Brain, color: 'from-emerald-500 to-teal-500' },
                  { title: 'Measurable Results', icon: Trophy, color: 'from-orange-500 to-red-500' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 text-center"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                      <item.icon size={32} className="text-white" weight="duotone" />
                    </div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Story Section */}
        {activeSection === 'story' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From research lab to global platform—the journey of CareerRPG
              </p>
            </div>

            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-purple-500 to-blue-500 h-full"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center z-10">
                      <milestone.icon size={28} className="text-white" weight="duotone" />
                    </div>
                    
                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200">
                        <div className="text-lg font-bold text-purple-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                        <p className="text-slate-600">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Team Section */}
        {activeSection === 'team' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A diverse group of thinkers, builders, and dreamers united by our mission to transform work
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300"
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-white" weight="duotone" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                    
                    {/* Neuroclass & Role */}
                    <div className="flex justify-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {member.neuroclass}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {member.roleType}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  {/* Specialties */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-900">Specialties:</h4>
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-xs font-medium text-slate-900">{specialty.name}</div>
                        <div className="text-xs text-slate-600 leading-relaxed">{specialty.description}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Values Section */}
        {activeSection === 'values' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The principles that guide everything we do at CareerRPG
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                    <value.icon size={32} className="text-white" weight="duotone" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mt-20">
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
              Ready to Join the Quest?
            </h2>
            
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Discover your Neuroclass, choose your Role, and embark on a career adventure like no other. 
              Your epic professional journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Brain size={20} className="inline mr-2" weight="bold" />
                Take Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                <Users size={20} className="inline mr-2" weight="bold" />
                Join Our Community
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
