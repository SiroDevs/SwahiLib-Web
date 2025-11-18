interface StatsSectionProps {
  likes: number;
  views: number;
  createdAt: Date;
  updatedAt?: Date;
}

export function StatsSection({ likes, views, createdAt, updatedAt }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
      <ReadOnlyField 
        label="Likes" 
        value={likes} 
      />
      <ReadOnlyField 
        label="Views" 
        value={views} 
      />
      <ReadOnlyField 
        label="Created" 
        value={new Date(createdAt).toLocaleDateString()} 
      />
      <ReadOnlyField 
        label="Last Updated" 
        value={updatedAt ? new Date(updatedAt).toLocaleDateString() : "Never"} 
      />
    </div>
  );
}

interface ReadOnlyFieldProps {
  label: string;
  value: React.ReactNode;
}

export function ReadOnlyField({ label, value }: ReadOnlyFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="px-3 py-2 bg-gray-50 rounded-md text-gray-700">
        {value}
      </div>
    </div>
  );
}
