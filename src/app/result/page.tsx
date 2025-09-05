'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Brain, 
  Lightning, 
  Heart, 
  Gear, 
  Palette, 
  MagnifyingGlass, 
  Shield,
  Briefcase,
  Crown,
  Sparkle,
  Star,
  Share,
  Download,
  Copy,
  CheckCircle,
  TwitterLogo,
  LinkedinLogo,
  FacebookLogo,
  InstagramLogo,
  Image as ImageIcon,
  DeviceMobile,
  Fire
} from 'phosphor-react';
import { ShareableCard } from '../../components/ShareableCard';
import { shareToInstagramStory, saveToGallery, isMobileDevice } from '../../utils/shareUtils';

interface IconProps {
  size?: number;
  className?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  color?: string;
}

interface NeuroClassResult {
  id: string;
  name: string;
  title: string;
  motto: string;
  description: string;
  workStyle: string[];
  synergy: string;
  rarityScore: number;
  icon: React.ComponentType<IconProps>;
  color: string;
  gradient: string;
  bgAnimation: string;
  careers: string[];
}

const neuroclassResults: Record<string, NeuroClassResult> = {
  lumina: {
    id: 'lumina',
    name: 'LUMINA',
    title: 'THE VISIONEER',
    motto: 'The future is a canvas, and I hold the brush.',
    description: 'You are a Dreamer and Innovator, a beacon of possibility. Your mind naturally connects disparate ideas into grand, strategic frameworks, allowing you to see the path forward where others only see the present.',
    workStyle: [
      'I architect the future with big-picture, strategic thinking.',
      'I innovate beyond the obvious by connecting abstract concepts into tangible strategies.',
      'I inspire a shared vision that motivates and aligns teams.'
    ],
    synergy: 'Complements the decisive action of a CRIMSONIX (Executor) and the systemic thinking of an OBSIDIA (Architect).',
    rarityScore: 8,
    icon: Lightning,
    color: '#D9DDDC',
    gradient: 'from-gray-400 via-gray-500 to-gray-600',
    bgAnimation: 'animate-pulse',
    careers: ['CEO', 'Product Manager', 'Strategy Consultant', 'Venture Capitalist', 'Chief Innovation Officer', 'Design Thinking Facilitator']
  },
  crimsonix: {
    id: 'crimsonix',
    name: 'CRIMSONIX',
    title: 'THE EXECUTOR',
    motto: 'Action defines reality.',
    description: 'You are a Doer and Enforcer, a force of momentum. You thrive on clear targets and tight deadlines, turning plans into tangible results through decisive and rapid execution.',
    workStyle: [
      'I am relentlessly goal-focused and results-driven.',
      'I excel at driving momentum and executing on clear targets.',
      'I make decisions quickly to maintain forward progress.'
    ],
    synergy: 'Empowers the grand plans of a LUMINA (Visioneer) and is supported by the relational harmony of an AZURA (Empath).',
    rarityScore: 15,
    icon: Fire,
    color: '#D63031',
    gradient: 'from-red-500 via-red-600 to-red-700',
    bgAnimation: 'animate-bounce',
    careers: ['Sales Director', 'Operations Manager', 'Project Manager', 'Account Executive', 'Team Lead', 'Performance Coach']
  },
  azura: {
    id: 'azura',
    name: 'AZURA',
    title: 'THE EMPATH',
    motto: 'Connection is our greatest strength.',
    description: 'You are a Healer and Connector, the heart of any team. You are emotionally intuitive and relationally driven, creating psychological safety and fostering deep, collaborative understanding in every interaction.',
    workStyle: [
      'I build bridges between people and ideas through empathetic communication.',
      'I am driven to create harmony and emotional safety in team environments.',
      'I intuitively understand group dynamics and unspoken needs.'
    ],
    synergy: 'Nurtures the creative expression of a SOLARA (Artisan) and provides crucial support to a results-driven CRIMSONIX (Executor).',
    rarityScore: 18,
    icon: Heart,
    color: '#74B9FF',
    gradient: 'from-blue-400 via-blue-500 to-blue-600',
    bgAnimation: 'animate-pulse',
    careers: ['Human Resources', 'Therapist', 'Customer Success Manager', 'Social Worker', 'Team Facilitator', 'Community Manager']
  },
  obsidia: {
    id: 'obsidia',
    name: 'OBSIDIA',
    title: 'THE ARCHITECT',
    motto: 'Structure creates freedom.',
    description: 'You are a Strategist and Optimizer, a master of systems. You see the underlying patterns and logical frameworks that others miss, allowing you to build, refine, and perfect complex processes with analytical precision.',
    workStyle: [
      'I am a systematic thinker who thrives on analytical challenges.',
      'I create order from chaos by designing logical frameworks and processes.',
      'I excel at identifying patterns and optimizing for efficiency.'
    ],
    synergy: 'Provides the essential framework for a LUMINA\'s (Visioneer) ideas and channels the boundless curiosity of an AUREUS (Seeker).',
    rarityScore: 12,
    icon: Gear,
    color: '#6C5CE7',
    gradient: 'from-purple-500 via-purple-600 to-purple-700',
    bgAnimation: 'animate-spin',
    careers: ['Software Engineer', 'Data Scientist', 'Business Analyst', 'Systems Architect', 'Process Engineer', 'Financial Analyst']
  },
  solara: {
    id: 'solara',
    name: 'SOLARA',
    title: 'THE ARTISAN',
    motto: 'Create your own signal.',
    description: 'You are a Creator and Expressor, a conduit for new aesthetics. You are driven by a creative-first mindset, valuing uniqueness, experimentation, and personal flair to bring ideas to life in a way that captures attention.',
    workStyle: [
      'I am expressive and experimental in my approach to all challenges.',
      'I prioritize unique aesthetics and creative flair in my work.',
      'I excel at brand strategy, content creation, and design thinking.'
    ],
    synergy: 'Thrives with the emotional support of an AZURA (Empath) and is refined by the structured feedback of an OBSIDIA (Architect).',
    rarityScore: 13,
    icon: Palette,
    color: '#FFA502',
    gradient: 'from-orange-400 via-orange-500 to-orange-600',
    bgAnimation: 'animate-pulse',
    careers: ['UX Designer', 'Creative Director', 'Content Creator', 'Marketing Manager', 'Brand Strategist', 'Artist']
  },
  aureus: {
    id: 'aureus',
    name: 'AUREUS',
    title: 'THE SEEKER',
    motto: 'Every question is a new door.',
    description: 'You are an Explorer and Learner, an engine of curiosity. You adapt to new situations with remarkable speed, driven by a relentless need to acquire knowledge and seek out novel ideas and solutions.',
    workStyle: [
      'I am endlessly curious and a fast, adaptable learner.',
      'I thrive in unfamiliar situations by constantly seeking new information.',
      'I excel at research, analysis, and exploring new business domains.'
    ],
    synergy: 'Gathers critical information for an OBSIDIA\'s (Architect) systems and challenges the principles of a NOXION (Challenger) with new data.',
    rarityScore: 23,
    icon: MagnifyingGlass,
    color: '#55EFC4',
    gradient: 'from-emerald-400 via-emerald-500 to-emerald-600',
    bgAnimation: 'animate-pulse',
    careers: ['Research Scientist', 'Journalist', 'Consultant', 'Business Development', 'Product Researcher', 'Learning Specialist']
  },
  noxion: {
    id: 'noxion',
    name: 'NOXION',
    title: 'THE CHALLENGER',
    motto: 'Truth is the ultimate shield.',
    description: 'You are a Critic and Truth Seeker, a guardian of integrity. You are fiercely principled and protective, driven to challenge assumptions and enforce boundaries to protect systems, teams, and ideas from potential harm.',
    workStyle: [
      'I operate from a foundation of strong principles and seek the truth in all matters.',
      'I strengthen ideas by playing devil\'s advocate and identifying hidden risks.',
      'I excel at enforcing standards and protecting the integrity of a project or team.'
    ],
    synergy: 'Stress-tests the grand plans of a LUMINA (Visioneer) and provides a grounding reality check for the explorations of an AUREUS (Seeker).',
    rarityScore: 11,
    icon: Shield,
    color: '#2D3436',
    gradient: 'from-gray-600 via-gray-700 to-gray-800',
    bgAnimation: 'animate-pulse',
    careers: ['Quality Assurance', 'Compliance Officer', 'Security Analyst', 'Auditor', 'Risk Manager', 'Legal Counsel']
  }
};

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<NeuroClassResult | null>(null);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [showImageOptions, setShowImageOptions] = useState(false);
  const instagramCardRef = useRef<HTMLDivElement>(null);
  const squareCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const neuroclassId = searchParams.get('neuroclass');
    if (neuroclassId && neuroclassResults[neuroclassId]) {
      setResult(neuroclassResults[neuroclassId]);
    } else {
      // Default to lumina if no valid neuroclass provided
      setResult(neuroclassResults.lumina);
    }
    
    // Simulate loading animation
    setTimeout(() => setIsLoading(false), 1500);
  }, [searchParams]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = result ? 
    `I just discovered my Professional Archetype: ${result.name} - ${result.title}! ${result.motto} Find out yours at careerrpg.app` : 
    'Discover your Professional Archetype at careerrpg.app';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleShare = (platform: string) => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);
    
    let shareLink = '';
    
    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'instagram':
        // Show image sharing options instead
        setShowImageOptions(true);
        return;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  const handleInstagramStoryShare = async () => {
    if (!instagramCardRef.current || !result) return;
    
    setIsGeneratingImage(true);
    try {
      await shareToInstagramStory(instagramCardRef.current);
    } catch (error) {
      console.error('Error sharing to Instagram:', error);
      alert('Unable to share to Instagram. The image has been saved to your device instead.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleSaveToGallery = async (forInstagram: boolean = false) => {
    const cardRef = forInstagram ? instagramCardRef.current : squareCardRef.current;
    if (!cardRef || !result) {
      console.error('Card reference or result not found:', { cardRef, result });
      alert('Unable to find card element. Please try again.');
      return;
    }
    
    console.log('Starting image generation...', {
      element: cardRef,
      dimensions: {
        offsetWidth: cardRef.offsetWidth,
        offsetHeight: cardRef.offsetHeight,
        scrollWidth: cardRef.scrollWidth,
        scrollHeight: cardRef.scrollHeight
      },
      forInstagram
    });
    
    setIsGeneratingImage(true);
    try {
      await saveToGallery(cardRef, forInstagram);
      console.log('Image generation completed successfully');
    } catch (error) {
      console.error('Error saving image:', error);
      alert(`Unable to save image: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full mx-auto mb-4"
          />
          <p className="text-white/80 text-lg">Revealing your Professional Archetype...</p>
        </motion.div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-xl mb-4">Unable to load your result</p>
          <button 
            onClick={() => router.push('/assessment')}
            className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Take Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${result.gradient} relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full ${result.bgAnimation}`} />
        <div className={`absolute top-1/3 right-20 w-24 h-24 bg-white/5 rounded-full ${result.bgAnimation}`} style={{ animationDelay: '0.5s' }} />
        <div className={`absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full ${result.bgAnimation}`} style={{ animationDelay: '1s' }} />
        <div className={`absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full ${result.bgAnimation}`} style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 min-h-screen p-3 md:p-4 lg:p-6 flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full flex flex-col"
        >
          {/* Separated Header Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/95 backdrop-blur-lg rounded-2xl p-3 md:p-5 shadow-xl border border-white/20 flex flex-col items-center justify-center mb-3 md:mb-4"
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 md:w-18 md:h-18 rounded-xl bg-gradient-to-br ${result.gradient} mb-2 md:mb-3 shadow-lg`}>
              <result.icon size={28} className="text-white md:hidden" weight="duotone" />
              <result.icon size={36} className="text-white hidden md:block" weight="duotone" />
            </div>
            <p className="text-xs font-medium text-slate-600 mb-1 tracking-wider uppercase">
              Your Neuroclass is:
            </p>
            <h1 className="text-xl md:text-3xl font-bold text-slate-900 mb-1">
              {result.name}
            </h1>
            <h2 className="text-base md:text-xl font-semibold text-slate-700 mb-2">
              {result.title}
            </h2>
            <p className="text-sm md:text-base italic text-slate-600 font-medium text-center">
              &quot;{result.motto}&quot;
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 grid-rows-8 md:grid-rows-6 gap-2 md:gap-3 mb-4">

            {/* Description Card - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="col-span-12 md:col-span-6 row-span-3 bg-white/95 backdrop-blur-lg rounded-2xl p-3 md:p-4 shadow-xl border border-white/20"
            >
              <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-2 md:mb-3 flex items-center">
                <Brain size={16} className="mr-2 text-indigo-600 md:hidden" weight="duotone" />
                <Brain size={20} className="mr-2 text-indigo-600 hidden md:block" weight="duotone" />
                About You
              </h3>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                {result.description}
              </p>
            </motion.div>

            {/* Work Style Card - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="col-span-12 md:col-span-6 row-span-3 bg-white/95 backdrop-blur-lg rounded-2xl p-3 md:p-4 shadow-xl border border-white/20"
            >
              <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-2 md:mb-3 flex items-center">
                <Lightning size={16} className="mr-2 text-purple-600 md:hidden" weight="duotone" />
                <Lightning size={20} className="mr-2 text-purple-600 hidden md:block" weight="duotone" />
                My Work Style
              </h3>
              <div className="space-y-1 md:space-y-2">
                {result.workStyle.map((style, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-purple-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0" />
                    <p className="text-slate-700 text-xs md:text-sm leading-relaxed">{style}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Career Paths Card - Left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="col-span-12 md:col-span-4 row-span-3 bg-white/95 backdrop-blur-lg rounded-2xl p-3 md:p-4 shadow-xl border border-white/20 flex flex-col overflow-hidden"
            >
              <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-2 md:mb-3 flex items-center flex-shrink-0">
                <Briefcase size={16} className="mr-2 text-indigo-600 md:hidden" weight="duotone" />
                <Briefcase size={20} className="mr-2 text-indigo-600 hidden md:block" weight="duotone" />
                Career Paths
              </h3>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 gap-1 md:gap-2">
                  {result.careers.map((career, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + idx * 0.05, duration: 0.5 }}
                      className="text-xs md:text-sm font-medium text-slate-700 px-2 md:px-3 py-1 md:py-2 bg-slate-100/80 rounded-lg border border-slate-200 hover:bg-slate-200/80 transition-colors"
                    >
                      {career}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Synergy Matrix Card - Center Left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="col-span-12 md:col-span-5 row-span-3 bg-white/95 backdrop-blur-lg rounded-2xl p-3 md:p-4 shadow-xl border border-white/20"
            >
              <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-2 flex items-center">
                <Heart size={16} className="mr-2 text-pink-600 md:hidden" weight="duotone" />
                <Heart size={20} className="mr-2 text-pink-600 hidden md:block" weight="duotone" />
                Synergy Matrix
              </h3>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                {result.synergy}
              </p>
            </motion.div>

            {/* Share Actions Card - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="col-span-12 md:col-span-3 row-span-3 bg-white/95 backdrop-blur-lg rounded-2xl p-3 shadow-xl border border-white/20 flex flex-col"
            >
              <motion.button
                onClick={() => setShowShareOptions(!showShareOptions)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-gradient-to-r ${result.gradient} text-white font-bold px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-2 flex items-center justify-center text-xs md:text-sm`}
              >
                <Share size={14} className="mr-1 md:mr-2 md:hidden" weight="duotone" />
                <Share size={16} className="mr-1 md:mr-2 hidden md:block" weight="duotone" />
                Share
              </motion.button>

              <div className="flex flex-col gap-1 md:gap-2 flex-1">
                <motion.button
                  onClick={() => router.push('/assessment')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-900 text-white font-semibold px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors text-xs md:text-sm flex-1"
                >
                  Take Assessment
                </motion.button>
                
                <motion.button
                  onClick={() => router.push('/')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-slate-300 text-slate-700 font-semibold px-3 py-2 rounded-lg hover:border-slate-400 hover:text-slate-900 transition-colors text-xs md:text-sm flex-1"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Rarity Breakdown Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="col-span-12 row-span-1 bg-white/95 backdrop-blur-lg rounded-2xl p-2 md:p-3 shadow-xl border border-white/20"
            >
              <div className="flex items-center mb-1 md:mb-2">
                <Crown size={14} className="text-indigo-600 mr-2 md:hidden" weight="duotone" />
                <Crown size={16} className="text-indigo-600 mr-2 hidden md:block" weight="duotone" />
                <span className="text-slate-900 font-bold text-xs md:text-sm">
                  Rarity Distribution
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 text-xs">
                <div className={`text-center px-1 py-0.5 rounded transition-all ${
                  result.name === 'AUREUS' 
                    ? `bg-gradient-to-br ${result.gradient} text-white font-bold shadow-md` 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}>
                  <div className="flex items-center justify-center mb-0.5">
                    <MagnifyingGlass size={10} className="mr-1" weight="duotone" />
                    <span className="font-medium">AUREUS</span>
                  </div>
                  <div className="opacity-90">23%</div>
                </div>
                <div className={`text-center px-1 py-0.5 rounded transition-all ${
                  result.name === 'AZURA' 
                    ? `bg-gradient-to-br ${result.gradient} text-white font-bold shadow-md` 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}>
                  <div className="flex items-center justify-center mb-0.5">
                    <Heart size={10} className="mr-1" weight="duotone" />
                    <span className="font-medium">AZURA</span>
                  </div>
                  <div className="opacity-90">18%</div>
                </div>
                <div className={`text-center px-1 py-0.5 rounded transition-all ${
                  result.name === 'CRIMSONIX' 
                    ? `bg-gradient-to-br ${result.gradient} text-white font-bold shadow-md` 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}>
                  <div className="flex items-center justify-center mb-0.5">
                    <Fire size={10} className="mr-1" weight="duotone" />
                    <span className="font-medium">CRIMSONIX</span>
                  </div>
                  <div className="opacity-90">15%</div>
                </div>
                <div className={`text-center px-1 py-0.5 rounded transition-all ${
                  result.name === 'SOLARA' 
                    ? `bg-gradient-to-br ${result.gradient} text-white font-bold shadow-md` 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}>
                  <div className="flex items-center justify-center mb-0.5">
                    <Palette size={10} className="mr-1" weight="duotone" />
                    <span className="font-medium">SOLARA</span>
                  </div>
                  <div className="opacity-90">13%</div>
                </div>
                <div className={`text-center px-1 py-0.5 rounded transition-all ${
                  result.name === 'OBSIDIA' 
                    ? `bg-gradient-to-br ${result.gradient} text-white font-bold shadow-md` 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}>
                  <div className="flex items-center justify-center mb-0.5">
                    <Gear size={10} className="mr-1" weight="duotone" />
                    <span className="font-medium">OBSIDIA</span>
                  </div>
                  <div className="opacity-90">12%</div>
                </div>
                <div className={`text-center px-1 py-0.5 rounded transition-all ${
                  result.name === 'NOXION' 
                    ? `bg-gradient-to-br ${result.gradient} text-white font-bold shadow-md` 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}>
                  <div className="flex items-center justify-center mb-0.5">
                    <Shield size={10} className="mr-1" weight="duotone" />
                    <span className="font-medium">NOXION</span>
                  </div>
                  <div className="opacity-90">11%</div>
                </div>
                <div className={`text-center px-1 py-0.5 rounded transition-all ${
                  result.name === 'LUMINA' 
                    ? `bg-gradient-to-br ${result.gradient} text-white font-bold shadow-md` 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}>
                  <div className="flex items-center justify-center mb-0.5">
                    <Lightning size={10} className="mr-1" weight="duotone" />
                    <span className="font-medium">LUMINA</span>
                  </div>
                  <div className="opacity-90">8%</div>
                </div>
                <div className="text-center px-1 py-0.5 text-slate-700 font-medium flex items-center justify-center">
                  <Sparkle size={12} className="text-indigo-600" weight="duotone" />
                </div>
              </div>
            </motion.div>

            {/* CTA Text Card - Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="col-span-12 row-span-1 bg-white/80 backdrop-blur-lg rounded-xl p-2 md:p-3 shadow-lg border border-white/20 flex items-center justify-center"
            >
              <p className="text-xs md:text-sm text-slate-600 text-center">
                Discover your professional superpower at{' '}
                <span className="font-semibold text-slate-900">careerrpg.app</span>
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* Share Options Overlay */}
        <AnimatePresence>
            {showShareOptions && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                onClick={() => setShowShareOptions(false)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <motion.button
                      onClick={() => handleShare('twitter')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center p-4 bg-blue-50 rounded-xl border border-blue-200 hover:border-blue-300 hover:bg-blue-100 transition-all duration-200"
                    >
                      <TwitterLogo size={24} className="text-blue-500 mb-2" weight="fill" />
                      <span className="text-sm font-medium text-slate-700">Twitter</span>
                    </motion.button>

                    <motion.button
                      onClick={() => handleShare('linkedin')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center p-4 bg-blue-50 rounded-xl border border-blue-200 hover:border-blue-600 hover:bg-blue-100 transition-all duration-200"
                    >
                      <LinkedinLogo size={24} className="text-blue-600 mb-2" weight="fill" />
                      <span className="text-sm font-medium text-slate-700">LinkedIn</span>
                    </motion.button>

                    <motion.button
                      onClick={() => handleShare('facebook')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center p-4 bg-blue-50 rounded-xl border border-blue-200 hover:border-blue-700 hover:bg-blue-100 transition-all duration-200"
                    >
                      <FacebookLogo size={24} className="text-blue-700 mb-2" weight="fill" />
                      <span className="text-sm font-medium text-slate-700">Facebook</span>
                    </motion.button>

                    <motion.button
                      onClick={() => handleShare('instagram')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center p-4 bg-pink-50 rounded-xl border border-pink-200 hover:border-pink-500 hover:bg-pink-100 transition-all duration-200"
                    >
                      <InstagramLogo size={24} className="text-pink-500 mb-2" weight="fill" />
                      <span className="text-sm font-medium text-slate-700">Instagram</span>
                    </motion.button>
                  </div>

                  <motion.button
                    onClick={handleCopyLink}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-xl border-2 transition-all duration-200 mb-4 ${
                      copied 
                        ? 'border-green-300 bg-green-50 text-green-700' 
                        : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    {copied ? (
                      <>
                        <CheckCircle size={20} className="mr-2" weight="fill" />
                        Link Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={20} className="mr-2" weight="duotone" />
                        Copy Link
                      </>
                    )}
                  </motion.button>

                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      onClick={handleInstagramStoryShare}
                      disabled={isGeneratingImage}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex flex-col items-center p-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50"
                    >
                      <InstagramLogo size={20} className="mb-1" weight="duotone" />
                      <span className="text-xs font-medium">Instagram Story</span>
                    </motion.button>
                    
                    <motion.button
                      onClick={() => handleSaveToGallery(false)}
                      disabled={isGeneratingImage}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex flex-col items-center p-3 bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-all duration-200 disabled:opacity-50"
                    >
                      <ImageIcon size={20} className="mb-1" weight="duotone" />
                      <span className="text-xs font-medium">Square Image</span>
                    </motion.button>
                  </div>
                  
                  {isGeneratingImage && (
                    <div className="mt-3 flex items-center justify-center text-sm text-slate-600">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full mr-2"
                      />
                      Generating image...
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* Hidden ShareableCard components for image generation */}
      {result && (
        <div 
          style={{ 
            position: 'fixed', 
            left: '-10000px', 
            top: '-10000px',
            width: '2000px',
            height: '3000px',
            zIndex: -1000,
            overflow: 'hidden'
          }}
        >
          <div ref={instagramCardRef}>
            <ShareableCard result={result} forInstagram={true} />
          </div>
          
          <div ref={squareCardRef} style={{ marginTop: '100px' }}>
            <ShareableCard result={result} forInstagram={false} />
          </div>
        </div>
      )}
    </div>
  );
}
