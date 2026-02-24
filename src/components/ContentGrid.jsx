import React from 'react';
import { Camera } from 'lucide-react';

const ContentGrid = ({ events, onEventClick }) => {
  if (!events || events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-6">
           <Camera size={36} />
        </div>
        <h3 className="text-2xl font-bold mb-2">No Events Yet</h3>
        <p className="text-zinc-400 text-sm mb-6 max-w-xs">Register for events to see them here.</p>
        <button
           onClick={() => console.log("Redirecting to Events Page...")}
           className="text-blue-500 font-semibold hover:text-white transition-colors"
        >
           Register Now
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-0.5 md:gap-1 pb-20">
      {events.map((event) => (
        <div
          key={event.id}
          className="aspect-square relative cursor-pointer overflow-hidden bg-zinc-900 group"
          onClick={() => onEventClick(event)}
        >
          <img
            src={event.posterUrl}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;