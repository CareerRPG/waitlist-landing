'use client';

import React from 'react';
import { Crown, Lightning, Heart, Gear, Palette, MagnifyingGlass, Shield, Fire } from 'phosphor-react';

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

interface ShareableCardProps {
  result: NeuroClassResult;
  forInstagram?: boolean;
}

export const ShareableCard: React.FC<ShareableCardProps> = ({ 
  result, 
  forInstagram = false 
}) => {
  const cardStyle = forInstagram 
    ? {
        width: '1080px',
        height: '1920px', // 9:16 aspect ratio for Instagram Stories
        fontSize: '48px',
        padding: '120px 80px',
      }
    : {
        width: '1080px',
        height: '1080px', // Square for general sharing (1:1 aspect ratio)
        fontSize: '36px',
        padding: '100px 80px',
      };

  // Parse gradient string properly
  const parseGradient = (gradientString: string) => {
    // Handle Tailwind gradient classes
    if (gradientString.includes('from-') && gradientString.includes('to-')) {
      const colors = gradientString.split(' ');
      const fromColor = colors.find(c => c.startsWith('from-'))?.replace('from-', '');
      const viaColor = colors.find(c => c.startsWith('via-'))?.replace('via-', '');
      const toColor = colors.find(c => c.startsWith('to-'))?.replace('to-', '');
      
      // Convert Tailwind color names to actual colors
      const colorMap: Record<string, string> = {
        'gray-400': '#9CA3AF', 'gray-500': '#6B7280', 'gray-600': '#4B5563', 'gray-700': '#374151', 'gray-800': '#1F2937',
        'red-500': '#EF4444', 'red-600': '#DC2626', 'red-700': '#B91C1C',
        'blue-400': '#60A5FA', 'blue-500': '#3B82F6', 'blue-600': '#2563EB',
        'purple-500': '#8B5CF6', 'purple-600': '#7C3AED', 'purple-700': '#6D28D9',
        'orange-400': '#FB923C', 'orange-500': '#F97316', 'orange-600': '#EA580C',
        'emerald-400': '#34D399', 'emerald-500': '#10B981', 'emerald-600': '#059669'
      };
      
      const fromHex = colorMap[fromColor || ''] || result.color;
      const viaHex = viaColor ? colorMap[viaColor] : null;
      const toHex = colorMap[toColor || ''] || result.color;
      
      if (viaHex) {
        return `linear-gradient(135deg, ${fromHex} 0%, ${viaHex} 50%, ${toHex} 100%)`;
      } else {
        return `linear-gradient(135deg, ${fromHex} 0%, ${toHex} 100%)`;
      }
    }
    
    // Fallback to solid color
    return result.color;
  };

  return (
    <div 
      style={{
        ...cardStyle,
        background: parseGradient(result.gradient),
        color: 'white',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: forInstagram ? '200px 200px' : '150px 150px'
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '100%' }}>
        {/* Icon */}
        <div 
          style={{
            width: forInstagram ? '200px' : '150px',
            height: forInstagram ? '200px' : '150px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 60px auto',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255,255,255,0.3)'
          }}
        >
          <result.icon 
            size={forInstagram ? 120 : 80} 
            color="white" 
            weight="duotone" 
          />
        </div>

        {/* Main Content */}
        <div style={{ marginBottom: forInstagram ? '80px' : '60px' }}>
          <div 
            style={{ 
              fontSize: forInstagram ? '32px' : '24px',
              fontWeight: '600',
              marginBottom: '20px',
              opacity: 0.9,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            My Neuroclass is:
          </div>
          
          <div 
            style={{ 
              fontSize: forInstagram ? '120px' : '80px',
              fontWeight: '900',
              marginBottom: '30px',
              lineHeight: '0.9',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            {result.name}
          </div>
          
          <div 
            style={{ 
              fontSize: forInstagram ? '56px' : '40px',
              fontWeight: '700',
              marginBottom: '40px',
              opacity: 0.95
            }}
          >
            {result.title}
          </div>
          
          <div 
            style={{ 
              fontSize: forInstagram ? '40px' : '28px',
              fontStyle: 'italic',
              marginBottom: '60px',
              opacity: 0.9,
              fontWeight: '500',
              lineHeight: '1.3'
            }}
          >
            &quot;{result.motto}&quot;
          </div>
        </div>

        {/* Rarity Badge */}
        <div 
          style={{
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50px',
            padding: forInstagram ? '30px 50px' : '20px 40px',
            display: 'inline-flex',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255,255,255,0.3)',
            marginBottom: forInstagram ? '80px' : '60px'
          }}
        >
          <Crown 
            size={forInstagram ? 40 : 28} 
            color="white" 
            weight="duotone" 
            style={{ marginRight: '15px' }}
          />
          <span 
            style={{ 
              fontSize: forInstagram ? '32px' : '22px',
              fontWeight: '600'
            }}
          >
            Top {result.rarityScore}% Strategic Thinker
          </span>
        </div>

        {/* Call to Action */}
        <div style={{ marginTop: 'auto' }}>
          <div 
            style={{ 
              fontSize: forInstagram ? '36px' : '26px',
              fontWeight: '600',
              marginBottom: '20px'
            }}
          >
            Discover your Professional Archetype
          </div>
          <div 
            style={{ 
              fontSize: forInstagram ? '44px' : '32px',
              fontWeight: '800',
              background: 'rgba(255,255,255,0.2)',
              padding: forInstagram ? '20px 40px' : '15px 30px',
              borderRadius: '20px',
              display: 'inline-block',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.3)'
            }}
          >
            careerrpg.app
          </div>
        </div>
      </div>
    </div>
  );
};
