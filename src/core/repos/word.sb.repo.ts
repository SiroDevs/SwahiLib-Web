import { BaseRepo } from '@/core/repos/base.repo';
import { BaseSbRepo } from './base.sb.repo';
import { Word } from '@/core/entities/word.entity';

export class WordSbRepo 
  extends BaseSbRepo<Word> 
  implements BaseRepo<Word> {
  constructor() {
    super('words');
  }
}
