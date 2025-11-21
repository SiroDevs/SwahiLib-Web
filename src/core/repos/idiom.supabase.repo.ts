import { BaseRepo } from '@/core/repos/base.repo';
import { BaseSupabaseRepo } from './base.supabase.repo';
import { Idiom } from '@/core/entities/idiom.entity';

export class IdiomSupabaseRepo 
  extends BaseSupabaseRepo<Idiom> 
  implements BaseRepo<Idiom> {
  constructor() {
    super('idioms');
  }
}
