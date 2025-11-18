"use client";

import { useState } from "react";
import { useEntityCrud } from "@/presentation/hooks/use-entity-crud";
import { container } from "@/infrastucture/di/container";
import DashboardNavbar from "@/presentation/components/action/dashboard-navbar";
import { IdiomTable, ProverbTable } from "@/presentation/components/tables";
import { SayingTable, WordTable } from "@/presentation/components/tables";
import { EntityType, AnyEntity, entityTypes } from "@/core/entities";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<EntityType>("idioms");
  const [editingEntity, setEditingEntity] = useState<AnyEntity | null>(null);
  const { entities, deleteEntity, updateEntity } = useEntityCrud(
    container.idiomUseCase,
    activeTab
  );

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

  const renderTable = () => {
    switch (activeTab) {
      case "words":
        return (
          <WordTable
            words={entities}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      case "idioms":
        return (
          <IdiomTable
            idioms={entities}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      case "proverbs":
        return (
          <ProverbTable
            proverbs={entities}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      case "sayings":
        return (
          <SayingTable
            sayings={entities}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <DashboardNavbar />
      <div className="container mx-auto p-6">
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

        {renderTable()}

        {editingEntity && <div>{/* Implement your edit form here */}</div>}
      </div>
    </div>
  );
}
