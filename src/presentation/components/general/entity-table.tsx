'use client';

import { useState } from 'react';
import { AnyEntity, EntityType } from '@/core/entities';
import { AlertDialog } from '../dialogs/alert-dialog';

interface EntityTableProps {
  entities: AnyEntity[];
  entityType: EntityType;
  onEdit: (entity: AnyEntity) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
}

export function EntityTable({
  entities,
  entityType,
  onEdit,
  onDelete,
  isLoading = false,
}: EntityTableProps) {
  const [editingId, setEditingId] = useState<number | null>(null);

  if (isLoading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 border-b text-left">Title</th>
            <th className="px-6 py-3 border-b text-left">Meaning</th>
            <th className="px-6 py-3 border-b text-left">Likes</th>
            <th className="px-6 py-3 border-b text-left">Views</th>
            <th className="px-6 py-3 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {entities.map((entity) => (
            <tr key={entity.rid} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{entity.title}</td>
              <td className="px-6 py-4 border-b max-w-md truncate">
                {entity.meaning}
              </td>
              <td className="px-6 py-4 border-b">{entity.likes}</td>
              <td className="px-6 py-4 border-b">{entity.views}</td>
              <td className="px-6 py-4 border-b space-x-2">
                <button
                  onClick={() => onEdit(entity)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <AlertDialog
                  trigger={
                    <button className="text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  }
                  title="Confirm Delete"
                  description="Are you sure you want to delete this item? This action cannot be undone."
                  onConfirm={() => onDelete(entity.rid)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}