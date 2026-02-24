import React from 'react';
import { Grid, Calendar, Image as ImageIcon } from 'lucide-react';

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const getTabClass = (tab) => {
    return `flex items-center gap-2 h-12 flex-1 justify-center cursor-pointer transition-colors border-t-2 ${
      activeTab === tab
        ? 'text-white border-white'
        : 'text-zinc-500 border-transparent hover:text-zinc-300'
    }`;
  };

  return (
    <div className="flex justify-around border-t border-zinc-800">
      <div
        className={getTabClass('events')}
        onClick={() => setActiveTab('events')}
      >
        <Grid size={20} className={activeTab === 'events' ? 'text-white' : ''} />
        <span className="text-xs uppercase font-medium tracking-wide hidden md:block">Events</span>
      </div>

      <div
        className={getTabClass('schedule')}
        onClick={() => setActiveTab('schedule')}
      >
        <Calendar size={20} className={activeTab === 'schedule' ? 'text-white' : ''} />
        <span className="text-xs uppercase font-medium tracking-wide hidden md:block">Schedule</span>
      </div>

      <div
        className={getTabClass('gallery')}
        onClick={() => setActiveTab('gallery')}
      >
        <ImageIcon size={20} className={activeTab === 'gallery' ? 'text-white' : ''} />
        <span className="text-xs uppercase font-medium tracking-wide hidden md:block">Gallery</span>
      </div>
    </div>
  );
};

export default ProfileTabs;