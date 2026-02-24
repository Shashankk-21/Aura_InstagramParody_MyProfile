import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Highlight } from '../types';

interface StoryViewerProps {
  highlight: Highlight;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ highlight, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = highlight.stories || [];
  const currentStory = stories[currentIndex];

  const handleNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onClose(); // Close if it's the last story
    }
  }, [currentIndex, stories.length, onClose]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  if (!currentStory) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-in fade-in duration-200">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white z-50 p-2 hover:opacity-70 transition-opacity"
      >
        <X size={32} />
      </button>

      {/* Main Container */}
      <div className="relative w-full h-full md:w-[400px] md:h-[85vh] bg-black md:bg-neutral-900 md:rounded-xl overflow-hidden flex flex-col shadow-2xl shadow-white/10">
        
        {/* Progress Bars */}
        <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-3">
          {stories.map((_, idx) => (
            <div key={idx} className="h-0.5 md:h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
               <div 
                 className={`h-full bg-white transition-all duration-300 ${
                   idx <= currentIndex ? 'w-full' : 'w-0'
                 }`}
               />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute top-6 left-0 right-0 z-20 px-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-500 p-[1.5px]">
             {highlight.imageUrl && (
                <img 
                  src={highlight.imageUrl} 
                  className="w-full h-full rounded-full object-cover border border-black" 
                  alt="" 
                />
             )}
          </div>
          <span className="text-white font-semibold text-sm drop-shadow-md">{highlight.title}</span>
          <span className="text-white/60 text-xs drop-shadow-md">• {currentIndex + 1}/{stories.length}</span>
        </div>

        {/* Story Content */}
        <div className="flex-1 relative flex items-center justify-center bg-neutral-900">
           {currentStory.type === 'video' ? (
              <div className="text-white">Video not supported yet</div>
           ) : (
             <img 
               src={currentStory.url} 
               alt="story" 
               className="w-full h-full object-cover md:object-contain"
             />
           )}
           
           {/* Gradient Overlays for readability */}
           <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
           <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

           {/* Touch/Click Zones */}
           <div className="absolute inset-0 flex z-10">
             <div className="w-1/3 h-full cursor-pointer" onClick={(e) => { e.stopPropagation(); handlePrev(); }}></div>
             <div className="w-2/3 h-full cursor-pointer" onClick={(e) => { e.stopPropagation(); handleNext(); }}></div>
           </div>
        </div>

      </div>

      {/* Desktop Navigation Arrows (Outside) */}
      <button 
        onClick={handlePrev}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white disabled:opacity-0 transition-colors bg-neutral-800/50 p-2 rounded-full"
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={32} />
      </button>

      <button 
         onClick={handleNext}
         className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-neutral-800/50 p-2 rounded-full"
      >
        <ChevronRight size={32} />
      </button>

    </div>
  );
};

export default StoryViewer;