import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import StoryHighlights from './components/StoryHighlights';
import ProfileTabs from './components/ProfileTabs';
import ContentGrid from './components/ContentGrid';
import PostModal from './components/PostModal';
import HamburgerMenu from './components/HamburgerMenu';
import Toast from './components/Toast';
import Login from './components/Login';
import { Loader2 } from 'lucide-react';
import { getUserProfile, getHighlights, getRegisteredEvents, loginUser, logoutUser } from './services/api';

const App = () => {
  // Backend Readiness State
  const [user, setUser] = useState(null);
  const [highlights, setHighlights] = useState([]);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // UI State
  const [activeTab, setActiveTab] = useState('events');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [currentTheme, setCurrentTheme] = useState('crimson');

  const themeStyles = {
    crimson: 'bg-gradient-to-b from-[#4a0000] via-[#200000] to-[#000000]',
    purple: 'bg-gradient-to-b from-[#2e004a] via-[#1a002b] to-[#000000]',
    gold: 'bg-gradient-to-b from-[#422006] via-[#1a0b00] to-[#000000]',
    oled: 'bg-[#000000]',
  };

  const showToast = (msg) => {
    setToastMessage(null);
    setTimeout(() => setToastMessage(msg), 10);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Simulate Backend Login
      const loginResponse = await loginUser();

      if (loginResponse.success) {
        // Parallel Data Fetching
        const [highlightsData, eventsData] = await Promise.all([
          getHighlights(),
          getRegisteredEvents()
        ]);

        setUser(loginResponse.user);
        setHighlights(highlightsData);
        setEvents(eventsData);
      }
    } catch (error) {
      console.error("Backend Error:", error);
      showToast("Failed to connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logoutUser();
      setUser(null);
      setHighlights([]);
      setEvents([]);
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Logout Error:", error);
      showToast("Logout failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditProfile = () => {
    showToast("Edit mode locked for Demo.");
  };

  const handleShareProfile = (msg) => {
    showToast(msg || "Profile link copied to clipboard.");
  };

  const handleHighlightClick = (item) => {
    showToast(`Viewing Highlight: ${item.title}`);
  };

  // 1. Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white font-sans">
        <Loader2 className="animate-spin mb-4 text-purple-500" size={48} />
        <p className="text-zinc-400 animate-pulse text-sm">Connecting to Aura Backend...</p>
      </div>
    );
  }

  // 2. Login State (Logged Out)
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // 3. Authenticated App State
  return (
    <div className={`${themeStyles[currentTheme]} min-h-screen w-full text-white flex flex-col items-center relative overflow-x-hidden font-sans transition-colors duration-500`}>

      {/* Toast */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

      {/* Header */}
      <Header onMenuClick={() => setIsMenuOpen(true)} />

      {/* Main Content */}
      <main className="w-full max-w-[935px] mx-auto pb-20">

        <ProfileHeader
          profile={user}
          onEditProfile={handleEditProfile}
          onShareProfile={handleShareProfile}
          currentTheme={currentTheme}
        />

        <StoryHighlights
          highlights={highlights}
          onHighlightClick={handleHighlightClick}
        />

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'events' ? (
          <ContentGrid
            events={events}
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
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        onLogout={handleLogout}
      />

    </div>
  );
};

export default App;
