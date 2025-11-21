import { CrudUseCase } from './crud.usecase';
import { Saying } from '../entities/saying.entity';
import { BaseRepo } from '../repos/base.repo';

export class SayingUseCase extends CrudUseCase<Saying> {
  constructor(repository: BaseRepo<Saying>) {
    super(repository);
  }
}