import { CrudUseCase } from './crud.usecase';
import { Idiom } from '../entities/idiom.entity';
import { BaseRepo } from '../repos/base.repo';

export class IdiomUseCase extends CrudUseCase<Idiom> {
  constructor(repository: BaseRepo<Idiom>) {
    super(repository);
  }
}