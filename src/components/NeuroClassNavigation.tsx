'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CaretLeft, 
  CaretRight,
  Lightning, 
  Fire, 
  Heart, 
  Gear, 
  Palette, 
  MagnifyingGlass, 
  Shield,
  IconProps
} from 'phosphor-react';

export interface NeuroClass {
  codename: string;
  title: string;
  roleTitle: string;
  color: string;
  icon: React.ComponentType<IconProps>;
  path: string;
}

const neuroclasses: NeuroClass[] = [
  {
    codename: 'lumina',
    title: 'Lumina',
    roleTitle: 'Visioneer',
    color: '#6B7280', // gray-500
    icon: Lightning,
    path: '/neuroclasses/lumina'
  },
  {
    codename: 'crimsonix',
    title: 'Crimsonix',
    roleTitle: 'Executor',
    color: '#DC2626', // red-600
    icon: Fire,
    path: '/neuroclasses/crimsonix'
  },
  {
    codename: 'azura',
    title: 'Azura',
    roleTitle: 'Empath',
    color: '#2563EB', // blue-600
    icon: Heart,
    path: '/neuroclasses/azura'
  },
  {
    codename: 'obsidia',
    title: 'Obsidia',
    roleTitle: 'Architect',
    color: '#7C3AED', // violet-600
    icon: Gear,
    path: '/neuroclasses/obsidia'
  },
  {
    codename: 'solara',
    title: 'Solara',
    roleTitle: 'Artisan',
    color: '#EA580C', // orange-600
    icon: Palette,
    path: '/neuroclasses/solara'
  },
  {
    codename: 'aureus',
    title: 'Aureus',
    roleTitle: 'Seeker',
    color: '#059669', // emerald-600
    icon: MagnifyingGlass,
    path: '/neuroclasses/aureus'
  },
  {
    codename: 'noxion',
    title: 'Noxion',
    roleTitle: 'Challenger',
    color: '#374151', // gray-700
    icon: Shield,
    path: '/neuroclasses/noxion'
  }
];

interface NeuroClassNavigationProps {
  currentClass: string;
}

export default function NeuroClassNavigation({ currentClass }: NeuroClassNavigationProps) {
  const currentIndex = neuroclasses.findIndex(nc => nc.codename === currentClass);
  const prevClass = currentIndex > 0 ? neuroclasses[currentIndex - 1] : neuroclasses[neuroclasses.length - 1];
  const nextClass = currentIndex < neuroclasses.length - 1 ? neuroclasses[currentIndex + 1] : neuroclasses[0];

  return (
    <div className="fixed inset-y-0 left-0 right-0 pointer-events-none z-50">
      <div className="relative h-full flex items-center justify-between px-4 md:px-8">
        {/* Previous Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pointer-events-auto"
        >
          <Link href={prevClass.path}>
            <motion.div
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 hover:border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ 
                boxShadow: `0 10px 25px -5px ${prevClass.color}20, 0 10px 10px -5px ${prevClass.color}10`
              }}
            >
              <div 
                className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                style={{ backgroundColor: `${prevClass.color}15` }}
              >
                <CaretLeft 
                  size={20} 
                  weight="bold"
                  style={{ color: prevClass.color }}
                />
              </div>
              <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 w-0 group-hover:w-auto group-hover:px-3 group-hover:py-3">
                <div className="flex items-center space-x-2 whitespace-nowrap">
                  <prevClass.icon 
                    size={16} 
                    weight="duotone"
                    style={{ color: prevClass.color }}
                  />
                  <span 
                    className="font-semibold text-sm"
                    style={{ color: prevClass.color }}
                  >
                    {prevClass.title}
                  </span>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide whitespace-nowrap">
                  {prevClass.roleTitle}
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pointer-events-auto"
        >
          <Link href={nextClass.path}>
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 hover:border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ 
                boxShadow: `0 10px 25px -5px ${nextClass.color}20, 0 10px 10px -5px ${nextClass.color}10`
              }}
            >
              <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 w-0 group-hover:w-auto group-hover:px-3 group-hover:py-3">
                <div className="flex items-center space-x-2 whitespace-nowrap">
                  <nextClass.icon 
                    size={16} 
                    weight="duotone"
                    style={{ color: nextClass.color }}
                  />
                  <span 
                    className="font-semibold text-sm"
                    style={{ color: nextClass.color }}
                  >
                    {nextClass.title}
                  </span>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide text-right whitespace-nowrap">
                  {nextClass.roleTitle}
                </div>
              </div>
              <div 
                className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                style={{ backgroundColor: `${nextClass.color}15` }}
              >
                <CaretRight 
                  size={20} 
                  weight="bold"
                  style={{ color: nextClass.color }}
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
