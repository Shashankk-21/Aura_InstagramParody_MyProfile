import React from 'react';
import { BadgeCheck, Clock, AlertCircle } from 'lucide-react';
import { UserProfile, PaymentStatus } from '../types';

interface ProfileHeaderProps {
  profile: UserProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  
  const renderPaymentBadge = (status: PaymentStatus) => {
    switch (status) {
      case 'paid':
        return (
          <BadgeCheck className="text-blue-500" size={20} fill="currentColor" stroke="white" strokeWidth={1.5} />
        );
      case 'pending':
        return (
          <div className="flex items-center gap-1 bg-yellow-900/30 text-yellow-400 text-xs px-2.5 py-1 rounded-full font-medium border border-yellow-800 mt-2 md:mt-0">
            <Clock size={12} />
            <span>Verifying Payment</span>
          </div>
        );
      case 'unpaid':
        return (
          <div className="flex items-center gap-1 bg-red-900/30 text-red-400 text-xs px-2.5 py-1 rounded-full font-medium border border-red-800 mt-2 md:mt-0">
            <AlertCircle size={12} />
            <span>Payment Required</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <header className="flex flex-col md:flex-row items-center md:items-start md:gap-10 lg:gap-24 mb-10 px-4 md:px-8">
      
      {/* Avatar Container */}
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <div className="w-20 h-20 md:w-36 md:h-36 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 cursor-pointer group">
          <div className="w-full h-full rounded-full p-[2px] bg-black relative">
            <img 
              src={profile.avatarUrl} 
              alt={profile.username}
              className="w-full h-full rounded-full object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Info Container */}
      <div className="flex-1 w-full md:w-auto">
        
        {/* Top Row: Username + Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-xl font-normal text-ig-primary">{profile.username}</h2>
            {/* Payment Badge for Desktop */}
            <div className="hidden md:flex items-center">
              {renderPaymentBadge(profile.paymentStatus)}
            </div>
          </div>
        </div>

        {/* Mobile Payment Badge (Below username on mobile) */}
        <div className="flex md:hidden justify-center mb-6">
           {renderPaymentBadge(profile.paymentStatus)}
        </div>

        {/* Stats Row (Hidden on mobile, shown on desktop) */}
        <ul className="hidden md:flex items-center gap-10 mb-5 text-base">
          <li><span className="font-semibold">{profile.stats.eventsCount}</span> events</li>
          <li><span className="font-semibold">{profile.stats.auraPoints}</span> aura</li>
        </ul>

        {/* Bio Section */}
        <div className="text-base md:text-lg text-center md:text-left mt-4">
          <div className="font-bold text-xl mb-1">{profile.fullName}</div>
          
          {/* AURA ID Display */}
          <div className="font-bold text-ig-link cursor-pointer hover:underline mb-2 font-mono tracking-tight text-lg">
             AURA ID: {profile.auraId}
          </div>

          <div className="whitespace-pre-line text-white font-medium mb-3 leading-relaxed text-lg">
            {profile.bio}
          </div>
          {profile.website && (
            <a href={`https://${profile.website}`} target="_blank" rel="noreferrer" className="text-ig-link font-semibold hover:underline flex items-center justify-center md:justify-start gap-1 text-base">
              <span className="rotate-45 text-xl text-white">🔗</span> {profile.website}
            </a>
          )}
        </div>

        {/* Mobile Stats (Shown only on mobile) */}
        <div className="flex md:hidden justify-around border-t border-ig-border py-3 mt-6">
          <div className="flex flex-col items-center">
            <span className="font-semibold">{profile.stats.eventsCount}</span>
            <span className="text-ig-secondary text-sm">events</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">{profile.stats.auraPoints}</span>
            <span className="text-ig-secondary text-sm">aura</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default ProfileHeader;