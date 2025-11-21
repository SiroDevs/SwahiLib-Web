import { BaseRepo } from '@/core/repos/base.repo';
import { BaseSupabaseRepo } from './base.supabase.repo';
import { Saying } from '@/core/entities/saying.entity';

export class SayingSupabaseRepo 
  extends BaseSupabaseRepo<Saying> 
  implements BaseRepo<Saying> {
  constructor() {
    super('sayings');
  }
}
