import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <nav className="w-full h-14 bg-black border-b border-zinc-800 sticky top-0 z-50 flex items-center justify-between px-4">
      <h1 className="text-xl font-semibold tracking-wide font-sans text-white">Auragram</h1>
      <button onClick={onMenuClick} className="text-white p-1">
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Header;