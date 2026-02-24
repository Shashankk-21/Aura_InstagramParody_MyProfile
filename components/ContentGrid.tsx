import React from 'react';
import { EventPost } from '../types';

interface ContentGridProps {
  events: EventPost[];
}

const ContentGrid: React.FC<ContentGridProps> = ({ events }) => {
    return (
        <div className="grid grid-cols-3 gap-1 md:gap-8">
            {events.map(event => (
                <div key={event.id} className="aspect-square relative group cursor-pointer overflow-hidden bg-neutral-900">
                    <img 
                        src={event.imageUrl} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2 text-center">
                       <h4 className="font-bold text-white text-sm md:text-base line-clamp-2">{event.title}</h4>
                       <div className="flex gap-4 mt-2">
                         <span className="font-bold text-white text-xs md:text-sm">❤️ {event.likes}</span>
                         <span className="font-bold text-white text-xs md:text-sm">💬 {event.comments}</span>
                       </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContentGrid;