'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Envelope, 
  Phone,
  MapPin,
  Clock,
  PaperPlaneTilt,
  ChatCircle,
  Question,
  Handshake,
  Users,
  Newspaper,
  CheckCircle,
  TwitterLogo,
  LinkedinLogo,
  DiscordLogo
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const contactReasons = [
    {
      id: 'general',
      title: 'General Inquiry',
      description: 'Questions about CareerRPG platform and features',
      icon: Question,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'partnership',
      title: 'Partnership',
      description: 'Interested in partnering with CareerRPG',
      icon: Handshake,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Sales',
      description: 'Team or company implementation discussions',
      icon: Users,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'media',
      title: 'Media & Press',
      description: 'Press inquiries, interviews, and media requests',
      icon: Newspaper,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const contactInfo = [
    {
      title: 'Email Us',
      value: 'hello@careerrpg.com',
      icon: Envelope,
      action: 'mailto:hello@careerrpg.com'
    },
    {
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      icon: Phone,
      action: 'tel:+15551234567'
    },
    {
      title: 'Visit Us',
      value: 'San Francisco, CA',
      icon: MapPin,
      action: null
    },
    {
      title: 'Support Hours',
      value: 'Mon-Fri, 9AM-6PM PST',
      icon: Clock,
      action: null
    }
  ];

  const socialLinks = [
    {
      platform: 'Twitter',
      handle: '@CareerRPG',
      icon: TwitterLogo,
      url: 'https://twitter.com/careerrpg',
      color: 'from-blue-400 to-blue-600'
    },
    {
      platform: 'LinkedIn',
      handle: 'CareerRPG',
      icon: LinkedinLogo,
      url: 'https://linkedin.com/company/careerrpg',
      color: 'from-blue-600 to-blue-800'
    },
    {
      platform: 'Discord',
      handle: 'CareerRPG Community',
      icon: DiscordLogo,
      url: 'https://discord.gg/careerrpg',
      color: 'from-indigo-500 to-purple-600'
    }
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
              <ChatCircle size={16} className="mr-2" weight="duotone" />
              Get In Touch
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Let&apos;s Start a
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Conversation</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Have questions about CareerRPG? Want to explore partnerships? 
              Need enterprise solutions? We&apos;d love to hear from you.
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Reasons */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What can we help you with?</h2>
            <p className="text-xl text-slate-600">Choose the option that best describes your inquiry</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactReasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setFormData({...formData, subject: reason.id})}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                  formData.subject === reason.id
                    ? 'border-emerald-300 shadow-lg scale-105'
                    : 'border-slate-200 hover:border-emerald-200 hover:shadow-md'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mx-auto mb-4`}>
                  <reason.icon size={32} className="text-white" weight="duotone" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">{reason.title}</h3>
                <p className="text-sm text-slate-600 text-center">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <PaperPlaneTilt size={20} className="inline mr-2" weight="bold" />
                      Send Message
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-white" weight="duotone" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h4>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300"
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <info.icon size={20} className="text-white" weight="duotone" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-600">{info.title}</div>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-slate-900 font-semibold hover:text-emerald-600 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-slate-900 font-semibold">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Follow us</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center p-4 rounded-xl border border-slate-200 hover:border-emerald-200 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center mr-4`}>
                        <social.icon size={20} className="text-white" weight="duotone" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                          {social.platform}
                        </div>
                        <div className="text-sm text-slate-600">{social.handle}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-6 border border-emerald-200">
                <h4 className="font-bold text-emerald-800 mb-2">Quick Response Promise</h4>
                <p className="text-emerald-700 text-sm">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
