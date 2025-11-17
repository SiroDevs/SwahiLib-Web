import { IdiomSbRepo } from '@/core/repos/idiom.sb.repo';
import { ProverbSbRepo } from '@/core/repos/proverb.sb.repo';
import { SayingSbRepo } from '@/core/repos/saying.sb.repo';
import { WordSbRepo } from '@/core/repos/word.sb.repo';
import { IdiomUseCase } from '@/core/usecases/idiom.usecase';
import { ProverbUseCase } from '@/core/usecases/proverb.usecase';
import { SayingUseCase } from '@/core/usecases/saying.usecase';
import { WordUseCase } from '@/core/usecases/word.usecase';

const idiomRepo = new IdiomSbRepo();
const proverbRepo = new ProverbSbRepo();
const sayingRepo = new SayingSbRepo();
const wordRepo = new WordSbRepo();

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
