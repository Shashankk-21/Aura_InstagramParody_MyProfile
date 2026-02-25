import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

// Mock Data
const userProfile = {
  username: "Darshan_official",
  fullName: "Darshan",
  auraID: "#AUR-2026-X99",
  college: "GIT Belagavi",
  email: "darshan.design@aura.inc",
  // PaymentStatus removed
  profilePic: "https://ui-avatars.com/api/?name=Aura&background=random", // Placeholder fetched from backend
  bio: "Trust the process 💫",
  stats: {
    events: 3,
    eventsWon: 3,
    daysLeft: 14,
  }
};

const highlights = [
  { id: 1, title: "Aura '23", imgUrl: "https://placehold.co/150x150/1a1a1a/FFF?text=23" },
  { id: 2, title: "Aura '24", imgUrl: "https://placehold.co/150x150/1a1a1a/FFF?text=24" },
  { id: 3, title: "Aura '25", imgUrl: "https://placehold.co/150x150/1a1a1a/FFF?text=25" }
];

const registeredEvents = [
  {
    id: 1,
    posterUrl: event1,
    title: "Thunderstruck: Battle of Bands",
    date: "Feb 24, 2026 • 6:00 PM",
    venue: "Open Air Theatre (OAT)",
    description: "Amplify your soul. 15 minutes to prove you own the stage. Distortion allowed, disrespect isn't.",
    rules: "1. 5+1 Members max. 2. Time limit: 12 mins (setup included)."
  },
  {
    id: 2,
    posterUrl: event2,
    title: "Vogue: The Fashion Show",
    date: "Feb 25, 2026 • 7:30 PM",
    venue: "Main Auditorium",
    description: "Walk the talk. Theme: Cyberpunk Ethinic. Elegance meets the future.",
    rules: "1. Min 8 models per team. 2. No flammable props."
  },
  {
    id: 3,
    posterUrl: event3,
    title: "Nritya: Solo Dance",
    date: "Feb 23, 2026 • 10:00 AM",
    venue: "Seminar Hall 2",
    description: "Rhythm in your veins. One stage, one dancer, infinite expressions.",
    rules: "1. Track duration: 3-4 mins. 2. Props must be cleared by the participant."
  }
];

const DELAY = 800; // Simulate network latency

// API Functions
export const getUserProfile = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userProfile);
    }, DELAY);
  });
};

export const getHighlights = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(highlights);
    }, DELAY);
  });
};

export const getRegisteredEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(registeredEvents);
    }, DELAY);
  });
};

export const loginUser = (username, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate successful login
      resolve({ success: true, user: userProfile });
    }, DELAY);
  });
};

export const logoutUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, DELAY / 2);
  });
};
