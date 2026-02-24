import React, { useEffect, useRef } from 'react';
import { X, MapPin, Calendar, ScrollText, AlertCircle } from 'lucide-react';
import gsap from 'gsap';

const PostModal = ({ event, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(overlayRef.current, { opacity: 0, duration: 0.3 });
      gsap.from(modalRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)"
      });
    });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      ctx.revert();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors md:hidden"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="flex-1 bg-black flex items-center justify-center relative">
           <img
             src={event.posterUrl}
             alt={event.title}
             className="max-h-[50vh] md:max-h-full w-full object-contain"
           />
        </div>

        {/* Details Section */}
        <div className="flex-1 p-6 flex flex-col overflow-y-auto bg-zinc-900 md:min-w-[350px]">
           {/* Header */}
           <div className="border-b border-zinc-800 pb-4 mb-4 flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">{event.title}</h2>
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                   <Calendar size={14} />
                   <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm mt-1">
                   <MapPin size={14} />
                   <span>{event.venue}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="hidden md:block p-1 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
           </div>

           {/* Description */}
           <div className="flex-1">
             <div className="mb-6">
               <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                 <ScrollText size={16} className="text-blue-500" />
                 Description
               </h3>
               <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
                 {event.description}
               </p>
             </div>

             <div className="mb-6">
               <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                 <AlertCircle size={16} className="text-red-500" />
                 Rules
               </h3>
               <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
                 {event.rules}
               </p>
             </div>
           </div>

           {/* Action Button */}
           <div className="mt-auto pt-4 border-t border-zinc-800">
             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
               Registered
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;