'use client';

import React, { useRef } from 'react';
import { ShareableCard } from '../../components/ShareableCard';
import { downloadElementAsImage } from '../../utils/shareUtils';
import { Lightning } from 'phosphor-react';

const testResult = {
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
};

export default function TestCardPage() {
  const instagramRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);

  const handleDownload = async (forInstagram: boolean) => {
    const ref = forInstagram ? instagramRef.current : squareRef.current;
    if (!ref) return;
    
    try {
      await downloadElementAsImage(ref, {
        filename: forInstagram ? 'test-instagram' : 'test-square',
        format: 'png'
      });
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">ShareableCard Test</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Instagram Story Card */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Instagram Story (9:16)</h2>
            <div 
              ref={instagramRef}
              className="inline-block"
              style={{ transform: 'scale(0.2)', transformOrigin: 'top center' }}
            >
              <ShareableCard result={testResult} forInstagram={true} />
            </div>
            <button
              onClick={() => handleDownload(true)}
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
            >
              Download Instagram Story
            </button>
          </div>

          {/* Square Card */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Square (1:1)</h2>
            <div 
              ref={squareRef}
              className="inline-block"
              style={{ transform: 'scale(0.3)', transformOrigin: 'top center' }}
            >
              <ShareableCard result={testResult} forInstagram={false} />
            </div>
            <button
              onClick={() => handleDownload(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Download Square
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
