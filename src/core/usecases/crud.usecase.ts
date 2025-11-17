import { BaseRepo } from '../repos/base.repo';

export abstract class CrudUseCase<T> {
  constructor(protected repository: BaseRepo<T>) {}

  async getAll(): Promise<T[]> {
    return this.repository.getAll();
  }

  async getById(id: number): Promise<T | null> {
    return this.repository.getById(id);
  }

  async create(data: Omit<T, 'rid' | 'createdAt' | 'updatedAt'>): Promise<T> {
    return this.repository.create(data);
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}