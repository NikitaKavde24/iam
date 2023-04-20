import React from "react";
import TableContainer from "./Table.style";

const Table = ({ columns, data }) => {
  return (
    <TableContainer>
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column, columnIndex) => (
              <th
                className="py-6 border-opacity-25 border-solid text-iamblack border-y border-iamblue"
                key={columnIndex}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns?.map((column, columnIndex) => {
                if (typeof column.cell === "function") {
                  return (
                    <td
                      key={`table-cell-${rowIndex}-${columnIndex}`}
                      className="px-2 py-6 text-iamblack"
                    >
                      {column.cell(row)}
                    </td>
                  );
                } else if (
                  typeof row[column.column] === "string" ||
                  typeof row[column.column] === "number"
                ) {
                  return (
                    <td
                      key={`table-cell-${rowIndex}-${columnIndex}`}
                      className="px-2 py-6 text-iamblack"
                    >
                      {column.prefix
                        ? `${column.prefix}-${row[column.column]}`
                        : row[column.column]}
                    </td>
                  );
                } else if (!row[column.column]) {
                  return (
                    <td
                      key={`table-cell-${rowIndex}-${columnIndex}`}
                      className="px-2 py-6 text-iamblack"
                    >
                      ---
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;

