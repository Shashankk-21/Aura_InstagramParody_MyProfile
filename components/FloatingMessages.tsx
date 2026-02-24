import React from 'react';
import { MessageCircle, MoreHorizontal } from 'lucide-react';

const FloatingMessages: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-0 bg-[#262626] rounded-full pl-4 pr-2 py-2 shadow-lg shadow-black/50 border border-neutral-800 cursor-pointer hover:bg-[#363636] transition-colors group">
      <div className="relative mr-3">
         <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1.5 rounded-full border-2 border-[#262626]">9+</span>
         <MessageCircle size={20} className="text-white" />
      </div>
      <span className="text-sm font-semibold text-white mr-4">Messages</span>
      <div className="flex -space-x-2 mr-3">
         <img src="https://picsum.photos/40/40?random=10" className="w-6 h-6 rounded-full border-2 border-[#262626]" alt="user1" />
         <img src="https://picsum.photos/40/40?random=11" className="w-6 h-6 rounded-full border-2 border-[#262626]" alt="user2" />
         <img src="https://picsum.photos/40/40?random=12" className="w-6 h-6 rounded-full border-2 border-[#262626]" alt="user3" />
      </div>
      <MoreHorizontal size={16} className="text-neutral-400 group-hover:text-white" />
    </div>
  );
};

export default FloatingMessages;