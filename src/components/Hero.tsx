'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowDown, Sparkle, X } from 'phosphor-react';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50/30 overflow-hidden py-20">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/careerrpgbg.mp4" type="video/mp4" />
        </video>
        {/* Overlay to maintain readability */}
        <div className="absolute inset-0 bg-gradient-to-b"></div>
      </div>

     

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-50/95 to-blue-50/95 border border-emerald-100/80 rounded-full backdrop-blur-md shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Trophy className="w-5 h-5 text-emerald-600 mr-3" />
              <span className="text-emerald-700 font-medium text-sm tracking-wider">EARLY ACCESS • LAUNCHING 2026</span>
            </motion.div>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Gamify Your Career Growth
            <br />
            <span className="bg-gradient-to-r from-emerald-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent relative">
              Unlock your Neuroclass
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-indigo-500/5 rounded-2xl -z-10"></div>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
          >
            The first productivity platform that turns professional development into an engaging RPG experience. 
            <br className="hidden md:block" />
            <span className="text-white/70">Backed by cognitive science, built for Gen Z & Millenials workforce.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => setShowWaitlistModal(true)}
              className="group relative bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10 flex items-center">
                Join the Waitlist
                <Sparkle className="w-4 h-4 ml-2 opacity-75 group-hover:opacity-100 transition-opacity" weight="duotone" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.p 
              className="text-sm text-white/60 text-center drop-shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
            >
              Early access • Exclusive benefits • Shape the future
            </motion.p>
          </motion.div>

        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity duration-300 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-white/50 mb-3 tracking-widest font-light drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>EXPLORE</span>
        <div className="relative">
          <ArrowDown className="w-5 h-5 text-white/50 drop-shadow-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-full"></div>
        </div>
      </motion.div>

      {/* Waitlist Modal */}
      {showWaitlistModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowWaitlistModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWaitlistModal(false)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-slate-400 hover:text-slate-600 rounded-full p-2 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <X size={20} />
            </button>
            <WaitlistForm />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}