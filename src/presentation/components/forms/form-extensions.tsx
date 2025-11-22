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
    <>
      <BaseInput
        id="synonyms"
        label="Synonyms"
        value={synonyms}
        onChange={(e) => onChange('synonyms', e.target.value)}
        error={errors.synonyms}
        placeholder="Enter synonyms (comma separated)..."
      />
      <Textarea
        id="meaning"
        label={`Elaborate on the proverb`}
        value={conjugation}
        onChange={(e) => onChange('conjugation', e.target.value)}
        rows={3}
        error={errors.conjugation}
        required
        placeholder="Enter elaboration ..."
      />
    </>
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
        label={`The ${entityName}`}
        value={title}
        onChange={(e) => onChange('title', e.target.value)}
        error={errors.title}
        required
        placeholder={`Enter ${entityName}...`}
      />
      <Textarea
        id="meaning"
        label={`Meaning of the ${entityName}`}
        value={meaning}
        onChange={(e) => onChange('meaning', e.target.value)}
        rows={5}
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
      label="English translation"
      value={english}
      onChange={(e) => onChange(e.target.value)}
      error={error}
      required
      placeholder="Enter English translation..."
    />
  );
}