'use client';

import { motion } from 'framer-motion';
import { Star, Quotes } from 'phosphor-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Product Manager',
    company: 'TechFlow Inc.',
    avatar: '👩‍💼',
    neuroclass: 'Lumina',
    quote: 'Finally, a productivity system that actually understands how I think. The Neuroclass assessment was eerily accurate, and the Pomodungeon sessions make deep work genuinely enjoyable.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Full-Stack Developer',
    company: 'StartupLab',
    avatar: '👨‍💻',
    neuroclass: 'Obsidia',
    quote: 'As someone who loves both gaming and coding, CareerRPG hits the perfect sweet spot. My focus sessions have improved 300% since I started treating them like dungeon raids.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'UX Design Lead',
    company: 'Creative Studios',
    avatar: '🎨',
    neuroclass: 'Solara',
    quote: 'The persona system is brilliant. Having different characters for different projects helps me context-switch naturally. My team productivity has never been higher.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Engineering Manager',
    company: 'Scale Dynamics',
    avatar: '👨‍🔬',
    neuroclass: 'Crimsonix',
    quote: 'CareerRPG transformed how our team collaborates. The Guild system helped us understand our cognitive diversity and optimize our project assignments.',
    rating: 5,
  },
];

const companyLogos = [
  { name: 'Google', logo: '🔍' },
  { name: 'Microsoft', logo: '🪟' },
  { name: 'Apple', logo: '🍎' },
  { name: 'Meta', logo: '👥' },
  { name: 'Netflix', logo: '🎬' },
  { name: 'Spotify', logo: '🎵' },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* <p className="text-slate-500 font-medium mb-8">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((item) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="font-semibold text-lg">{company.name}</span>
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-full mb-6">
            <span className="text-slate-600 font-medium text-sm tracking-wide">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Trusted by Professionals
            <br />
            <span className="text-slate-600">Across Every Industry</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            See how CareerRPG is transforming the way modern professionals approach 
            productivity, skill development, and career growth.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-6">
                <Quotes size={32} className="text-emerald-500 opacity-60" weight="duotone" />
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400" weight="fill" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="text-slate-700 leading-relaxed mb-6 font-light text-lg">
                &quot;{item.quote}&quot;
              </blockquote>

              {/* Author info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full flex items-center justify-center text-2xl">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="text-slate-600 text-sm">{item.role}</div>
                    <div className="text-slate-500 text-xs">{item.company}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 mb-1">Neuroclass</div>
                  <div className="text-sm font-medium text-emerald-600">{item.neuroclass}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all testimonials CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-full hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/50 hover:-translate-y-0.5">
            View All Testimonials
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-emerald-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">94%</div>
              <div className="text-slate-600 font-medium">Improved Focus</div>
              <div className="text-slate-500 text-sm">Within first week</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">3.2x</div>
              <div className="text-slate-600 font-medium">Productivity Boost</div>
              <div className="text-slate-500 text-sm">Average increase</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">89%</div>
              <div className="text-slate-600 font-medium">Career Clarity</div>
              <div className="text-slate-500 text-sm">After Neuroclass assessment</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">4.9★</div>
              <div className="text-slate-600 font-medium">User Rating</div>
              <div className="text-slate-500 text-sm">From 2,000+ reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
