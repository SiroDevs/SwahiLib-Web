import { X } from 'lucide-react';

interface FormHeaderProps {
  title: string;
  onClose: () => void;
}

export function FormHeader({ title, onClose }: FormHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6 border-b">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <X size={20} />
      </button>
    </div>
  );
}

interface FormActionsProps {
  onCancel: () => void;
  onSave: () => void;
  isSaving?: boolean;
  saveLabel?: string;
  cancelLabel?: string;
}

export function FormActions({ 
  onCancel, 
  onSave, 
  isSaving = false, 
  saveLabel = "Save Changes",
  cancelLabel = "Cancel"
}: FormActionsProps) {
  return (
    <div className="flex justify-end space-x-3 pt-6 border-t">
      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isSaving}
      >
        {cancelLabel}
      </button>
      <button
        type="button"
        onClick={onSave}
        disabled={isSaving}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSaving ? "Saving..." : saveLabel}
      </button>
    </div>
  );
}
