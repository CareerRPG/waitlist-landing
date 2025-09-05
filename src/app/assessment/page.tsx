'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Brain, 
  Lightning, 
  Heart, 
  Gear, 
  Palette, 
  MagnifyingGlass, 
  Shield,
  ArrowLeft,
  ArrowRight,
  Check,
  Crown,
  Sparkle,
  Timer,
  User,
  Trophy,
  BookOpen,
  FileText,
  Star,
  Lock
} from 'phosphor-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Question {
  id: number;
  text: string;
  neuroclass: string;
}

interface IconProps {
  size?: number;
  className?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  color?: string;
}

interface NeuroClass {
  id: string;
  name: string;
  title: string;
  icon: React.ComponentType<IconProps>;
  color: string;
  gradient: string;
  description: string;
  traits: string[];
  strengths: string[];
  careers: string[];
}

// 35 questions - 5 per neuroclass
const baseQuestions: Question[] = [
  // Lumina (Visioneer) - 5 questions
  { id: 1, text: "I often envision innovative solutions that others haven't considered before.", neuroclass: "lumina" },
  { id: 2, text: "I naturally think about the long-term implications and future possibilities of current decisions.", neuroclass: "lumina" },
  { id: 3, text: "I enjoy inspiring others with my vision of what could be possible.", neuroclass: "lumina" },
  { id: 4, text: "I prefer to focus on the big picture rather than getting caught up in details.", neuroclass: "lumina" },
  { id: 5, text: "I tend to see connections and patterns that lead to breakthrough ideas.", neuroclass: "lumina" },

  // Crimsonix (Executor) - 5 questions
  { id: 6, text: "I prefer to take immediate action rather than spend too much time planning.", neuroclass: "crimsonix" },
  { id: 7, text: "I thrive when working toward clear, measurable goals with tight deadlines.", neuroclass: "crimsonix" },
  { id: 8, text: "I naturally take charge in situations that require decisive leadership.", neuroclass: "crimsonix" },
  { id: 9, text: "I get energized by achieving tangible results and hitting targets.", neuroclass: "crimsonix" },
  { id: 10, text: "I am comfortable making tough decisions quickly, even with incomplete information.", neuroclass: "crimsonix" },

  // Azura (Empath) - 5 questions
  { id: 11, text: "I can easily sense when someone is feeling upset or uncomfortable.", neuroclass: "azura" },
  { id: 12, text: "I prioritize maintaining harmony and positive relationships in my work environment.", neuroclass: "azura" },
  { id: 13, text: "I naturally consider how decisions will affect the emotional well-being of others.", neuroclass: "azura" },
  { id: 14, text: "I excel at facilitating collaboration and ensuring everyone feels heard.", neuroclass: "azura" },
  { id: 15, text: "I find deep satisfaction in supporting others' personal and professional growth.", neuroclass: "azura" },

  // Obsidia (Architect) - 5 questions
  { id: 16, text: "I approach problems by breaking them down into logical, systematic steps.", neuroclass: "obsidia" },
  { id: 17, text: "I excel at identifying patterns and creating efficient systems or processes.", neuroclass: "obsidia" },
  { id: 18, text: "I prefer to have detailed plans and well-organized workflows.", neuroclass: "obsidia" },
  { id: 19, text: "I naturally analyze data and information to uncover insights and trends.", neuroclass: "obsidia" },
  { id: 20, text: "I enjoy optimizing existing systems to make them more efficient and effective.", neuroclass: "obsidia" },

  // Solara (Artisan) - 5 questions
  { id: 21, text: "I express my ideas through creative and visually appealing formats.", neuroclass: "solara" },
  { id: 22, text: "I value uniqueness and originality in my work and personal expression.", neuroclass: "solara" },
  { id: 23, text: "I enjoy experimenting with new approaches and unconventional methods.", neuroclass: "solara" },
  { id: 24, text: "I find myself drawn to aesthetically pleasing and beautifully designed solutions.", neuroclass: "solara" },
  { id: 25, text: "I prefer work environments that allow for creative freedom and personal flair.", neuroclass: "solara" },

  // Aureus (Seeker) - 5 questions
  { id: 26, text: "I am constantly curious and eager to learn about new topics and ideas.", neuroclass: "aureus" },
  { id: 27, text: "I adapt quickly to new situations and changing circumstances.", neuroclass: "aureus" },
  { id: 28, text: "I enjoy researching and gathering information before making decisions.", neuroclass: "aureus" },
  { id: 29, text: "I thrive in environments that offer opportunities for continuous learning.", neuroclass: "aureus" },
  { id: 30, text: "I naturally ask probing questions to deepen my understanding of complex topics.", neuroclass: "aureus" },

  // Noxion (Challenger) - 5 questions
  { id: 31, text: "I naturally identify potential flaws or weaknesses in plans and proposals.", neuroclass: "noxion" },
  { id: 32, text: "I believe it's important to maintain high standards and ensure quality in all work.", neuroclass: "noxion" },
  { id: 33, text: "I am comfortable challenging ideas or decisions when I believe they are incorrect.", neuroclass: "noxion" },
  { id: 34, text: "I feel responsible for protecting systems and processes from potential risks.", neuroclass: "noxion" },
  { id: 35, text: "I value truth and accuracy, even when it means delivering difficult feedback.", neuroclass: "noxion" }
];

export default function AssessmentPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<NeuroClass | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);
  const [showDetailedReport, setShowDetailedReport] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Initialize randomized questions
  useEffect(() => {
    setRandomizedQuestions(shuffleArray(baseQuestions));
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (currentStep === 'questions') {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentStep]);

  const neuroclasses: NeuroClass[] = [
    {
      id: 'lumina',
      name: 'Lumina',
      title: 'The Visioneer',
      icon: Lightning,
      color: 'gray',
      gradient: 'from-gray-400 to-slate-500',
      description: 'Dreamers and innovators who see possibilities everywhere and inspire others with their vision.',
      traits: ['Visionary', 'Creative', 'Inspiring', 'Future-focused'],
      strengths: ['Big picture thinking', 'Innovation', 'Motivation', 'Strategic planning'],
      careers: ['Entrepreneur', 'Creative Director', 'Product Manager', 'Innovation Consultant']
    },
    {
      id: 'crimsonix',
      name: 'Crimsonix',
      title: 'The Executor',
      icon: Lightning,
      color: 'red',
      gradient: 'from-red-500 to-pink-500',
      description: 'Action-oriented doers who turn ideas into reality through decisive execution.',
      traits: ['Action-oriented', 'Decisive', 'Results-driven', 'Leadership'],
      strengths: ['Execution', 'Leadership', 'Problem-solving', 'Decision-making'],
      careers: ['CEO', 'Operations Manager', 'Sales Director', 'Project Manager']
    },
    {
      id: 'azura',
      name: 'Azura',
      title: 'The Empath',
      icon: Heart,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Natural healers and connectors who create harmony and support others emotional growth.',
      traits: ['Empathetic', 'Supportive', 'Intuitive', 'Collaborative'],
      strengths: ['Emotional intelligence', 'Communication', 'Team building', 'Conflict resolution'],
      careers: ['HR Director', 'Therapist', 'Team Lead', 'Customer Success Manager']
    },
    {
      id: 'obsidia',
      name: 'Obsidia',
      title: 'The Architect',
      icon: Gear,
      color: 'purple',
      gradient: 'from-purple-600 to-indigo-600',
      description: 'Strategic builders who design robust systems and optimize everything for maximum efficiency.',
      traits: ['Systematic', 'Analytical', 'Strategic', 'Detail-oriented'],
      strengths: ['Systems thinking', 'Analysis', 'Planning', 'Optimization'],
      careers: ['Software Architect', 'Data Scientist', 'Business Analyst', 'Operations Research']
    },
    {
      id: 'solara',
      name: 'Solara',
      title: 'The Artisan',
      icon: Palette,
      color: 'orange',
      gradient: 'from-orange-500 to-yellow-500',
      description: 'Creative expressors who bring beauty and meaning to the world through their unique perspective.',
      traits: ['Creative', 'Artistic', 'Expressive', 'Authentic'],
      strengths: ['Creativity', 'Design thinking', 'Innovation', 'Aesthetic sense'],
      careers: ['UX Designer', 'Brand Manager', 'Content Creator', 'Art Director']
    },
    {
      id: 'aureus',
      name: 'Aureus',
      title: 'The Seeker',
      icon: MagnifyingGlass,
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Curious explorers who constantly learn, adapt, and discover new ways of doing things.',
      traits: ['Curious', 'Adaptable', 'Learning-focused', 'Explorer'],
      strengths: ['Learning agility', 'Research', 'Adaptation', 'Knowledge synthesis'],
      careers: ['Research Scientist', 'Consultant', 'Product Manager', 'Business Development']
    },
    {
      id: 'noxion',
      name: 'Noxion',
      title: 'The Challenger',
      icon: Shield,
      color: 'black',
      gradient: 'from-gray-600 to-slate-700',
      description: 'Critical thinkers who question everything and ensure quality through rigorous analysis.',
      traits: ['Critical', 'Quality-focused', 'Protective', 'Truth-seeking'],
      strengths: ['Critical thinking', 'Quality assurance', 'Risk assessment', 'Validation'],
      careers: ['Quality Assurance', 'Security Analyst', 'Auditor', 'Legal Counsel']
    }
  ];


  // Likert scale options (same for all questions)
  const likertOptions = [
    { text: "Strongly Disagree", value: 1 },
    { text: "Disagree", value: 2 },
    { text: "Neutral", value: 3 },
    { text: "Agree", value: 4 },
    { text: "Strongly Agree", value: 5 }
  ];

  // Randomize questions while maintaining balance
  const shuffleArray = (array: Question[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleAnswerSelect = (questionId: number, optionValue: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnswers(prev => ({ ...prev, [questionId]: optionValue }));
    
    // Update scores using Likert scale values
    const question = randomizedQuestions.find(q => q.id === questionId);
    if (question) {
      setScores(prev => {
        const newScores = { ...prev };
        // For Likert scale: score = (value - 3) * multiplier
        // This gives: -2, -1, 0, 1, 2 for strongly disagree to strongly agree
        const scoreContribution = (optionValue - 3) * 2;
        newScores[question.neuroclass] = (newScores[question.neuroclass] || 0) + scoreContribution;
        return newScores;
      });
    }

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentQuestion < randomizedQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        calculateResult();
      }
      setIsAnimating(false);
    }, 800);
  };

  const calculateResult = () => {
    const topNeuroclass = Object.entries(scores).reduce((a, b) => 
      scores[a[0]] > scores[b[0]] ? a : b
    )[0];
    
    const foundNeuroclass = neuroclasses.find(nc => nc.id === topNeuroclass);
    const resultNeuroclass = foundNeuroclass || neuroclasses[0];
    
    // Redirect to shareable result page
    router.push(`/result?neuroclass=${resultNeuroclass.id}`);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = randomizedQuestions.length > 0 ? ((currentQuestion + 1) / randomizedQuestions.length) * 100 : 0;

  // Calculate percentage breakdown for detailed report
  const calculatePercentages = () => {
    const totalScore = Object.values(scores).reduce((sum, score) => sum + Math.abs(score), 0);
    if (totalScore === 0) return {};
    
    const percentages: Record<string, number> = {};
    Object.entries(scores).forEach(([neuroclass, score]) => {
      // Convert negative scores to positive for percentage calculation
      const positiveScore = Math.max(0, score + 10); // Add 10 to handle negative scores
      percentages[neuroclass] = Math.round((positiveScore / (totalScore + 70)) * 100); // Add 70 to total for negative score compensation
    });
    
    // Normalize to ensure total is 100%
    const currentTotal = Object.values(percentages).reduce((sum, val) => sum + val, 0);
    if (currentTotal > 0) {
      Object.keys(percentages).forEach(key => {
        percentages[key] = Math.round((percentages[key] / currentTotal) * 100);
      });
    }
    
    return percentages;
  };

  const handlePayment = async () => {
    // Simulate payment processing
    setShowPaymentModal(false);
    setShowDetailedReport(true);
    
    // In a real implementation, this would integrate with Stripe or similar
    // For now, we'll just show the detailed report
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navbar />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {/* Intro Step */}
          {currentStep === 'intro' && (
            <motion.section
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-4xl mx-auto px-6 py-20 text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-sm font-medium text-emerald-700 mb-6">
                <Brain size={16} className="mr-2" weight="duotone" />
                Neuroclass Assessment
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Discover Your
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Neuroclass</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
                Unlock your cognitive archetype through our scientifically-backed assessment. 
                Discover your unique strengths, ideal work environment, and perfect career paths 
                in just 10 minutes.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: Timer,
                    title: '10 Minutes',
                    description: 'Quick yet comprehensive assessment'
                  },
                  {
                    icon: Brain,
                    title: '7 Neuroclasses',
                    description: 'Unique cognitive archetypes to discover'
                  },
                  {
                    icon: Trophy,
                    title: 'Personalized',
                    description: 'Tailored insights for your career'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 mb-4">
                      <item.icon size={24} className="text-white" weight="duotone" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => setCurrentStep('questions')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Begin Assessment
                <ArrowRight size={20} className="ml-2 inline" weight="bold" />
              </motion.button>
            </motion.section>
          )}

          {/* Questions Step */}
          {currentStep === 'questions' && (
            <motion.section
              key="questions"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-4xl mx-auto px-6 py-12"
            >
              {/* Progress Header */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-slate-600">
                    Question {currentQuestion + 1} of {randomizedQuestions.length}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Timer size={16} className="mr-1" weight="duotone" />
                    {formatTime(timeElapsed)}
                  </div>
                </div>
                
                <div className="w-full bg-slate-200 rounded-full h-2 mb-6">
                  <motion.div 
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  />
                </div>
              </div>

              {/* Question */}
              {randomizedQuestions.length > 0 && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                      {randomizedQuestions[currentQuestion]?.text}
                  </h2>
                </motion.div>
              </AnimatePresence>
              )}

              {/* Likert Scale Options - Horizontal Layout */}
              <div className="flex flex-col items-center space-y-6">
                {/* Scale Labels */}
                <div className="flex justify-between w-full max-w-5xl px-4">
                  <span className="text-sm font-medium text-slate-600 hidden sm:block">Strongly Disagree</span>
                  <span className="text-xs font-medium text-slate-600 sm:hidden">Disagree</span>
                  <span className="text-sm font-medium text-slate-600 hidden sm:block">Strongly Agree</span>
                  <span className="text-xs font-medium text-slate-600 sm:hidden">Agree</span>
                </div>
                
                {/* Horizontal Rating Scale */}
                <div className="flex items-center justify-center space-x-3 sm:space-x-6 w-full max-w-5xl px-2">
                  {likertOptions.map((option, index) => {
                    // Define hover colors based on scale position
                    const getHoverColors = (value: number) => {
                      switch (value) {
                        case 1: return 'hover:border-red-400 hover:bg-red-50'; // Strongly Disagree - Red
                        case 2: return 'hover:border-orange-400 hover:bg-orange-50'; // Disagree - Orange
                        case 3: return 'hover:border-yellow-400 hover:bg-yellow-50'; // Neutral - Yellow
                        case 4: return 'hover:border-lime-400 hover:bg-lime-50'; // Agree - Light Green
                        case 5: return 'hover:border-green-400 hover:bg-green-50'; // Strongly Agree - Green
                        default: return 'hover:border-slate-400 hover:bg-slate-50';
                      }
                    };

                    return (
                      <motion.div
                    key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex flex-col items-center space-y-2"
                      >
                        <motion.button
                          onClick={() => randomizedQuestions[currentQuestion] && handleAnswerSelect(randomizedQuestions[currentQuestion].id, option.value)}
                          disabled={isAnimating || !randomizedQuestions[currentQuestion]}
                          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-3 transition-all duration-300 flex items-center justify-center ${
                            randomizedQuestions[currentQuestion] && answers[randomizedQuestions[currentQuestion].id] === option.value
                              ? 'border-emerald-500 bg-emerald-500 shadow-lg scale-110'
                              : `border-slate-300 bg-white ${getHoverColors(option.value)} hover:scale-105`
                    } ${isAnimating ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                          whileHover={!isAnimating ? { scale: 1.1 } : {}}
                          whileTap={!isAnimating ? { scale: 0.95 } : {}}
                        >
                          {randomizedQuestions[currentQuestion] && answers[randomizedQuestions[currentQuestion].id] === option.value ? (
                            <Check size={20} className="text-white sm:w-6 sm:h-6" weight="bold" />
                          ) : (
                            <span className="text-slate-600 font-bold text-base sm:text-lg">{option.value}</span>
                          )}
                        </motion.button>
                        
                        {/* Option label below button - one word per row */}
                        <div className="text-xs text-slate-500 text-center max-w-12 sm:max-w-16 leading-tight">
                          {option.text.split(' ').map((word, wordIndex) => (
                            <div key={wordIndex}>{word}</div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                      </div>
                
                {/* Helper text */}
                <p className="text-sm text-slate-500 text-center max-w-2xl px-4">
                  Select how much you agree with the statement above
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-12">
                <motion.button
                  onClick={() => currentQuestion > 0 && setCurrentQuestion(prev => prev - 1)}
                  disabled={currentQuestion === 0 || isAnimating}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    currentQuestion === 0 || isAnimating
                      ? 'text-slate-400 cursor-not-allowed'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  whileHover={currentQuestion > 0 && !isAnimating ? { scale: 1.05 } : {}}
                  whileTap={currentQuestion > 0 && !isAnimating ? { scale: 0.95 } : {}}
                >
                  <ArrowLeft size={16} className="mr-2" weight="bold" />
                  Previous
                </motion.button>

                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-1">Progress</div>
                  <div className="font-bold text-slate-900">
                    {Math.round(progressPercentage)}%
                  </div>
                </div>

                <div className="w-20" /> {/* Spacer for alignment */}
              </div>
            </motion.section>
          )}

          {/* Results Step */}
          {currentStep === 'results' && result && (
            <motion.section
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-6xl mx-auto px-6 py-20"
            >
              {/* Results Header */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-sm font-medium text-emerald-700 mb-6"
                >
                  <Sparkle size={16} className="mr-2" weight="duotone" />
                  Your Neuroclass Revealed
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-5xl md:text-6xl font-bold text-slate-900 mb-4"
                >
                  You are {result.name}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-2xl text-slate-600 mb-8"
                >
                  {result.title}
                </motion.p>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                  className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${result.gradient} mb-8`}
                >
                  <result.icon size={48} className="text-white" weight="duotone" />
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-lg text-slate-600 max-w-3xl mx-auto"
                >
                  {result.description}
                </motion.p>
              </div>

              {/* Results Details */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <User size={24} className="mr-3 text-emerald-600" weight="duotone" />
                    Core Traits
                  </h3>
                  <div className="space-y-3">
                    {result.traits.map((trait, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span className="text-slate-700">{trait}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <Lightning size={24} className="mr-3 text-blue-600" weight="duotone" />
                    Superpowers
                  </h3>
                  <div className="space-y-3">
                    {result.strengths.map((strength, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-slate-700">{strength}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <Crown size={24} className="mr-3 text-purple-600" weight="duotone" />
                    Ideal Careers
                  </h3>
                  <div className="space-y-3">
                    {result.careers.map((career, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-slate-700">{career}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Detailed Report Teaser */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200 mb-12"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 mb-4">
                    <FileText size={32} className="text-white" weight="duotone" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Want Your Complete Cognitive Profile?
                  </h3>
                  <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                    Get a detailed breakdown showing your percentage alignment with all 7 neuroclasses, 
                    personalized insights, and career recommendations tailored to your unique cognitive profile.
                  </p>
                  
                  {!showDetailedReport ? (
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex items-center space-x-2 text-slate-700">
                        <Star size={20} className="text-amber-500" weight="fill" />
                        <span className="font-semibold">Detailed Percentage Breakdown</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-700">
                        <Star size={20} className="text-amber-500" weight="fill" />
                        <span className="font-semibold">Personalized Career Insights</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-700">
                        <Star size={20} className="text-amber-500" weight="fill" />
                        <span className="font-semibold">Development Recommendations</span>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowPaymentModal(true)}
                        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center mt-4"
                      >
                        <Lock size={20} className="mr-2" weight="duotone" />
                        Get Detailed Report - $1.00
                      </motion.button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-slate-900 mb-4">Your Complete Cognitive Profile</h4>
                      <div className="grid gap-4">
                        {Object.entries(calculatePercentages())
                          .sort(([,a], [,b]) => b - a)
                          .map(([neuroclassId, percentage]) => {
                            const neuroclassData = neuroclasses.find(nc => nc.id === neuroclassId);
                            if (!neuroclassData) return null;
                            
                            return (
                              <div key={neuroclassId} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                                <div className="flex items-center space-x-3">
                                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${neuroclassData.gradient}`}>
                                    <neuroclassData.icon size={20} className="text-white" weight="duotone" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-slate-900">{neuroclassData.name}</div>
                                    <div className="text-sm text-slate-600">{neuroclassData.title}</div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <div className="w-32 bg-slate-200 rounded-full h-2">
                                    <div 
                                      className={`bg-gradient-to-r ${neuroclassData.gradient} h-2 rounded-full transition-all duration-500`}
                                      style={{ width: `${percentage}%` }}
                                    />
                                  </div>
                                  <span className="font-bold text-slate-900 w-12 text-right">{percentage}%</span>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ready to Level Up Your Career?
                </h3>
                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                  Join CareerRPG to unlock personalized quests, connect with your tribe, 
                  and transform your professional journey into an epic adventure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(`/neuroclasses/${result?.id}`)}
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <BookOpen size={20} className="mr-2" weight="duotone" />
                    Learn More About My Neuroclass
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300"
                  >
                    Start Your Journey
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentStep('intro');
                      setCurrentQuestion(0);
                      setAnswers({});
                      setScores({});
                      setResult(null);
                      setTimeElapsed(0);
                      setRandomizedQuestions(shuffleArray(baseQuestions));
                      setShowDetailedReport(false);
                      setShowPaymentModal(false);
                    }}
                    className="border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
                  >
                    Retake Assessment
                  </motion.button>
                </div>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 mb-6">
                  <FileText size={32} className="text-white" weight="duotone" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Unlock Your Detailed Report
                </h3>
                
                <p className="text-slate-600 mb-6">
                  Get your complete cognitive profile with percentage breakdowns for all 7 neuroclasses, 
                  personalized insights, and career development recommendations.
                </p>

                <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                  <div className="text-4xl font-bold text-slate-900 mb-2">$1.00</div>
                  <div className="text-sm text-slate-600">One-time payment</div>
                  
                  <div className="mt-4 space-y-2 text-left">
                    <div className="flex items-center text-sm text-slate-700">
                      <Check size={16} className="text-emerald-500 mr-2" weight="bold" />
                      Complete percentage breakdown
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Check size={16} className="text-emerald-500 mr-2" weight="bold" />
                      Personalized career insights
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Check size={16} className="text-emerald-500 mr-2" weight="bold" />
                      Development recommendations
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Check size={16} className="text-emerald-500 mr-2" weight="bold" />
                      Downloadable PDF report
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300"
                  >
                    Purchase Report - $1.00
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowPaymentModal(false)}
                    className="w-full border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 font-semibold py-4 px-6 rounded-2xl transition-all duration-300"
                  >
                    Maybe Later
                  </motion.button>
                </div>

                <p className="text-xs text-slate-500 mt-4">
                  Secure payment processing. Your data is safe and encrypted.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {currentStep !== 'questions' && <Footer />}
    </div>
  );
}
