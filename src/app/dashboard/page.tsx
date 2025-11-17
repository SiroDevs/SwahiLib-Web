"use client";

import { useState } from "react";
import { useEntityCrud } from "@/presentation/hooks/use-entity-crud";
import { AnyEntity, EntityType } from "@/core/entities";
import { container } from "@/infrastucture/di/container";
import { EntityTable } from "@/presentation/components/general/entity-table";
import { supabase } from "@/infrastucture/supabase/client";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<EntityType>("idioms");
  const [editingEntity, setEditingEntity] = useState<AnyEntity | null>(null);
  // const [user, setUser] = useState<any>(null);

  const { entities, deleteEntity, updateEntity } = useEntityCrud(
    container.idiomUseCase,
    activeTab
  );

  // useEffect(() => {
  //   const getUser = async () => {
  //     const { data: { user } } = await supabase.auth.getUser();
  //     setUser(user);
  //   };

  //   getUser();
  // }, []);

  const handleEdit = (entity: AnyEntity) => {
    setEditingEntity(entity);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteEntity(id);
    } catch (error) {
      console.error("Failed to delete entity:", error);
    }
  };

  const entityTypes: EntityType[] = ["idioms", "proverbs", "sayings", "words"];

  // if (!user) {
  //   return (
  //     <div className="container mx-auto p-6">
  //       <div className="text-center">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="flex space-x-4 mb-6">
        {entityTypes.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <EntityTable
        entities={entities}
        entityType={activeTab}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {editingEntity && <div>{/* Implement your edit form here */}</div>}
    </div>
  );
}
