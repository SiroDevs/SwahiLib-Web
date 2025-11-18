import { Idiom, Proverb, Saying, Word } from ".";

export type EntityType = 'idioms' | 'proverbs' | 'sayings' | 'words';
export const entityTypes: EntityType[] = ["idioms", "proverbs", "sayings", "words"];

export type AnyEntity = Idiom | Proverb | Saying | Word;
