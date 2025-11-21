"use client";

import { Proverb } from "@/core/entities";
import { EmptyState } from "../general/empty-state";
import { LoadingSpinner } from "../general/loading";
import { TableContainer } from "./table-container";
import { TableHeader, TableRow, TableCell } from "./table-parts";
import { TableActions } from "./table-actions";
import { formatDateTime } from "@/core/utils/helpers/utils";
import { Pagination } from "./pagination";

interface ProverbTableProps {
  proverbs: Proverb[];
  onEdit: (proverb: Proverb) => void;
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
  "Proverb",
  "Meaning",
  "Synonyms",
  "Conjugation",
  "Updated",
  "Actions",
];
const COLUMN_WIDTHS = [
  "w-16",
  "",
  "max-w-md",
  "max-w-sm",
  "max-w-sm",
  "w-32",
  "w-32",
];

export function ProverbTable({
  proverbs,
  onEdit,
  onDelete,
  isLoading = false,
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: ProverbTableProps) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-white shadow rounded-lg">
      <TableContainer>
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader columns={COLUMNS} columnWidths={COLUMN_WIDTHS} />
          <tbody className="bg-white divide-y divide-gray-200">
            {proverbs.length === 0 ? (
              <tr>
                <td colSpan={COLUMNS.length} className="px-6 py-24 text-center">
                  <EmptyState entityName="proverbs" />
                </td>
              </tr>
            ) : (
              proverbs.map((proverb) => (
                <TableRow key={proverb.rid}>
                  <TableCell>{proverb.rid}</TableCell>
                  <TableCell className="font-medium">
                    {proverb.title || "-"}
                  </TableCell>
                  <TableCell className="max-w-md truncate">
                    {proverb.meaning || "-"}
                  </TableCell>
                  <TableCell className="max-w-sm truncate">
                    {proverb.synonyms || "-"}
                  </TableCell>
                  <TableCell className="max-w-sm truncate">
                    {proverb.conjugation || "-"}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {proverb.updatedAt
                      ? formatDateTime(proverb.updatedAt, {
                          useNumericFormat: true,
                        })
                      : "-"}
                  </TableCell>
                  <TableCell>
                    <TableActions
                      onEdit={() => onEdit(proverb)}
                      onDelete={() => onDelete(proverb.rid)}
                      entityType="Proverb"
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </tbody>
        </table>
      </TableContainer>

      {proverbs.length > 0 && (
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
