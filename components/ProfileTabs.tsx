import React from 'react';
import { Grid, Calendar, Image as ImageIcon } from 'lucide-react';
import { TabType } from '../types';

interface ProfileTabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, setActiveTab }) => {
  const getTabClass = (tab: TabType) => {
    return `flex items-center gap-1.5 h-[52px] text-xs font-semibold tracking-widest uppercase cursor-pointer transition-colors border-t border-transparent -mt-[1px] ${
      activeTab === tab 
        ? 'text-white border-white' 
        : 'text-ig-secondary hover:text-white'
    }`;
  };

  return (
    <div className="border-t border-ig-border flex justify-center gap-12 md:gap-16">
      <div 
        className={getTabClass('events')}
        onClick={() => setActiveTab('events')}
      >
        <Grid size={12} className={activeTab === 'events' ? 'text-white' : ''} />
        <span className="hidden md:inline">Events</span>
      </div>
      
      <div 
        className={getTabClass('schedule')}
        onClick={() => setActiveTab('schedule')}
      >
        <Calendar size={12} className={activeTab === 'schedule' ? 'text-white' : ''} />
        <span className="hidden md:inline">Schedule</span>
      </div>

      <div 
        className={getTabClass('gallery')}
        onClick={() => setActiveTab('gallery')}
      >
        <ImageIcon size={12} className={activeTab === 'gallery' ? 'text-white' : ''} />
        <span className="hidden md:inline">Gallery</span>
      </div>
    </div>
  );
};

export default ProfileTabs;