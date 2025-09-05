'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EnvelopeSimple, CheckCircle, CircleNotch } from 'phosphor-react';

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store in localStorage for demo purposes
    const waitlistEntries = JSON.parse(localStorage.getItem('waitlist') || '[]');
    waitlistEntries.push({
      ...data,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('waitlist', JSON.stringify(waitlistEntries));
    
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto border border-slate-200 shadow-2xl shadow-emerald-500/10"
      >
        <div className="text-center">
          <CheckCircle size={64} className="text-emerald-500 mx-auto mb-4" weight="duotone" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Welcome to the Circle!</h3>
          <p className="text-slate-600 mb-6">
            You&apos;re in! We&apos;ll send you exclusive updates, early access invitations, and founding member perks as we build the future of professional development.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
          >
            Refer a colleague
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto border border-slate-200 shadow-2xl shadow-emerald-500/10"
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl mx-auto mb-4">
          <EnvelopeSimple size={24} className="text-emerald-600" weight="duotone" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Join the Founders Circle</h3>
        <p className="text-slate-600">
          Get early access, shape the future of work, and unlock exclusive founding member benefits
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        

        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-emerald-500/25 animate-pulse-glow"
        >
          {isLoading ? (
            <>
              <CircleNotch size={20} className="mr-2 animate-spin" weight="duotone" />
              Embarking on Quest...
            </>
          ) : (
            'Join Waitlist for Early Access'
          )}
        </button>
      </form>

      <p className="text-slate-500 text-sm text-center mt-4">
        No spam, ever. Unsubscribe anytime.
      </p>
    </motion.div>
  );
}
