"use client";

import { Saying } from "@/core/entities";
import { EmptyState } from "../general/empty-state";
import { LoadingSpinner } from "../general/loading";
import { TableContainer } from "./table-container";
import { TableHeader, TableRow, TableCell } from "./table-parts";
import { TableActions } from "./table-actions";
import { formatDateTime } from "@/core/utils/helpers/utils";
import { Pagination } from "./pagination";

interface SayingTableProps {
  sayings: Saying[];
  onEdit: (saying: Saying) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const COLUMNS = ["ID", "Saying", "Meaning", "Updated", "Actions"];
const COLUMN_WIDTHS = ["w-16", "", "max-w-md", "w-32", "w-32"];

export function SayingTable({
  sayings,
  onEdit,
  onDelete,
  isLoading = false,
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: SayingTableProps) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-white shadow rounded-lg">
      <TableContainer>
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader columns={COLUMNS} columnWidths={COLUMN_WIDTHS} />
          <tbody className="bg-white divide-y divide-gray-200">
            {sayings.length === 0 ? (
              <tr>
                <td colSpan={COLUMNS.length} className="px-6 py-24 text-center">
                  <EmptyState entityName="sayings" />
                </td>
              </tr>
            ) : (
              sayings.map((saying) => (
                <TableRow key={saying.rid}>
                  <TableCell>{saying.rid}</TableCell>
                  <TableCell className="font-medium">
                    {saying.title || "-"}
                  </TableCell>
                  <TableCell className="max-w-md truncate">
                    {saying.meaning || "-"}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {saying.updatedAt
                      ? formatDateTime(saying.updatedAt, {
                          useNumericFormat: true,
                        })
                      : "-"}
                  </TableCell>
                  <TableCell>
                    <TableActions
                      onEdit={() => onEdit(saying)}
                      onDelete={() => onDelete(saying.rid)}
                      entityType="Saying"
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </tbody>
        </table>
      </TableContainer>

      {sayings.length > 0 && (
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
