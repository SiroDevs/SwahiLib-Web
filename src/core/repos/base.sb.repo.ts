import { BaseRepo } from '@/core/repos/base.repo';
import { supabase } from '@/infrastucture/supabase/supabase.client';

export abstract class BaseSbRepo<T> implements BaseRepo<T> {
  constructor(protected tableName: string) {}

  async getAll(): Promise<T[]> {
    const { data, error } = await supabase
      .from(this.tableName)
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) throw new Error(`Failed to fetch ${this.tableName}: ${error.message}`);
    return data as T[];
  }

  async getById(id: number): Promise<T | null> {
    const { data, error } = await supabase
      .from(this.tableName)
      .select('*')
      .eq('rid', id)
      .single();

    if (error) return null;
    return data as T;
  }

  async create(data: Omit<T, 'rid' | 'createdAt' | 'updatedAt'>): Promise<T> {
    const { data: result, error } = await supabase
      .from(this.tableName)
      .insert({
        ...data,
        createdAt: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw new Error(`Failed to create ${this.tableName}: ${error.message}`);
    return result as T;
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    const updateData = {
      ...data,
      updatedAt: new Date().toISOString(),
    };

    const { data: result, error } = await supabase
      .from(this.tableName)
      .update(updateData)
      .eq('rid', id)
      .select()
      .single();

    if (error) throw new Error(`Failed to update ${this.tableName}: ${error.message}`);
    return result as T;
  }

  async delete(id: number): Promise<void> {
    const { error } = await supabase
      .from(this.tableName)
      .delete()
      .eq('rid', id);

    if (error) throw new Error(`Failed to delete ${this.tableName}: ${error.message}`);
  }
}