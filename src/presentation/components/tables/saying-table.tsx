'use client';

import { Saying } from '@/core/entities';
import { EmptyState } from '../general/empty-state';
import { LoadingSpinner } from '../general/loading';
import { TableActions } from './table-actions';
import { TableContainer } from './table-container';
import { TableHeader, TableRow, TableCell } from './table-parts';

interface SayingTableProps {
  sayings: Saying[];
  onEdit: (saying: Saying) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
}

const COLUMNS = ['ID', 'Saying', 'Meaning', 'Updated', 'Actions'];
const COLUMN_WIDTHS = ['w-16', '', 'max-w-md', 'w-32', 'w-32'];

export function SayingTable({ sayings, onEdit, onDelete, isLoading = false }: SayingTableProps) {
  if (isLoading) return <LoadingSpinner />;
  if (sayings.length === 0) return <EmptyState entityName="sayings" />;

  return (
    <TableContainer>
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader columns={COLUMNS} columnWidths={COLUMN_WIDTHS} />
        <tbody className="bg-white divide-y divide-gray-200">
          {sayings.map((saying) => (
            <TableRow key={saying.rid}>
              <TableCell>{saying.rid}</TableCell>
              <TableCell className="font-medium">{saying.title || '-'}</TableCell>
              <TableCell className="max-w-md truncate">{saying.meaning || '-'}</TableCell>
              <TableCell className="whitespace-nowrap">
                {saying.updatedAt ? new Date(saying.updatedAt).toLocaleDateString() : '-'}
              </TableCell>
              <TableCell>
                <TableActions
                  onEdit={() => onEdit(saying)}
                  onDelete={() => onDelete(saying.rid)}
                  entityType="Saying"
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}