import { BaseRepo } from '@/core/repos/base.repo';
import { BaseSbRepo } from './base.sb.repo';
import { Proverb } from '@/core/entities/proverb.entity';

export class ProverbSbRepo 
  extends BaseSbRepo<Proverb> 
  implements BaseRepo<Proverb> {
  constructor() {
    super('proverbs');
  }
}