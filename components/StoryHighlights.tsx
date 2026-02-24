import React from 'react';
import { Highlight } from '../types';
import { Plus } from 'lucide-react';

interface StoryHighlightsProps {
  highlights: Highlight[];
  onHighlightClick: (highlight: Highlight) => void;
}

const StoryHighlights: React.FC<StoryHighlightsProps> = ({ highlights, onHighlightClick }) => {
  return (
    <div className="flex gap-4 md:gap-10 overflow-x-auto no-scrollbar px-4 md:px-8 pb-8 md:pb-12">
      {highlights.map((item) => (
        <div 
          key={item.id} 
          className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0 group"
          onClick={() => onHighlightClick(item)}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px] group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-black p-[2px]">
               <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full rounded-full object-cover border border-ig-border"
              />
            </div>
          </div>
          <span className="text-xs font-semibold text-white tracking-wide truncate max-w-[70px] text-center">
            {item.title}
          </span>
        </div>
      ))}

      {/* 'New' Highlight Button */}
      <div className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0 group">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-ig-border p-[1px] group-hover:bg-neutral-600 transition-colors flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-black border border-white/20 flex items-center justify-center">
               <Plus size={32} className="text-neutral-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <span className="text-xs font-semibold text-white tracking-wide truncate max-w-[70px] text-center">
            New
          </span>
        </div>
    </div>
  );
};

export default StoryHighlights;