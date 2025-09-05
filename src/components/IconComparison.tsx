'use client';

import React from 'react';

// Lucide Icons (Current)
import { 
  Trophy as LucideTrophy, 
  Target as LucideTarget, 
  Users as LucideUsers, 
  Brain as LucideBrain,
  Sword as LucideSword,
  Shield as LucideShield,
  Star as LucideStar,
  BookOpen as LucideBookOpen,
  Sparkles as LucideSparkles,
  Mail as LucideMail
} from 'lucide-react';

// Phosphor Icons (Alternative) - Using correct icon names
import { 
  Trophy as PhosphorTrophy,
  Target as PhosphorTarget,
  Users as PhosphorUsers,
  Brain as PhosphorBrain,
  Sword as PhosphorSword,
  Shield as PhosphorShield,
  Star as PhosphorStar,
  BookOpen as PhosphorBookOpen,
  Sparkle as PhosphorSparkles,
  EnvelopeSimple as PhosphorMail,
  Crown,
  GameController,
  Lightning,
  MagicWand,
  Crosshair,
  Fire
} from 'phosphor-react';

const IconComparison = () => {
  const iconPairs = [
    { name: 'Trophy', lucide: LucideTrophy, phosphor: PhosphorTrophy },
    { name: 'Target', lucide: LucideTarget, phosphor: PhosphorTarget },
    { name: 'Users', lucide: LucideUsers, phosphor: PhosphorUsers },
    { name: 'Brain', lucide: LucideBrain, phosphor: PhosphorBrain },
    { name: 'Sword', lucide: LucideSword, phosphor: PhosphorSword },
    { name: 'Shield', lucide: LucideShield, phosphor: PhosphorShield },
    { name: 'Star', lucide: LucideStar, phosphor: PhosphorStar },
    { name: 'Book', lucide: LucideBookOpen, phosphor: PhosphorBookOpen },
    { name: 'Sparkles', lucide: LucideSparkles, phosphor: PhosphorSparkles },
    { name: 'Mail', lucide: LucideMail, phosphor: PhosphorMail },
  ];

  const uniquePhosphorIcons = [
    { name: 'Crown', icon: Crown, description: 'Perfect for achievements' },
    { name: 'Game Controller', icon: GameController, description: 'Gaming theme' },
    { name: 'Lightning', icon: Lightning, description: 'Power/Energy' },
    { name: 'Magic Wand', icon: MagicWand, description: 'Fantasy elements' },
    { name: 'Crosshair', icon: Crosshair, description: 'Precision/Focus' },
    { name: 'Fire', icon: Fire, description: 'Passion/Energy' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Icon Library Comparison
          </h1>
          <p className="text-xl text-slate-600">
            Lucide vs Phosphor Icons for CareerRPG
          </p>
        </div>

        {/* Direct Comparisons */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Side-by-Side Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iconPairs.map(({ name, lucide: LucideIcon, phosphor: PhosphorIcon }) => (
              <div key={name} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">
                  {name}
                </h3>
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="bg-slate-100 rounded-lg p-4 mb-2">
                      <LucideIcon size={32} className="text-slate-700 mx-auto" />
                    </div>
                    <span className="text-sm text-slate-600">Lucide</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-emerald-50 rounded-lg p-4 mb-2">
                      <PhosphorIcon size={32} className="text-emerald-600 mx-auto" weight="regular" />
                    </div>
                    <span className="text-sm text-emerald-600">Phosphor</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phosphor Weight Variants */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Phosphor Weight Variants
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {['thin', 'light', 'regular', 'bold', 'fill', 'duotone'].map((weight) => (
                <div key={weight} className="text-center">
                  <div className="bg-slate-50 rounded-lg p-4 mb-2">
                    <PhosphorTrophy 
                      size={32} 
                      className="text-slate-700 mx-auto" 
                      weight={weight as "thin" | "light" | "regular" | "bold" | "fill" | "duotone"}
                    />
                  </div>
                  <span className="text-sm text-slate-600 capitalize">{weight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unique Gaming Icons */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Unique Gaming-Themed Icons (Phosphor Only)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniquePhosphorIcons.map(({ name, icon: Icon, description }) => (
              <div key={name} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 shadow-lg border border-emerald-200">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-4 inline-block">
                    <Icon size={40} className="text-emerald-600" weight="duotone" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{name}</h3>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">
            🎮 Why Phosphor Icons for CareerRPG?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Crown size={32} className="mx-auto mb-3" weight="duotone" />
              <h3 className="font-semibold mb-2">More Unique</h3>
              <p className="text-sm opacity-90">
                Less commonly used than Lucide, giving your app a distinctive look
              </p>
            </div>
            <div className="text-center">
              <MagicWand size={32} className="mx-auto mb-3" weight="duotone" />
              <h3 className="font-semibold mb-2">6 Weight Options</h3>
              <p className="text-sm opacity-90">
                Fine-tune icon thickness for perfect visual hierarchy
              </p>
            </div>
            <div className="text-center">
              <GameController size={32} className="mx-auto mb-3" weight="duotone" />
              <h3 className="font-semibold mb-2">Gaming Friendly</h3>
              <p className="text-sm opacity-90">
                Better selection of gaming and fantasy-themed icons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconComparison;