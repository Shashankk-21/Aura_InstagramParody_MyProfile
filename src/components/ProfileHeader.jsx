import React from 'react';
import { BadgeCheck } from 'lucide-react';

const ProfileHeader = ({ profile, onEditProfile, onShareProfile }) => {
  return (
    <div className="px-4 py-4 text-white">
      {/* Top Row: Pic + Stats */}
      <div className="flex items-center justify-between mb-4">
        {/* Profile Pic */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px] flex-shrink-0 mr-4">
          <div className="w-full h-full rounded-full bg-black p-[2px]">
            <img
              src={profile.profilePic}
              alt={profile.username}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-1 justify-around items-center">
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg md:text-xl">{profile.stats.events}</span>
            <span className="text-sm text-neutral-400">Events</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg md:text-xl">{profile.stats.auraPoints}</span>
            <span className="text-sm text-neutral-400">Aura Pts</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg md:text-xl">{profile.stats.following}</span>
            <span className="text-sm text-neutral-400">Following</span>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-4">
        <div className="flex items-center gap-1">
          <span className="font-bold text-white text-base">{profile.fullName}</span>
          {profile.paymentStatus && (
             <BadgeCheck size={16} className="text-emerald-500" fill="currentColor" stroke="black" />
          )}
        </div>

        <div className="text-neutral-500 text-sm mb-0.5">{profile.auraID}</div>
        <div className="text-neutral-300 text-sm mb-1">{profile.college}</div>
        <div className="text-white whitespace-pre-line text-sm">{profile.bio}</div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onEditProfile}
          className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm py-1.5 rounded-md active:opacity-70 transition-colors"
        >
          Edit Profile
        </button>
        <button
          onClick={onShareProfile}
          className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm py-1.5 rounded-md active:opacity-70 transition-colors"
        >
          Share Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;