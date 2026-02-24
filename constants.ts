import { UserProfile, Highlight, EventPost } from './types';

// Mock data for testing. 
// To see populated events, assign this to REGISTERED_EVENTS below.
// Using placeholders to ensure images load if enabled.
const MOCK_EVENTS: EventPost[] = [
  { id: '1', title: 'Neon Nights DJ', imageUrl: 'https://placehold.co/600x600/1a1a1a/FFF?text=Neon+Nights', likes: 120, comments: 5 },
  { id: '2', title: 'Art Workshop', imageUrl: 'https://placehold.co/600x600/2a2a2a/FFF?text=Art+Workshop', likes: 89, comments: 2 },
  { id: '3', title: 'Battle of Bands', imageUrl: 'https://placehold.co/600x600/3a3a3a/FFF?text=Battle+of+Bands', likes: 256, comments: 12 },
  { id: '4', title: 'Comedy Special', imageUrl: 'https://placehold.co/600x600/4a4a4a/FFF?text=Comedy+Special', likes: 45, comments: 1 },
];

export const REGISTERED_EVENTS: EventPost[] = [
  { id: '1', title: 'Finearts', imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop', likes: 120, comments: 5 },
  { id: '2', title: 'Dramatics', imageUrl: 'https://images.unsplash.com/photo-1507676184212-d0330a15233c?q=80&w=800&auto=format&fit=crop', likes: 89, comments: 2 },
  { id: '3', title: 'Fashion', imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', likes: 256, comments: 12 },
]; 

export const USER_PROFILE: UserProfile = {
  username: 'darshan_official',
  fullName: 'Darshan',
  auraId: '#AUR-2026-X99',
  paymentStatus: 'paid', // Options: 'paid', 'pending', 'unpaid'
  bio: 'College: [Your College Name]\n"Trust the process" 💫',
  website: 'aurafest.com/register',
  // Random low res cat meme
  avatarUrl: 'https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg',
  stats: {
    eventsCount: REGISTERED_EVENTS.length,
    auraPoints: 2026
  }
};

export const HIGHLIGHTS: Highlight[] = [
  { 
    id: '1', 
    title: "Aura '25", 
    imageUrl: 'https://placehold.co/200x200/262626/white?text=25',
    stories: [
      { id: 's1-1', type: 'image', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop' },
      { id: 's1-2', type: 'image', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop' },
      { id: 's1-3', type: 'image', url: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  { 
    id: '2', 
    title: "Aura '24", 
    imageUrl: 'https://placehold.co/200x200/262626/white?text=24',
    stories: [
      { id: 's2-1', type: 'image', url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop' },
      { id: 's2-2', type: 'image', url: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=600&auto=format&fit=crop' },
      { id: 's2-3', type: 'image', url: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  { 
    id: '4', 
    title: 'Highlights', 
    imageUrl: 'https://placehold.co/200x200/262626/white?text=H',
    stories: [
       { id: 's4-1', type: 'image', url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop' },
       { id: 's4-2', type: 'image', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop' },
       { id: 's4-3', type: 'image', url: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=600&auto=format&fit=crop' }
    ]
  },
];