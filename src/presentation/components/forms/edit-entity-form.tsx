"use client";

import { useState, useEffect } from "react";
import { AnyEntity, EntityType, Word, Proverb } from "@/core/entities";
import { FormHeader, FormActions, ReadOnlyField } from "./form-parts";
import { CommonFields, EnglishField, ExtendedFields } from "./form-extensions";
import { formatDateTime } from "@/core/utils/helpers/utils";

interface EditEntityFormProps {
  entity: AnyEntity;
  entityType: EntityType;
  onSave: (entity: AnyEntity) => Promise<void>;
  onCancel: () => void;
  isSaving?: boolean;
}

export function EditEntityForm({
  entity,
  entityType,
  onSave,
  onCancel,
  isSaving = false,
}: EditEntityFormProps) {
  const [formData, setFormData] = useState<Partial<AnyEntity>>(entity);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormData(entity);
    setErrors({});
  }, [entity]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title?.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.meaning?.trim()) {
      newErrors.meaning = "Meaning is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!validateForm()) {
      return;
    }

    try {
      await onSave({ ...entity, ...formData });
    } catch (error) {
      console.error("Failed to save entity:", error);
    }
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave({ ...entity, ...formData }).catch(error => {
        console.error("Failed to save entity:", error);
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onCancel]);

  const getEntityDisplayName = (type: EntityType): string => {
    return type.slice(0, -1);
  };

  const entityName = getEntityDisplayName(entityType);
  const hasExtendedFields = entityType === "words" || entityType === "proverbs";
  const hasEnglishField = entityType === "words";

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <FormHeader title={`Edit ${entityName}`} onClose={onCancel} />

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <CommonFields
            title={formData.title || ""}
            meaning={formData.meaning || ""}
            entityName={entityName}
            errors={errors}
            onChange={handleChange}
          />

          {hasExtendedFields && (
            <ExtendedFields
              synonyms={(formData as Word | Proverb).synonyms || ""}
              conjugation={(formData as Word | Proverb).conjugation || ""}
              errors={errors}
              onChange={handleChange}
            />
          )}

          {hasEnglishField && (
            <EnglishField
              english={(formData as Word).english || ""}
              error={errors.english}
              onChange={(value) => handleChange("english", value)}
            />
          )}
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 pt-4 border-t">
            <ReadOnlyField
              label="Created"
              value={formatDateTime(entity.createdAt)}
            />
            <ReadOnlyField
              label="Last Updated"
              value={
                entity.updatedAt ? formatDateTime(entity.updatedAt) : "Never"
              }
            />
          </div>

          <FormActions
            onCancel={onCancel}
            onSave={handleSave}
            isSaving={isSaving}
          />
        </form>
      </div>
    </div>
  );
}