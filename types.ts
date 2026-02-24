import React from 'react';

export interface StoryItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  duration?: number;
}

export interface Highlight {
  id: string;
  title: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  stories: StoryItem[];
}

export interface EventPost {
  id: string;
  title: string; // Name of the event
  imageUrl: string;
  likes: number;
  comments: number;
}

export type TabType = 'events' | 'schedule' | 'gallery';

export type PaymentStatus = 'paid' | 'pending' | 'unpaid';

export interface UserStats {
  eventsCount: number;
  auraPoints: number;
}

export interface UserProfile {
  username: string;
  fullName: string;
  bio: string;
  auraId: string;
  paymentStatus: PaymentStatus; // New field for payment tracking
  website?: string;
  avatarUrl: string;
  stats: UserStats;
}