import { IdiomSupabaseRepo } from '@/core/repos/idiom.supabase.repo';
import { ProverbSupabaseRepo } from '@/core/repos/proverb.supabase.repo';
import { SayingSupabaseRepo } from '@/core/repos/saying.supabase.repo';
import { WordSupabaseRepo } from '@/core/repos/word.supabase.repo';
import { IdiomUseCase } from '@/core/usecases/idiom.usecase';
import { ProverbUseCase } from '@/core/usecases/proverb.usecase';
import { SayingUseCase } from '@/core/usecases/saying.usecase';
import { WordUseCase } from '@/core/usecases/word.usecase';

const idiomRepo = new IdiomSupabaseRepo();
const proverbRepo = new ProverbSupabaseRepo();
const sayingRepo = new SayingSupabaseRepo();
const wordRepo = new WordSupabaseRepo();

const idiomUseCase = new IdiomUseCase(idiomRepo);
const proverbUseCase = new ProverbUseCase(proverbRepo);
const sayingUseCase = new SayingUseCase(sayingRepo);
const wordUseCase = new WordUseCase(wordRepo);

export const container = {
  idiomUseCase,
  proverbUseCase,
  sayingUseCase,
  wordUseCase,
};

export type Container = typeof container;
