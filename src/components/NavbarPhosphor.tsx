'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

// Phosphor Icons - More unique alternative to Lucide
import { 
  Trophy, 
  List, 
  X, 
  User, 
  BookOpen, 
  UsersThree, 
  Target,
  Lightning,
  GameController
} from 'phosphor-react';
import Image from 'next/image';

const NavbarPhosphor = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Features', id: 'features', icon: Lightning },
    { name: 'Neuroclasses', id: 'neuroclasses', icon: User },
    { name: 'How It Works', id: 'how-it-works', icon: BookOpen },
    { name: 'Community', id: 'community', icon: UsersThree },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation on page load/route change
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      if (hash && pathname === '/') {
        // Longer delay to ensure components are mounted and animations can trigger
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }, 300); // Increased delay for better animation timing
      }
    };

    // Handle hash on initial load
    handleHashNavigation();

    // Handle hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [pathname]); // Add pathname dependency

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the homepage
    const isOnHomePage = pathname === '/';
    
    if (isOnHomePage) {
      // We're on homepage, scroll directly to section
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      // We're on another page, navigate to homepage with hash using Next.js router
      router.push(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100vw-2rem)] max-w-7xl"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl shadow-slate-900/10 mx-4">
              <div className="flex items-center justify-between px-4 sm:px-6 py-3">
                {/* Logo with CareerRPG Logo */}
                <motion.div
                  className="flex items-center cursor-pointer flex-shrink-0"
                  onClick={() => scrollToSection('hero')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="rounded-lg mr-2">
                    <Image 
                      src="/CareerRPGLogo.png" 
                      alt="CareerRPG Logo" 
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                  </div>
                  <span className="text-lg lg:text-xl font-bold text-slate-900 whitespace-nowrap">Career<span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent italic">RPG</span></span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center space-x-6">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <item.icon size={14} className="mr-1.5" weight="regular" />
                      {item.name}
                    </motion.button>
                  ))}
                </div>
                
                {/* Compact Desktop Navigation for smaller screens */}
                <div className="hidden md:flex xl:hidden items-center space-x-2">
                  {navItems.slice(0, 3).map((item) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors font-medium text-xs whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <item.icon size={14} className="lg:mr-1" weight="regular" />
                      <span className="hidden lg:inline">{item.name}</span>
                    </motion.button>
                  ))}
                </div>

                {/* CTA Button with GameController icon */}
                <div className="hidden md:block flex-shrink-0">
                  <motion.button
                    onClick={() => scrollToSection('hero')}
                    className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 text-sm flex items-center whitespace-nowrap"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(16, 185, 129, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GameController size={16} className="mr-2" weight="bold" />
                    Start Quest
                  </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors flex-shrink-0"
                >
                  {isMobileMenuOpen ? 
                    <X size={24} weight="regular" /> : 
                    <List size={24} weight="regular" />
                  }
                </button>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden border-t border-slate-200/50"
                  >
                    <div className="px-4 sm:px-6 py-4 space-y-3">
                      {navItems.map((item, index) => (
                        <motion.button
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => scrollToSection(item.id)}
                          className="flex items-center w-full text-left text-slate-600 hover:text-emerald-600 transition-colors font-medium py-2"
                        >
                          <item.icon size={16} className="mr-3" weight="regular" />
                          {item.name}
                        </motion.button>
                      ))}
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navItems.length * 0.1 }}
                        onClick={() => scrollToSection('hero')}
                        className="flex items-center w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold px-4 py-3 rounded-xl mt-4"
                      >
                        <GameController size={16} className="mr-2" weight="bold" />
                        Start Quest
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Static navbar for initial state */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="bg-white/70 backdrop-blur-sm border-b border-slate-200/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between py-3">
              {/* Logo */}
              <motion.div
                className="flex items-center cursor-pointer"
                onClick={() => scrollToSection('hero')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="rounded-lg mr-3">
                  <Image 
                    src="/CareerRPGLogo.png" 
                    alt="CareerRPG Logo" 
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <span className="text-2xl font-bold text-slate-900">Career<span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent italic">RPG</span></span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={14} className="mr-1.5" weight="regular" />
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <motion.button
                  onClick={() => scrollToSection('hero')}
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 text-sm flex items-center"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(16, 185, 129, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Target size={16} className="mr-2" weight="bold" />
                  Begin Journey
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {isMobileMenuOpen ? 
                  <X size={24} weight="regular" /> : 
                  <List size={24} weight="regular" />
                }
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarPhosphor;
