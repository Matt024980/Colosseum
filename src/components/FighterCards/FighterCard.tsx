import {
  Weight,
  Target,
  User,
  Trophy,
  Award,
  MapPin,
  Clock,
} from "lucide-react";
import type { Fighter } from "./FighterCard.ts";
import "./FighterCard.scss"

/* ================= PROPS ================= */

interface FighterCardProps {
  fighter: Fighter;
  swipeDirection?: string | null;
}

/* ================= COMPONENT ================= */

function FighterCard({ fighter, swipeDirection }: FighterCardProps) {
  return (
    <div
      className={`fighter-card ${
        swipeDirection === "left"
          ? "swipe-left"
          : swipeDirection === "right"
          ? "swipe-right"
          : ""
      }`}
    >
      {/* ---------- HEADER ---------- */}
      <div className="fighter-card__header">
        <div className="fighter-card__header-image">{fighter.image}</div>
        <h2>{fighter.name}</h2>
        <p>{fighter.age} years old</p>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="fighter-card__content">
        <div className="info-grid">
          <InfoItem icon={<Weight />} label="Weight" value={fighter.weight} />
          <InfoItem icon={<Target />} label="Class" value={fighter.weightClass} />
          <InfoItem icon={<User />} label="Stance" value={fighter.stance} />
          <InfoItem icon={<Trophy />} label="Record" value={fighter.record} />
        </div>

        <Section title="Discipline" value={fighter.discipline} highlight />
        <Section title="Experience" value={fighter.experience} />

        {/* ---------- ACHIEVEMENTS ---------- */}
        <div>
          <p className="section__title">Achievements</p>
          {fighter.achievements.map((item, index) => (
            <div key={index} className="meta">
              <Award size={16} /> {item}
            </div>
          ))}
        </div>

        <Meta icon={<MapPin />} text={fighter.location} />
        <Meta icon={<Clock />} text={fighter.availability} />

        <p className="bio">{fighter.bio}</p>
      </div>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="info-item">
      <span>{icon}</span>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function Section({
  title,
  value,
  highlight,
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="section">
      <p className="section__title">{title}</p>
      <p className={`section__value ${highlight ? "section--highlight" : ""}`}>
        {value}
      </p>
    </div>
  );
}

function Meta({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="meta">
      {icon}
      {text}
    </div>
  );
}

export default FighterCard;
