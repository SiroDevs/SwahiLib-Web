import { Idiom, Proverb, Saying, Word } from ".";

export type EntityType = 'idioms' | 'proverbs' | 'sayings' | 'words';
export type AnyEntity = Idiom | Proverb | Saying | Word;

export type EntityCommonFields = {
  rid: number;
  likes: number;
  views: number;
  createdAt: Date;
  updatedAt?: Date;
};