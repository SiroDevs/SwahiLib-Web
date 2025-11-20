import { BaseRepo } from '@/core/repos/base.repo';
import { BaseSupabaseRepo } from './base.supabase.repo';
import { Word } from '@/core/entities/word.entity';

export class WordSupabaseRepo 
  extends BaseSupabaseRepo<Word> 
  implements BaseRepo<Word> {
  constructor() {
    super('words');
  }
}
