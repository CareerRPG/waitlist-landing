'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { Icon } from 'phosphor-react';
import { 
  List, 
  X, 
  BookOpen, 
  UsersThree, 
  Target, 
  CaretDown,
  Lightning,
  Brain,
  GameController,
  ChartLineUp,
  Article,
  Info,
  Phone,
  Briefcase,
  GraduationCap,
  Star,
  Heart,
  Lightbulb,
  Gear,
  Palette,
  MagnifyingGlass,
  Shield,
  Buildings
} from 'phosphor-react';
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDockExpanded, setIsDockExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isHoveringNavArea, setIsHoveringNavArea] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
            element.scrollIntoView({ behavior: 'smooth' });
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
        element.scrollIntoView({ behavior: 'smooth' });
        setIsDockExpanded(false);
        setActiveMobileSection(null);
        setActiveDropdown(null);
      }
    } else {
      // We're on another page, navigate to homepage with hash using Next.js router
      router.push(`/#${sectionId}`);
    }
  };

  const handleNavigation = (url: string) => {
    // Check if it's an external URL (contains http/https) or internal
    const isExternal = url.startsWith('http://') || url.startsWith('https://');
    
    if (isExternal) {
      window.open(url, '_blank');
    } else {
      // Internal navigation - use Next.js router for smooth navigation
      router.push(url);
    }
    
    setIsDockExpanded(false);
    setActiveMobileSection(null);
    setActiveDropdown(null);
  };

  const toggleDock = () => {
    setIsDockExpanded(!isDockExpanded);
    setActiveMobileSection(null);
  };

  const handleMobileSectionToggle = (sectionName: string) => {
    if (activeMobileSection === sectionName) {
      setActiveMobileSection(null);
    } else {
      setActiveMobileSection(sectionName);
    }
  };

  const handleDropdownItemClick = (subItem: { id?: string; url?: string; name: string }) => {
    if (subItem.id) {
      scrollToSection(subItem.id);
    } else {
      handleNavigation(subItem.url || '/');
    }
  };

  const handleMouseEnter = (itemName: string) => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    
    // Set the nav area as being hovered
    setIsHoveringNavArea(true);
    
    // Immediately set the new active dropdown
    setActiveDropdown(itemName);
  };

  // handleMouseLeave removed as it was unused

  const handleNavAreaEnter = () => {
    setIsHoveringNavArea(true);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleNavAreaLeave = () => {
    setIsHoveringNavArea(false);
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Slightly longer delay when leaving the entire nav area
    setHoverTimeout(timeout);
  };

  // Clear timeout on component unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Type definitions for navigation
  type NavItem = {
    name: string;
    type: 'dropdown' | 'single';
    icon: Icon;
    id?: string;
    url?: string;
    items?: Array<{
      name: string;
      id?: string;
      url?: string;
      icon: Icon;
      description: string;
    }>;
  };

  // Shared Components
  const Logo = ({ size = 'default', onClick }: { size?: 'default' | 'small', onClick: () => void }) => (
    <motion.div
      className="flex items-center cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`inline-flex items-center justify-center rounded-xl mr-3 ${
        size === 'small' ? 'w-8 h-8' : 'w-10 h-10'
      }`}>
        <Image 
          src="/CareeerrpgIconSquare.png" 
          alt="CareerRPG Logo" 
          width={size === 'small' ? 32 : 40}
          height={size === 'small' ? 32 : 40}
          className="rounded-xl"
        />
      </div>
      <span className={`font-bold text-slate-900 ${size === 'small' ? 'text-xl' : 'text-2xl'}`}>
        Career<span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent italic">RPG</span>
      </span>
    </motion.div>
  );

  const DropdownMenu = ({ 
    item, 
    isActive, 
    onItemClick 
  }: { 
    item: NavItem, 
    isActive: boolean, 
    onItemClick: (subItem: { id?: string; url?: string; name: string }) => void 
  }) => (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, y: 8, scale: 0.96, rotateX: -15 }}
          transition={{ 
            duration: 0.25, 
            ease: [0.23, 1, 0.32, 1],
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
          className={`absolute top-full mt-1 w-80 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl shadow-slate-900/10 overflow-hidden z-[60] ${
            ['Company', 'Resources'].includes(item.name) ? 'right-0' : 'left-0'
          }`}
          style={{ transformOrigin: 'top center' }}
        >
          <div className="p-4 space-y-1">
            {item.items?.map((subItem, index) => (
              <motion.button
                key={subItem.name}
                initial={{ opacity: 0, x: -15, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.04,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
                onClick={() => onItemClick(subItem)}
                className="w-full flex items-start p-3 rounded-xl hover:bg-emerald-50 hover:border-emerald-100 transition-all duration-300 text-left group border border-transparent"
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:from-emerald-200 group-hover:to-blue-200 transition-colors">
                  <subItem.icon size={16} className="text-emerald-600" weight="duotone" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-slate-900 text-sm group-hover:text-emerald-900 transition-colors">
                    {subItem.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 group-hover:text-emerald-600 transition-colors">
                    {subItem.description}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const NavigationItems = ({ 
    onNavAreaEnter, 
    onNavAreaLeave,
    onMouseEnter,
    activeDropdown,
    onItemClick
  }: {
    onNavAreaEnter: () => void,
    onNavAreaLeave: () => void,
    onMouseEnter: (itemName: string) => void,
    activeDropdown: string | null,
    onItemClick: (subItem: { id?: string; url?: string; name: string }) => void
  }) => (
    <div 
      className="hidden lg:flex items-center space-x-1"
      onMouseEnter={onNavAreaEnter}
      onMouseLeave={onNavAreaLeave}
    >
      {navItems.map((item) => (
        <div 
          key={item.name} 
          className="relative"
          onMouseEnter={() => item.type === 'dropdown' ? onMouseEnter(item.name) : null}
        >
          {item.type === 'dropdown' ? (
            <motion.button
              className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-slate-50"
              whileHover={{ scale: 1.02 }}
            >
              <item.icon size={14} className="mr-1.5" weight="duotone" />
              {item.name}
              <CaretDown size={12} className="ml-1 opacity-60" weight="bold" />
            </motion.button>
          ) : (
            <motion.button
              onClick={() => item.id ? scrollToSection(item.id) : handleNavigation(item.url || '/')}
              className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-slate-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <item.icon size={14} className="mr-1.5" weight="duotone" />
              {item.name}
            </motion.button>
          )}

          <DropdownMenu 
            item={item} 
            isActive={activeDropdown === item.name} 
            onItemClick={onItemClick}
          />
        </div>
      ))}
    </div>
  );

  const CTAButton = ({ size = 'default' }: { size?: 'default' | 'small' }) => (
    <motion.button
      onClick={() => handleNavigation('/assessment')}
      className={`bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 text-sm flex items-center ${
        size === 'small' ? 'px-5 py-2' : 'px-5 py-2.5'
      }`}
      whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(16, 185, 129, 0.3)' }}
      whileTap={{ scale: 0.95 }}
    >
      <Brain size={14} className="mr-1.5" weight="bold" />
      Take Assessment
    </motion.button>
  );

  const MobileMenuItem = ({ 
    item, 
    index, 
    activeMobileSection, 
    onSectionToggle, 
    onSubItemClick 
  }: {
    item: NavItem,
    index: number,
    activeMobileSection: string | null,
    onSectionToggle: (name: string) => void,
    onSubItemClick: (subItem: { id?: string; url?: string; name: string }) => void
  }) => (
    <div>
      {item.type === 'dropdown' ? (
        <div className="space-y-2">
          <motion.button
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.06,
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1],
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            onClick={() => onSectionToggle(item.name)}
            className="flex items-center justify-between w-full text-left p-3 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 hover:from-emerald-50 hover:to-blue-50 transition-all duration-300"
            whileHover={{ scale: 1.02, x: 3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center mr-3">
                <item.icon size={20} className="text-emerald-600" weight="duotone" />
              </div>
              <span className="font-semibold text-slate-900">{item.name}</span>
            </div>
            <motion.div
              animate={{ rotate: activeMobileSection === item.name ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <CaretDown size={16} className="text-slate-500" weight="bold" />
            </motion.div>
          </motion.button>
          
          <AnimatePresence>
            {activeMobileSection === item.name && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="pl-4 space-y-1"
              >
                {item.items?.map((subItem, subIndex) => (
                  <motion.button
                    key={subItem.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: subIndex * 0.03 }}
                    onClick={() => onSubItemClick(subItem)}
                    className="flex items-start w-full text-left p-3 rounded-xl hover:bg-emerald-50 transition-all duration-200"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm">
                      <subItem.icon size={14} className="text-emerald-600" weight="duotone" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900 text-sm">{subItem.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{subItem.description}</div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            delay: index * 0.06,
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1],
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
          onClick={() => item.id ? scrollToSection(item.id) : handleNavigation(item.url || '/')}
          className="flex items-center w-full text-left p-3 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 hover:from-emerald-50 hover:to-blue-50 transition-all duration-300"
          whileHover={{ scale: 1.02, x: 3 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center mr-3">
            <item.icon size={20} className="text-emerald-600" weight="duotone" />
          </div>
          <span className="font-semibold text-slate-900">{item.name}</span>
        </motion.button>
      )}
    </div>
  );

  // Comprehensive navigation structure
  const navItems: NavItem[] = [
    {
      name: 'Product',
      type: 'dropdown',
      icon: GameController,
      items: [
        { name: 'Features', id: 'features', icon: Lightning, description: 'Core platform capabilities' },
        { name: 'How It Works', id: 'how-it-works', icon: BookOpen, description: 'Step-by-step process' },
        { name: 'Pricing', url: '/pricing', icon: ChartLineUp, description: 'Plans and pricing' },
        { name: 'Assessment', url: '/assessment', icon: Brain, description: 'Take the Neuroclass test' },
      ]
    },
    {
      name: 'Neuroclasses',
      type: 'dropdown',
      icon: Brain,
      items: [
        { name: 'Overview', id: 'neuroclasses', icon: Brain, description: 'All cognitive types' },
        { name: 'The Visioneer', url: '/neuroclasses/lumina', icon: Lightbulb, description: 'Lumina - Dreamer & Innovator' },
        { name: 'The Executor', url: '/neuroclasses/crimsonix', icon: Lightning, description: 'Crimsonix - Doer & Enforcer' },
        { name: 'The Empath', url: '/neuroclasses/azura', icon: Heart, description: 'Azura - Healer & Connector' },
        { name: 'The Architect', url: '/neuroclasses/obsidia', icon: Gear, description: 'Obsidia - Strategist & Optimizer' },
        { name: 'The Artisan', url: '/neuroclasses/solara', icon: Palette, description: 'Solara - Creator & Expressor' },
        { name: 'The Seeker', url: '/neuroclasses/aureus', icon: MagnifyingGlass, description: 'Aureus - Explorer & Learner' },
        { name: 'The Challenger', url: '/neuroclasses/noxion', icon: Shield, description: 'Noxion - Critic & Truth Seeker' },
      ]
    },
    {
      name: 'Roles',
      type: 'dropdown',
      icon: GameController,
      items: [
        { name: 'All Roles', url: '/roles', icon: GameController, description: 'Browse RPG character roles' },
        { name: 'Support', url: '/roles/support', icon: Lightbulb, description: 'Visionary enablers & strategic guides' },
        { name: 'Warrior', url: '/roles/warrior', icon: Lightning, description: 'Action-oriented executors & leaders' },
        { name: 'Healer', url: '/roles/healer', icon: Heart, description: 'Empathetic connectors & harmonizers' },
        { name: 'Mage', url: '/roles/mage', icon: Gear, description: 'Strategic architects & system builders' },
        { name: 'Archer', url: '/roles/archer', icon: Palette, description: 'Creative artisans & expressors' },
        { name: 'Assassin', url: '/roles/assassin', icon: MagnifyingGlass, description: 'Adaptive seekers & learners' },
        { name: 'Tank', url: '/roles/tank', icon: Shield, description: 'Protective challengers & guardians' },
      ]
    },
    {
      name: 'Resources',
      type: 'dropdown',
      icon: BookOpen,
      items: [
        { name: 'Blog', url: '/blog', icon: Article, description: 'Career insights & tips' },
        { name: 'Career Guide', url: '/guide', icon: GraduationCap, description: 'Complete career roadmap' },
        { name: 'Career Paths', url: '/careers', icon: Briefcase, description: 'Real-world job opportunities' },
        { name: 'Success Stories', url: '/success-stories', icon: Star, description: 'User testimonials' },
        { name: 'Research', url: '/research', icon: Brain, description: 'Cognitive science insights' },
        { name: 'Help Center', url: '/help', icon: Info, description: 'Support & documentation' },
      ]
    },
    {
      name: 'Company',
      type: 'dropdown',
      icon: Buildings,
      items: [
        { name: 'About Us', url: '/about', icon: Info, description: 'Our mission & team' },
        { name: 'Join Our Team', url: '/company/careers', icon: Briefcase, description: 'Work at CareerRPG' },
        { name: 'Press', url: '/press', icon: Article, description: 'Media & news' },
        { name: 'Contact', url: '/contact', icon: Phone, description: 'Get in touch' },
      ]
    },
    { name: 'Community', id: 'community', type: 'single', icon: UsersThree },
  ];

  return (
    <>
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            initial={{ opacity: 0, y: -100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.95 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.23, 1, 0.32, 1],
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="fixed top-4 left-32 right-32 z-50"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl shadow-slate-900/10">
              <div className="flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Logo size="small" onClick={() => scrollToSection('hero')} />

                {/* Desktop Navigation */}
                <NavigationItems 
                  onNavAreaEnter={handleNavAreaEnter}
                  onNavAreaLeave={handleNavAreaLeave}
                  onMouseEnter={handleMouseEnter}
                  activeDropdown={activeDropdown}
                  onItemClick={handleDropdownItemClick}
                />

                {/* CTA Button */}
                <div className="hidden lg:block">
                  <CTAButton size="small" />
                </div>

                {/* Mobile Menu Button for scrolled navbar */}
                <button
                  onClick={toggleDock}
                  className="lg:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  {isDockExpanded ? 
                    <X size={24} weight="regular" /> : 
                    <List size={24} weight="regular" />
                  }
                </button>
              </div>


            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Static navbar for initial state (hidden when floating appears) */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="bg-white/70 backdrop-blur-sm border-b border-slate-200/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between py-3">
              {/* Logo */}
              <Logo size="default" onClick={() => scrollToSection('hero')} />

              {/* Desktop Navigation */}
              <NavigationItems 
                onNavAreaEnter={handleNavAreaEnter}
                onNavAreaLeave={handleNavAreaLeave}
                onMouseEnter={handleMouseEnter}
                activeDropdown={activeDropdown}
                onItemClick={handleDropdownItemClick}
              />

              {/* CTA Button */}
              <div className="hidden lg:block">
                <CTAButton size="default" />
              </div>

              {/* Mobile Menu Button for static navbar */}
              <button
                onClick={toggleDock}
                className="lg:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {isDockExpanded ? 
                  <X size={24} weight="regular" /> : 
                  <List size={24} weight="regular" />
                }
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Dock */}
      <div className="md:hidden">
        {/* Expanded Menu Overlay */}
        <AnimatePresence>
          {isDockExpanded && (
              <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 60, rotateX: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 60, rotateX: 15 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.23, 1, 0.32, 1],
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              className="fixed bottom-32 left-4 right-4 z-50"
              style={{ transformOrigin: 'bottom center' }}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-2xl shadow-slate-900/20 overflow-hidden">
                <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                  {navItems.map((item, index) => (
                    <MobileMenuItem
                      key={item.name}
                      item={item}
                      index={index}
                      activeMobileSection={activeMobileSection}
                      onSectionToggle={handleMobileSectionToggle}
                      onSubItemClick={handleDropdownItemClick}
                    />
                  ))}
                  
                  {/* CTA Button in Dock */}
                  <motion.button
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: navItems.length * 0.06 + 0.1,
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1],
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    onClick={() => handleNavigation('/assessment')}
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/25 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.03, 
                      y: -2,
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Brain size={18} className="mr-2" weight="bold" />
                    Take Assessment
                  </motion.button>
                </div>
              </div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Dock Bar */}
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.23, 1, 0.32, 1],
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.2 
          }}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-full border border-slate-200/50 shadow-2xl shadow-slate-900/20 px-6 py-3">
            <div className="flex items-center space-x-4">
              {/* Left Quick Actions */}
              <motion.button
                onClick={() => scrollToSection('features')}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 hover:from-emerald-200 hover:to-emerald-300 rounded-full transition-all duration-300"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -3,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Lightning size={20} className="text-emerald-600" weight="duotone" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('neuroclasses')}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 rounded-full transition-all duration-300"
                initial={{ opacity: 0, scale: 0, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -3,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Brain size={20} className="text-blue-600" weight="duotone" />
              </motion.button>

              {/* Center Plus Button */}
                      <motion.button
                onClick={toggleDock}
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 rounded-full shadow-lg shadow-emerald-500/25 transition-all duration-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: isDockExpanded ? 45 : 0,
                  boxShadow: isDockExpanded ? "0 15px 30px rgba(16, 185, 129, 0.3)" : "0 10px 25px rgba(16, 185, 129, 0.25)"
                }}
                transition={{
                  opacity: { delay: 0.3, duration: 0.5 },
                  scale: { delay: 0.3, duration: 0.5, type: "spring", stiffness: 300, damping: 15 },
                  rotate: { duration: 0.4, ease: [0.23, 1, 0.32, 1], type: "spring", stiffness: 400, damping: 25 },
                  boxShadow: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isDockExpanded ? 135 : 0 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.23, 1, 0.32, 1],
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                >
                  <AnimatePresence mode="wait">
                    {isDockExpanded ? (
                      <motion.div
                        key="close"
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={24} className="text-white" weight="bold" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <List size={24} className="text-white" weight="duotone" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>

              {/* Right Quick Actions */}
              <motion.button
                onClick={() => scrollToSection('community')}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 rounded-full transition-all duration-300"
                initial={{ opacity: 0, scale: 0, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -3,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <UsersThree size={20} className="text-purple-600" weight="duotone" />
              </motion.button>
              
                              <motion.button
                onClick={() => handleNavigation('/assessment')}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300 rounded-full transition-all duration-300"
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -3,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Target size={20} className="text-orange-600" weight="duotone" />
              </motion.button>
            </div>
          </div>
        </motion.div>
        </div>
    </>
  );
}
