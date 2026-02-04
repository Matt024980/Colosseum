/* =============================
   Fighter Shared Type
   ============================= */

export interface Fighter {
  id: string;

  // Identity
  name: string;
  age: number;
  image: string; // emoji, image URL, or Supabase storage path

  // Physical stats
  weight: string;
  weightClass: string;
  stance: string;

  // Fighting profile
  discipline: string;
  experience: string;
  record: string;

  // Achievements & bio
  achievements: string[];
  bio: string;

  // Logistics
  location: string;
  availability: string;

  // Metadata
  createdAt?: string;
}
