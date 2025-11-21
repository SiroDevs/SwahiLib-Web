import { CrudUseCase } from './crud.usecase';
import { Proverb } from '../entities/proverb.entity';
import { BaseRepo } from '../repos/base.repo';

export class ProverbUseCase extends CrudUseCase<Proverb> {
  constructor(repository: BaseRepo<Proverb>) {
    super(repository);
  }
}