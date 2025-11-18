'use client';

import { Word } from '@/core/entities';
import { EmptyState } from '../general/empty-state';
import { LoadingSpinner } from '../general/loading';
import { TableActions } from './table-actions';
import { TableContainer } from './table-container';
import { TableHeader, TableRow, TableCell } from './table-parts';

interface WordTableProps {
  words: Word[];
  onEdit: (word: Word) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
}

const COLUMNS = ['ID', 'Word', 'Meaning', 'Synonyms', 'Conjugation', 'English', 'Updated', 'Actions'];
const COLUMN_WIDTHS = ['w-16', '', 'max-w-md', 'max-w-sm', 'max-w-sm', '', 'w-32', 'w-32'];

export function WordTable({ words, onEdit, onDelete, isLoading = false }: WordTableProps) {
  if (isLoading) return <LoadingSpinner />;
  if (words.length === 0) return <EmptyState entityName="words" />;

  return (
    <TableContainer>
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader columns={COLUMNS} columnWidths={COLUMN_WIDTHS} />
        <tbody className="bg-white divide-y divide-gray-200">
          {words.map((word) => (
            <TableRow key={word.rid}>
              <TableCell>{word.rid}</TableCell>
              <TableCell className="font-medium">{word.title || '-'}</TableCell>
              <TableCell className="max-w-md truncate">{word.meaning || '-'}</TableCell>
              <TableCell className="max-w-sm truncate">{word.synonyms || '-'}</TableCell>
              <TableCell className="max-w-sm truncate">{word.conjugation || '-'}</TableCell>
              <TableCell>{word.english || '-'}</TableCell>
              <TableCell className="whitespace-nowrap">
                {word.updatedAt ? new Date(word.updatedAt).toLocaleDateString() : '-'}
              </TableCell>
              <TableCell>
                <TableActions
                  onEdit={() => onEdit(word)}
                  onDelete={() => onDelete(word.rid)}
                  entityType="Word"
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}