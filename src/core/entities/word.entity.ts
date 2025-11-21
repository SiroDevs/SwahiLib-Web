export interface Word {
  rid: number;
  title?: string;
  meaning?: string;
  synonyms?: string;
  conjugation?: string;
  english?: string;
  likes: number;
  views: number;
  createdAt: Date;
  updatedAt?: Date;
}