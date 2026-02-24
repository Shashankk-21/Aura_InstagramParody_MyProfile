import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

export const userProfile = {
  username: "shashank.official",
  fullName: "Shashank Babu",
  auraID: "#AUR-2026-X99",
  college: "GIT Belagavi",
  paymentStatus: true, // PAID
  profilePic: "https://ui-avatars.com/api/?name=Shashank+Babu&background=random", // Placeholder
  bio: "Trust the process 💫",
  stats: {
    events: 3,
    auraPoints: 1250,
    following: 42
  }
};

export const highlights = [
  { id: 1, title: "Aura '23", imgUrl: "https://placehold.co/150x150/1a1a1a/FFF?text=23" },
  { id: 2, title: "Aura '24", imgUrl: "https://placehold.co/150x150/1a1a1a/FFF?text=24" },
  { id: 3, title: "Aura '25", imgUrl: "https://placehold.co/150x150/1a1a1a/FFF?text=25" }
];

export const registeredEvents = [
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
