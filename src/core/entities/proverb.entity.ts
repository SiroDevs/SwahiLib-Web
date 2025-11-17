export interface Proverb {
  rid: number;
  title?: string;
  meaning?: string;
  synonyms?: string;
  conjugation?: string;
  likes: number;
  views: number;
  createdAt: Date;
  updatedAt?: Date;
}
