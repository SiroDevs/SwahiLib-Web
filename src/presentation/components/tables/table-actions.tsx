import { AlertDialog } from '../dialogs/alert-dialog';

interface TableActionsProps {
  onEdit: () => void;
  onDelete: () => void;
  entityType: string;
}

export function TableActions({ onEdit, onDelete, entityType }: TableActionsProps) {
  return (
    <div className="space-x-2">
      <button
        onClick={onEdit}
        className="text-blue-600 hover:text-blue-900 transition-colors"
      >
        Edit
      </button>
      <AlertDialog
        trigger={
          <button className="text-red-600 hover:text-red-900 transition-colors">
            Delete
          </button>
        }
        title={`Delete ${entityType}`}
        description={`Are you sure you want to delete this ${entityType}? This action cannot be undone.`}
        onConfirm={onDelete}
      />
    </div>
  );
}