import React from 'react';
import { Camera } from 'lucide-react';

const EmptyPostState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-6">
        <Camera size={36} strokeWidth={1.5} />
      </div>
      <h3 className="text-3xl font-extrabold mb-3 text-white">No Events Yet</h3>
      <p className="text-sm font-semibold mb-5 max-w-xs leading-5">
        Touch Grass.
      </p>
      <button className="text-ig-link font-semibold hover:text-white transition-colors text-sm">
        Register for your first event
      </button>
    </div>
  );
};

export default EmptyPostState;