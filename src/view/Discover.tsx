import FighterCard from "../components/FighterCards/FighterCard.tsx";
import SwipeButtons from "../components/SwipeButtons";
import { useState } from "react";
import type { Fighter } from "../components/FighterCards/FighterCard.ts";

/* ================= MOCK DATA ================= */

const fighters: Fighter[] = [
  {
    id: "1",
    name: "Alex 'The Hammer' Johnson",
    age: 28,
    weight: "170 lbs",
    weightClass: "Welterweight",
    stance: "Orthodox",
    discipline: "Muay Thai",
    experience: "5 years",
    record: "12-3-0",
    achievements: ["Regional Champion"],
    location: "Los Angeles, CA",
    bio: "Looking for serious sparring partners.",
    availability: "Weekends",
    image: "🥊",
  },
];

/* ================= COMPONENT ================= */

function DiscoverView() {
  const [index, setIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);

  const fighter = fighters[index];

  function nextFighter() {
    setTimeout(() => {
      setSwipeDirection(null);
      setIndex((prev) => (prev + 1) % fighters.length);
    }, 300);
  }

  function handleLike() {
    setSwipeDirection("right");
    // 🔜 save match to Supabase
    nextFighter();
  }

  function handlePass() {
    setSwipeDirection("left");
    nextFighter();
  }

  if (!fighter) {
    return <p>No fighters available</p>;
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <FighterCard
        fighter={fighter}
        swipeDirection={swipeDirection}
      />

      <SwipeButtons
        onLike={handleLike}
        onPass={handlePass}
      />
    </div>
  );
}

export default DiscoverView;
