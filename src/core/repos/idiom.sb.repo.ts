import { BaseRepo } from '@/core/repos/base.repo';
import { BaseSbRepo } from './base.sb.repo';
import { Idiom } from '@/core/entities/idiom.entity';

export class IdiomSbRepo 
  extends BaseSbRepo<Idiom> 
  implements BaseRepo<Idiom> {
  constructor() {
    super('idioms');
  }
}
