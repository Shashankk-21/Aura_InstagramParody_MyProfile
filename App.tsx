import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import StoryHighlights from './components/StoryHighlights';
import ProfileTabs from './components/ProfileTabs';
import EmptyPostState from './components/EmptyPostState';
import ContentGrid from './components/ContentGrid';
import StoryViewer from './components/StoryViewer';
import { USER_PROFILE, HIGHLIGHTS, REGISTERED_EVENTS } from './constants';
import { TabType, Highlight } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('events');
  const [viewingHighlight, setViewingHighlight] = useState<Highlight | null>(null);

  // Backend Ready Logic:
  const hasEvents = REGISTERED_EVENTS && REGISTERED_EVENTS.length > 0;

  const renderContent = () => {
    if (activeTab === 'events') {
      if (hasEvents) {
        return <ContentGrid events={REGISTERED_EVENTS} />;
      } else {
        return <EmptyPostState />;
      }
    }
    
    // Placeholder for other tabs
    return (
       <div className="flex flex-col items-center justify-center py-20 text-neutral-500">
         <div className="p-4 rounded-full border-2 border-neutral-800 mb-4">
            <span className="text-2xl">🔒</span>
         </div>
         <p className="font-semibold">Content Unavailable</p>
         <p className="text-sm mt-1">Check back later.</p>
       </div>
    );
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white flex flex-col items-center relative overflow-hidden">
      
      {/* Top Navigation Bar */}
      <nav className="w-full border-b border-neutral-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[935px] mx-auto px-4 h-14 flex items-center">
          <h1 className="text-xl font-semibold tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Auragram
          </h1>
        </div>
      </nav>

      {/* Colorful background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Content Area */}
      <main className="w-full max-w-[935px] mx-auto pt-6 md:pt-[30px] px-4 md:px-5 pb-16 relative z-10">
        
        <ProfileHeader profile={USER_PROFILE} />
        
        <StoryHighlights 
          highlights={HIGHLIGHTS} 
          onHighlightClick={setViewingHighlight} 
        />
        
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-4">
          {renderContent()}
        </div>
        
      </main>

      {/* Story Viewer Overlay */}
      {viewingHighlight && (
        <StoryViewer 
          highlight={viewingHighlight} 
          onClose={() => setViewingHighlight(null)} 
        />
      )}
      
    </div>
  );
};

export default App;