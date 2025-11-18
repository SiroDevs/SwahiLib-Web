'use client';

import { Proverb } from '@/core/entities';
import { EmptyState } from '../general/empty-state';
import { LoadingSpinner } from '../general/loading';
import { TableActions } from './table-actions';
import { TableContainer } from './table-container';
import { TableHeader, TableRow, TableCell } from './table-parts';

interface ProverbTableProps {
  proverbs: Proverb[];
  onEdit: (proverb: Proverb) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
}

const COLUMNS = ['ID', 'Proverb', 'Meaning', 'Synonyms', 'Conjugation', 'Updated', 'Actions'];
const COLUMN_WIDTHS = ['w-16', '', 'max-w-md', 'max-w-sm', 'max-w-sm', 'w-32', 'w-32'];

export function ProverbTable({ proverbs, onEdit, onDelete, isLoading = false }: ProverbTableProps) {
  if (isLoading) return <LoadingSpinner />;
  if (proverbs.length === 0) return <EmptyState entityName="proverbs" />;

  return (
    <TableContainer>
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader columns={COLUMNS} columnWidths={COLUMN_WIDTHS} />
        <tbody className="bg-white divide-y divide-gray-200">
          {proverbs.map((proverb) => (
            <TableRow key={proverb.rid}>
              <TableCell>{proverb.rid}</TableCell>
              <TableCell className="font-medium">{proverb.title || '-'}</TableCell>
              <TableCell className="max-w-md truncate">{proverb.meaning || '-'}</TableCell>
              <TableCell className="max-w-sm truncate">{proverb.synonyms || '-'}</TableCell>
              <TableCell className="max-w-sm truncate">{proverb.conjugation || '-'}</TableCell>
              <TableCell className="whitespace-nowrap">
                {proverb.updatedAt ? new Date(proverb.updatedAt).toLocaleDateString() : '-'}
              </TableCell>
              <TableCell>
                <TableActions
                  onEdit={() => onEdit(proverb)}
                  onDelete={() => onDelete(proverb.rid)}
                  entityType="Proverb"
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}