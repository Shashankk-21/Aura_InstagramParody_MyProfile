import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';

const StoryHighlights = ({ highlights }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP Bounce Animation on entry
    const ctx = gsap.context(() => {
      gsap.from(".highlight-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "elastic.out(1, 0.75)"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex gap-4 overflow-x-auto no-scrollbar px-4 pb-4 border-b border-zinc-800">
      {highlights.map((item) => (
        <div key={item.id} className="highlight-item flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer group">
          <div className="w-16 h-16 rounded-full bg-zinc-800 p-[2px] border border-zinc-700 group-hover:border-white transition-colors">
             <div className="w-full h-full rounded-full bg-black p-[2px] overflow-hidden">
                <img src={item.imgUrl} alt={item.title} className="w-full h-full rounded-full object-cover" />
             </div>
          </div>
          <span className="text-xs text-white truncate max-w-[64px] text-center">{item.title}</span>
        </div>
      ))}
       {/* Add New Highlight Placeholder */}
       <div className="highlight-item flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer group">
          <div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center bg-black group-hover:bg-zinc-900 transition-colors">
             <Plus size={24} className="text-white" />
          </div>
          <span className="text-xs text-white">New</span>
        </div>
    </div>
  );
};

export default StoryHighlights;