'use client';

import { motion } from 'framer-motion';
import { EnvelopeSimple, TwitterLogo, LinkedinLogo, GithubLogo, Heart } from 'phosphor-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2025;
  const yearDisplay = currentYear === startYear ? startYear : `${startYear} - ${currentYear}`;
  
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
        >
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl mr-3">
                <Image 
                  src="/CareeerrpgIconSquare.png" 
                  alt="CareerRPG Logo" 
                  width={40}
                  height={40}
                  className="rounded-2xl"
                />
              </div>
              <span className="text-2xl font-bold">Career<span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent italic">RPG</span></span>
            </div>         
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your career, gamified as an epic adventure. Discover your strengths, unlock new paths, and level up with every step forward.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-emerald-400 transition-all">
                <TwitterLogo size={20} weight="duotone" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-emerald-400 transition-all">
                <LinkedinLogo size={20} weight="duotone" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-emerald-400 transition-all">
                <GithubLogo size={20} weight="duotone" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-emerald-400 transition-all">
                <EnvelopeSimple size={20} weight="duotone" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Product</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
              <li><a href="/assessment" className="hover:text-emerald-400 transition-colors">Assessment</a></li>
            </ul>
          </div>

          {/* neuroclass */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">neuroclass</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#neuroclass" className="hover:text-emerald-400 transition-colors">Overview</a></li>
              <li><a href="/neuroclass/lumina" className="hover:text-emerald-400 transition-colors">The Visioneer</a></li>
              <li><a href="/neuroclass/crimsonix" className="hover:text-emerald-400 transition-colors">The Executor</a></li>
              <li><a href="/neuroclass/azura" className="hover:text-emerald-400 transition-colors">The Empath</a></li>
              <li><a href="/roles" className="hover:text-emerald-400 transition-colors">All Roles</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="/blog" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="/guide" className="hover:text-emerald-400 transition-colors">Career Guide</a></li>
              <li><a href="/careers" className="hover:text-emerald-400 transition-colors">Career Paths</a></li>
              <li><a href="/help" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#community" className="hover:text-emerald-400 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="/company/careers" className="hover:text-emerald-400 transition-colors">Join Our Team</a></li>
              <li><a href="/press" className="hover:text-emerald-400 transition-colors">Press</a></li>
              <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {yearDisplay} Career<span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent italic">RPG</span>. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Made with <Heart size={16} weight="fill" className="text-emerald-400 inline mx-1" /> for the future of work
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
