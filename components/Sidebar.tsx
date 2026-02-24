import React from 'react';
import { Home, Search, Compass, MessageCircle, Heart, PlusSquare, Menu, Film, UserCircle } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { icon: <Home size={24} />, label: "Home" },
    { icon: <Search size={24} />, label: "Search" },
    { icon: <Compass size={24} />, label: "Explore" },
    { icon: <Film size={24} />, label: "Reels" },
    { icon: <MessageCircle size={24} />, label: "Messages" },
    { icon: <Heart size={24} />, label: "Notifications" },
    { icon: <PlusSquare size={24} />, label: "Create" },
    { icon: <UserCircle size={24} />, label: "Profile", active: true },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-[72px] xl:w-[244px] bg-black border-r border-ig-border px-3 py-5 z-50">
        <div className="mb-10 px-3 xl:block hidden">
          <h1 className="text-2xl font-serif italic tracking-wider">Auragram</h1>
        </div>
        <div className="mb-10 px-3 xl:hidden block flex justify-center">
          <span className="text-xl">✨</span>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group ${item.active ? 'font-bold' : ''}`}
            >
              <div className="group-hover:scale-105 transition-transform duration-200">
                {item.icon}
              </div>
              <span className={`hidden xl:block text-base ${item.active ? 'font-bold' : 'font-normal'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            <Menu size={24} />
            <span className="hidden xl:block text-base">More</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;