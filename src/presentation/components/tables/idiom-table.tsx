"use client";

import { Idiom } from "@/core/entities";
import { EmptyState } from "../general/empty-state";
import { LoadingSpinner } from "../general/loading";
import { TableContainer } from "./table-container";
import { TableHeader, TableRow, TableCell } from "./table-parts";
import { TableActions } from "./table-actions";
import { formatDateTime } from "@/core/utils/helpers/utils";
import { Pagination } from "./pagination";

interface IdiomTableProps {
  idioms: Idiom[];
  onEdit: (idiom: Idiom) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const COLUMNS = ["ID", "Idiom", "Meaning", "Updated", "Actions"];
const COLUMN_WIDTHS = ["w-16", "", "max-w-md", "w-32", "w-32"];

export function IdiomTable({
  idioms,
  onEdit,
  onDelete,
  isLoading = false,
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: IdiomTableProps) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-white shadow rounded-lg">
      <TableContainer>
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader columns={COLUMNS} columnWidths={COLUMN_WIDTHS} />
          <tbody className="bg-white divide-y divide-gray-200">
            {idioms.length === 0 ? (
              <tr>
                <td colSpan={COLUMNS.length} className="px-6 py-24 text-center">
                  <EmptyState entityName="idioms" />
                </td>
              </tr>
            ) : (
              idioms.map((idiom) => (
                <TableRow key={idiom.rid}>
                  <TableCell>{idiom.rid}</TableCell>
                  <TableCell className="font-medium">
                    {idiom.title || "-"}
                  </TableCell>
                  <TableCell className="max-w-md truncate">
                    {idiom.meaning || "-"}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {idiom.updatedAt
                      ? formatDateTime(idiom.updatedAt, {
                          useNumericFormat: true,
                        })
                      : "-"}
                  </TableCell>
                  <TableCell>
                    <TableActions
                      onEdit={() => onEdit(idiom)}
                      onDelete={() => onDelete(idiom.rid)}
                      entityType="Idiom"
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </tbody>
        </table>
      </TableContainer>

      {idioms.length > 0 && (
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
