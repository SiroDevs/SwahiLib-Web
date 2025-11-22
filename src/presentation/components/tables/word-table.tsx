"use client";

import { Word } from "@/core/entities";
import { EmptyState } from "../general/empty-state";
import { LoadingSpinner } from "../general/loading";
import { TableContainer } from "./table-container";
import { TableHeader, TableRow, TableCell } from "./table-parts";
import { TableActions } from "./table-actions";
import { formatDateTime } from "@/core/utils/helpers/utils";
import { Pagination } from "./pagination";

interface WordTableProps {
  words: Word[];
  onEdit: (word: Word) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const COLUMNS = [
  "ID",
  "Word",
  "Meaning",
  "Synonyms",
  "Conjugation",
  "English",
  "Updated",
  "Actions",
];
const COLUMN_WIDTHS = [
  "w-16",
  "",
  "max-w-md",
  "max-w-sm",
  "max-w-sm",
  "",
  "w-32",
  "w-32",
];

export function WordTable({
  words,
  onEdit,
  onDelete,
  isLoading = false,
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: WordTableProps) {
  if (isLoading) return <LoadingSpinner />;
  const handleRowClick = (word: Word, event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) {
      return;
    }
    onEdit(word);
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <TableContainer>
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader columns={COLUMNS} columnWidths={COLUMN_WIDTHS} />
          <tbody className="bg-white divide-y divide-gray-200">
            {words.length === 0 ? (
              <tr>
                <td colSpan={COLUMNS.length} className="px-6 py-24 text-center">
                  <EmptyState entityName="words" />
                </td>
              </tr>
            ) : (
              words.map((word) => (
                <TableRow
                  key={word.rid}
                  onClick={(e) => handleRowClick(word, e)}
                >
                  <TableCell>{word.rid}</TableCell>
                  <TableCell className="font-medium">
                    {word.title || "-"}
                  </TableCell>
                  <TableCell className="max-w-md truncate">
                    {word.meaning || "-"}
                  </TableCell>
                  <TableCell className="max-w-sm truncate">
                    {word.synonyms || "-"}
                  </TableCell>
                  <TableCell className="max-w-sm truncate">
                    {word.conjugation || "-"}
                  </TableCell>
                  <TableCell>{word.english || "-"}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    {word.updatedAt
                      ? formatDateTime(word.updatedAt, {
                          useNumericFormat: true,
                        })
                      : "-"}
                  </TableCell>
                  <TableCell>
                    <TableActions
                      onEdit={() => onEdit(word)}
                      onDelete={() => onDelete(word.rid)}
                      entityType="Word"
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </tbody>
        </table>
      </TableContainer>

      {words.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}
