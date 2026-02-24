import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Settings, Activity, Bookmark, LogOut, Moon } from 'lucide-react';

const HamburgerMenu = ({ isOpen, onClose }) => {
  const sheetRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const ctx = gsap.context(() => {
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'block' });
        gsap.fromTo(sheetRef.current,
          { y: '100%' },
          { y: '0%', duration: 0.4, ease: 'power3.out' }
        );
      });
      return () => ctx.revert();
    }
  }, [isOpen]);

  const handleClose = () => {
    const ctx = gsap.context(() => {
       gsap.to(sheetRef.current, {
         y: '100%',
         duration: 0.3,
         ease: 'power3.in',
         onComplete: onClose
       });
       gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
    });
  };

  if (!isOpen) return null;

  const menuItems = [
    { icon: <Settings size={24} />, label: "Settings", sub: "Reset password" },
    { icon: <Activity size={24} />, label: "Your Activity", sub: "Events & Payment details" },
    { icon: <Bookmark size={24} />, label: "Saved", sub: "" },
    { icon: <Moon size={24} />, label: "Switch Appearance", sub: "" },
    { icon: <LogOut size={24} className="text-red-500" />, label: "Log Out", sub: "", textClass: "text-red-500" },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex flex-col justify-end">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 opacity-0 hidden"
        onClick={handleClose}
      ></div>

      {/* Bottom Sheet */}
      <div
        ref={sheetRef}
        className="relative bg-zinc-900 rounded-t-2xl w-full p-4 pb-10 border-t border-zinc-800 shadow-2xl"
      >
        <div className="w-12 h-1 bg-zinc-700 rounded-full mx-auto mb-6"></div>

        <div className="flex flex-col gap-1">
          {menuItems.map((item, idx) => (
             <button
               key={idx}
               className="flex items-center gap-4 p-4 hover:bg-zinc-800 rounded-xl transition-colors text-left group w-full"
             >
               <div className="text-white group-hover:scale-110 transition-transform">
                 {item.icon}
               </div>
               <div className="flex flex-col">
                 <span className={`text-base font-medium ${item.textClass || 'text-white'}`}>{item.label}</span>
                 {item.sub && <span className="text-xs text-zinc-500">{item.sub}</span>}
               </div>
             </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;