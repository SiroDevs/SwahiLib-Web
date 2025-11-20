import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CrudUseCase } from '@/core/usecases/crud.usecase';
import { EntityType } from '@/core/entities';
import { PaginationOptions } from '@/core/repos/base.repo';

export function usePaginatedEntity<T>(
  useCase: CrudUseCase<T>, 
  entityType: EntityType,
  paginationOptions: PaginationOptions
) {
  const queryClient = useQueryClient();

  const { 
    data, 
    isLoading, 
    error,
    isFetching 
  } = useQuery({
    queryKey: [entityType, 'paginated', paginationOptions],
    queryFn: () => useCase.getAllPaginated(paginationOptions),
    // keepPreviousData: true,
  });

  const createMutation = useMutation({
    mutationFn: (data: Omit<T, 'rid' | 'createdAt' | 'updatedAt'>) => 
      useCase.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [entityType, 'paginated'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<T> }) =>
      useCase.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [entityType, 'paginated'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => useCase.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [entityType, 'paginated'] });
    },
  });

  return {
    entities: data?.data || [],
    pagination: data ? {
      total: data.total,
      page: data.page,
      pageSize: data.pageSize,
      totalPages: data.totalPages,
    } : {
      total: 0,
      page: paginationOptions.page,
      pageSize: paginationOptions.pageSize,
      totalPages: 0,
    },
    isLoading,
    isFetching,
    error: error as Error | null,
    createEntity: createMutation.mutateAsync,
    updateEntity: updateMutation.mutateAsync,
    deleteEntity: deleteMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
}