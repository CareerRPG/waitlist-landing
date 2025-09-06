'use client';

import { motion } from 'framer-motion';
import { UsersThree, ChatCircle, Trophy, Star, Users,  } from 'phosphor-react';

const stats = [
  {
    icon: UsersThree,
    number: '10K+',
    label: 'Active Adventurers',
    description: 'Professionals leveling up their careers',
  },
  {
    icon: Trophy,
    number: '1M+',
    label: 'Quests Completed',
    description: 'Real-world tasks gamified',
  },
  {
    icon: Star,
    number: '500+',
    label: 'Domain Masters',
    description: 'Professionals reaching Legend status',
  },
  {
    icon: ChatCircle,
    number: '7/7',
    label: 'neuroclass',
    description: 'All cognitive types represented',
  },
];

export default function Community() {
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-full mb-6">
            <span className="text-slate-600 font-medium text-sm tracking-wide">COMMUNITY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Join a Thriving
            <br />
            <span className="text-slate-600">Guild of Professionals</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Connect with like-minded professionals, share your achievements, and grow together 
            in an environment designed for cognitive diversity and collaboration.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={32} className="text-emerald-600" weight="duotone" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{item.number}</div>
              <div className="text-lg font-semibold text-slate-700 mb-1">{item.label}</div>
              <div className="text-sm text-slate-500">{item.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-b from-emerald-50 to-emerald-100/50 rounded-3xl p-8 border border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-2xl mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Guild System</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Form teams with complementary neuroclass for enhanced collaboration and shared quest progression.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-3xl p-8 border border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-2xl mb-6">
              <ChatCircle size={24} className="text-white" weight="duotone" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Knowledge Sharing</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Learn from Domain Masters and share your expertise with newcomers in our collaborative ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-b from-purple-50 to-purple-100/50 rounded-3xl p-8 border border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 rounded-2xl mb-6">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Achievement Sharing</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Celebrate milestones together and get inspired by the career progression of fellow adventurers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
