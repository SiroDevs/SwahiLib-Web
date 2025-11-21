"use client";

import { useState } from "react";
import { usePaginatedEntity } from "@/presentation/hooks/use-paginated-entity";
import { container } from "@/infrastucture/di/container";
import DashboardNavbar from "@/presentation/components/action/dashboard-navbar";
import { IdiomTable, ProverbTable } from "@/presentation/components/tables";
import { SayingTable, WordTable } from "@/presentation/components/tables";
import { EditEntityForm } from "@/presentation/components/forms/edit-entity-form";
import { EntityType, AnyEntity, entityTypes } from "@/core/entities";

const PAGE_SIZE = 10;

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<EntityType>("idioms");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingEntity, setEditingEntity] = useState<AnyEntity | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const { 
    entities, 
    pagination, 
    deleteEntity, 
    updateEntity, 
    isLoading,
    isFetching 
  } = usePaginatedEntity(
    getUseCase(activeTab),
    activeTab,
    { page: currentPage, pageSize: PAGE_SIZE }
  );

  function getUseCase(entityType: EntityType) {
    switch (entityType) {
      case "words":
        return container.wordUseCase;
      case "idioms":
        return container.idiomUseCase;
      case "proverbs":
        return container.proverbUseCase;
      case "sayings":
        return container.sayingUseCase;
      default:
        return container.idiomUseCase;
    }
  }

  const handleEdit = (entity: AnyEntity) => {
    setEditingEntity(entity);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteEntity(id);
      if (entities.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error("Failed to delete entity:", error);
    }
  };

  const handleSave = async (updatedEntity: AnyEntity) => {
    setIsSaving(true);
    try {
      await updateEntity({
        id: updatedEntity.rid,
        data: updatedEntity,
      });
      setEditingEntity(null);
    } catch (error) {
      console.error("Failed to update entity:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setEditingEntity(null);
  };

  const handleTabChange = (tab: EntityType) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setEditingEntity(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderTable = () => {
    const commonProps = {
      isLoading: isLoading || isFetching,
      currentPage,
      totalPages: pagination.totalPages,
      totalItems: pagination.total,
      pageSize: PAGE_SIZE,
      onPageChange: handlePageChange,
    };

    switch (activeTab) {
      case "words":
        return (
          <WordTable
            words={entities}
            onEdit={handleEdit}
            onDelete={handleDelete}
            {...commonProps}
          />
        );
      case "idioms":
        return (
          <IdiomTable
            idioms={entities}
            onEdit={handleEdit}
            onDelete={handleDelete}
            {...commonProps}
          />
        );
      case "proverbs":
        return (
          <ProverbTable
            proverbs={entities}
            onEdit={handleEdit}
            onDelete={handleDelete}
            {...commonProps}
          />
        );
      case "sayings":
        return (
          <SayingTable
            sayings={entities}
            onEdit={handleEdit}
            onDelete={handleDelete}
            {...commonProps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <DashboardNavbar />
      <div className="container mx-auto p-2">
        <div className="flex space-x-4 mb-2">
          {entityTypes.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {renderTable()}

        {editingEntity && (
          <EditEntityForm
            entity={editingEntity}
            entityType={activeTab}
            onSave={handleSave}
            onCancel={handleCancel}
            isSaving={isSaving}
          />
        )}
      </div>
    </div>
  );
}