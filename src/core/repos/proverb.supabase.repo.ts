import { BaseRepo } from '@/core/repos/base.repo';
import { BaseSupabaseRepo } from './base.supabase.repo';
import { Proverb } from '@/core/entities/proverb.entity';

export class ProverbSupabaseRepo 
  extends BaseSupabaseRepo<Proverb> 
  implements BaseRepo<Proverb> {
  constructor() {
    super('proverbs');
  }
}