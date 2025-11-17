import { BaseRepo } from '@/core/repos/base.repo';
import { BaseSbRepo } from './base.sb.repo';
import { Saying } from '@/core/entities/saying.entity';

export class SayingSbRepo 
  extends BaseSbRepo<Saying> 
  implements BaseRepo<Saying> {
  constructor() {
    super('sayings');
  }
}
