import { BaseInput, Textarea } from "./form-input";

interface ExtendedFieldsProps {
  synonyms: string;
  conjugation: string;
  errors: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function ExtendedFields({ 
  synonyms, 
  conjugation, 
  errors, 
  onChange 
}: ExtendedFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BaseInput
        id="synonyms"
        label="Synonyms"
        value={synonyms}
        onChange={(e) => onChange('synonyms', e.target.value)}
        error={errors.synonyms}
        placeholder="Enter synonyms (comma separated)..."
      />
      <BaseInput
        id="conjugation"
        label="Conjugation"
        value={conjugation}
        onChange={(e) => onChange('conjugation', e.target.value)}
        error={errors.conjugation}
        placeholder="Enter conjugation..."
      />
    </div>
  );
}

interface CommonFieldsProps {
  title: string;
  meaning: string;
  entityName: string;
  errors: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function CommonFields({ 
  title, 
  meaning, 
  entityName, 
  errors, 
  onChange 
}: CommonFieldsProps) {
  return (
    <>
      <BaseInput
        id="title"
        label={entityName}
        value={title}
        onChange={(e) => onChange('title', e.target.value)}
        error={errors.title}
        required
        placeholder={`Enter ${entityName}...`}
      />
      <Textarea
        id="meaning"
        label="Meaning"
        value={meaning}
        onChange={(e) => onChange('meaning', e.target.value)}
        rows={3}
        error={errors.meaning}
        required
        placeholder="Enter meaning..."
      />
    </>
  );
}

interface EnglishFieldProps {
  english: string;
  error?: string;
  onChange: (value: string) => void;
}

export function EnglishField({ english, error, onChange }: EnglishFieldProps) {
  return (
    <BaseInput
      id="english"
      label="English Translation"
      value={english}
      onChange={(e) => onChange(e.target.value)}
      error={error}
      required
      placeholder="Enter English translation..."
    />
  );
}