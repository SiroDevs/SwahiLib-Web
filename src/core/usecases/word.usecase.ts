import { CrudUseCase } from './crud.usecase';
import { Word } from '../entities/word.entity';
import { BaseRepo } from '../repos/base.repo';

export class WordUseCase extends CrudUseCase<Word> {
  constructor(repository: BaseRepo<Word>) {
    super(repository);
  }
}