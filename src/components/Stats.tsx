'use client';

import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { 
      number: "35", 
      label: "Questions", 
      subtitle: "Cognitive Assessment", 
      color: "emerald",
      icon: "🧠"
    },
    { 
      number: "7", 
      label: "Neuroclasses", 
      subtitle: "Cognitive Archetypes", 
      color: "blue",
      icon: "🎯"
    },
    { 
      number: "5", 
      label: "Mastery Levels", 
      subtitle: "Novice → Legend", 
      color: "indigo",
      icon: "⚡"
    },
    { 
      number: "∞", 
      label: "Possibilities", 
      subtitle: "Career Paths", 
      color: "purple",
      icon: "🚀"
    }
  ];

  const neuroclasses = [
    { 
      name: "Lumina", 
      title: "The Visioneer",
      description: "Visionary, big-picture, future-focused, strategic thinking. Naturally connects abstract ideas into comprehensive frameworks.",
      color: "#FFFFFF", 
      bgColor: "bg-gray-50", 
      hoverColor: "hover:bg-gray-100" 
    },
    { 
      name: "Crimsonix", 
      title: "The Executor",
      description: "Action-driven, decisive, goal-focused, momentum-oriented. Thrives on deadlines and clear targets with rapid execution.",
      color: "#D63031", 
      bgColor: "bg-red-50", 
      hoverColor: "hover:bg-red-100" 
    },
    { 
      name: "Azura", 
      title: "The Empath",
      description: "Emotionally intuitive, harmony-seeking, relationally driven. Values emotional safety and deep understanding in all interactions.",
      color: "#74B9FF", 
      bgColor: "bg-blue-50", 
      hoverColor: "hover:bg-blue-100" 
    },
    { 
      name: "Obsidia", 
      title: "The Architect",
      description: "Systems thinker, structured, analytical, optimizer. Creates logical frameworks and notices patterns others miss.",
      color: "#6C5CE7", 
      bgColor: "bg-purple-50", 
      hoverColor: "hover:bg-purple-100" 
    },
    { 
      name: "Solara", 
      title: "The Artisan",
      description: "Expressive, experimental, aesthetic, creative-first. Values uniqueness and personal flair in all creative endeavors.",
      color: "#FFA502", 
      bgColor: "bg-orange-50", 
      hoverColor: "hover:bg-orange-100" 
    },
    { 
      name: "Aureus", 
      title: "The Seeker",
      description: "Curious, fast learner, knowledge-driven, flexible. Constantly seeks new ideas and adapts quickly to unfamiliar situations.",
      color: "#55EFC4", 
      bgColor: "bg-emerald-50", 
      hoverColor: "hover:bg-emerald-100" 
    },
    { 
      name: "Noxion", 
      title: "The Challenger",
      description: "Protective, principled, critical, boundary enforcer. Stands up for beliefs and protects systems from potential harm.",
      color: "#2D3436", 
      bgColor: "bg-slate-50", 
      hoverColor: "hover:bg-slate-100" 
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-100 via-purple-100 to-cyan-100 overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_theme(colors.indigo.300/40)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_theme(colors.purple.300/35)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_theme(colors.cyan.200/30)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Main Stats Grid */}
        <motion.div 
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25,
                  delay: index * 0.15 
                }}
                viewport={{ once: true }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-100/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
                
                {/* Card */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-lg shadow-slate-200/30 group-hover:shadow-xl group-hover:shadow-slate-300/40 transition-all duration-500">
                  {/* Icon */}
                  
                  
                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-2 leading-none">
                    {item.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-lg font-semibold text-slate-800 mb-1">
                    {item.label}
                  </div>
                  
                  {/* Subtitle */}
                  <div className="text-sm text-slate-600 font-medium tracking-wide">
                    {item.subtitle}
                  </div>
                  
                  {/* Accent line */}
                  <div className={`w-12 h-0.5 bg-gradient-to-r from-${item.color}-500 to-${item.color}-700 mt-4 opacity-70 group-hover:opacity-100 group-hover:w-16 transition-all duration-300`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Neuroclasses Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Section header */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center p-3 mb-6 bg-gradient-to-r from-slate-100 to-blue-50 rounded-full border border-slate-200/50"
            >
              <span className="text-xs font-bold text-slate-700 tracking-[0.15em] uppercase">
                Discover Your Neuroclass™
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed"
            >
              Each neuroclass represents a unique cognitive archetype with distinct strengths and characteristics
            </motion.p>
          </div>

          {/* Neuroclasses grid */}
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {neuroclasses.map((neuroclass, index) => (
              <motion.a
                key={index}
                href={`/neuroclasses/${neuroclass.name.toLowerCase()}`}
                className={`group relative overflow-hidden block cursor-pointer`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  delay: index * 0.08 
                }}
                viewport={{ once: true }}
              >
                <div className={`relative ${neuroclass.bgColor} ${neuroclass.hoverColor} border border-white/60 rounded-2xl transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm group-hover:border-white/80 overflow-hidden group-hover:pb-32`}>
                  {/* Main content - always visible */}
                  <div className="p-6 min-w-[120px] h-[120px] flex flex-col items-center justify-center">
                    {/* Color indicator */}
                    <div 
                      className="w-5 h-5 rounded-full mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: neuroclass.color }}
                    />
                    
                    {/* Name */}
                    <span className="block text-sm font-semibold text-slate-800 tracking-wide text-center">
                      {neuroclass.name}
                    </span>
                  </div>
                  
                  {/* Expandable hover section with description */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-white/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="p-4 text-center">
                      <div className="text-xs font-semibold text-slate-700 mb-2 tracking-wide">
                        {neuroclass.title}
                      </div>
                      <div className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {neuroclass.description}
                      </div>
                      <div className="text-xs text-slate-500 mt-2 font-medium">
                        Click to learn more
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover glow */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
                    style={{ backgroundColor: neuroclass.color }}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
