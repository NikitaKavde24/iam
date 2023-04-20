import React from "react";
import TableContainer from "./Table.style";
import { TiArrowUnsorted } from "react-icons/ti";
const Table = ({ columns, data }) => {
  return (
    <TableContainer>
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column, columnIndex) => (
              <th
                className="px-3 py-6 border-opacity-25 border-solid text-iamblack border-y border-iamblue"
                key={columnIndex}
              >
                {/* {column.label} */}

                <div className="flex items-center justify-center gap-1">
                  {column.breakWord ? (
                    <div>{breakSpaceString(column.label)}</div>
                  ) : (
                    column.label
                  )}
                  {/* <div>{breakSpaceString(column.label)}</div> */}
                  <TiArrowUnsorted className="text-iamblue-400 " />
                </div>
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

const breakSpaceString = (str) => {
  let words = str.trim().split(" ");
  if (words.length < 2) {
    return str;
  } else {
    return (
      <>
        <div>{words[0]}</div>
        <div>{words.slice(1).join(" ")}</div>
      </>
    );
  }
};
