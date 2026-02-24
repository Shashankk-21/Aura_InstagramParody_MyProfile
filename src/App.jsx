import React, { useState } from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import StoryHighlights from './components/StoryHighlights';
import ProfileTabs from './components/ProfileTabs';
import ContentGrid from './components/ContentGrid';
import PostModal from './components/PostModal';
import HamburgerMenu from './components/HamburgerMenu';
import Toast from './components/Toast';
import { userProfile, highlights, registeredEvents } from './data/mockData';

const App = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    // Clear previous toast if any to restart animation
    setToastMessage(null);
    setTimeout(() => setToastMessage(msg), 10);
  };

  const handleEditProfile = () => {
    showToast("Edit mode locked for Demo.");
  };

  const handleShareProfile = () => {
    showToast("Profile link copied to clipboard.");
  };

  const handleHighlightClick = (item) => {
    showToast(`Viewing Highlight: ${item.title}`);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center relative overflow-x-hidden font-sans">

      {/* Toast */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

      {/* Header */}
      <Header onMenuClick={() => setIsMenuOpen(true)} />

      {/* Main Content */}
      <main className="w-full max-w-[935px] mx-auto pb-20">

        <ProfileHeader
          profile={userProfile}
          onEditProfile={handleEditProfile}
          onShareProfile={handleShareProfile}
        />

        <StoryHighlights
          highlights={highlights}
          onHighlightClick={handleHighlightClick}
        />

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'events' ? (
          <ContentGrid
            events={registeredEvents}
            onEventClick={setSelectedEvent}
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
             <div className="p-4 rounded-full border-2 border-zinc-800 mb-4">
                <span className="text-2xl">🔒</span>
             </div>
             <p className="font-semibold">Content Unavailable</p>
             <p className="text-sm mt-1">Check back later.</p>
          </div>
        )}

      </main>

      {/* Modals & Menus */}
      {selectedEvent && (
        <PostModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

    </div>
  );
};

export default App;