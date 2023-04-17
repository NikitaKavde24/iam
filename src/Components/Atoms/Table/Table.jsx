import React from "react";
import TableContainer from "./Table.style";

const Table = ({ columns = tableColumns, data = sampleTableData }) => {
  return (
    <TableContainer>
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column, columnIndex) => (
              <th
                className="px-2 py-6 border-opacity-25 border-solid text-iamblack border-y border-iamblue"
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
                      {column.cell(row, rowIndex === hoveredRow)}
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

export const tableColumns = [
  { column: "S.No", label: "S.No" },
  { column: "Project Name", label: "Project Name" },
  {
    column: "Ticket ID",
    label: "Ticket ID",
  },
  {
    column: "Sub Ticket ID",
    label: "Sub Ticket ID",
  },
  {
    column: "Description",
    label: "Description",
  },
  {
    column: "Start Date",
    label: "Start Date",
  },
  {
    column: "Expected End Date",
    label: "Expected End Date",
  },
  {
    column: "Actual End Date",
    label: "Actual End Date",
  },
  {
    column: "Actual TAT",
    label: "Actual TAT",
  },
  {
    column: "Comment",
    label: "Comment",
  },
  {
    column: "Status",
    label: "Status",
  },
  {
    column: "Actions",
    label: "Actions",
  },
];

export const sampleTableData = [
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "COmpleted",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "23-Aipril-2023",
    "Expected End Date": "23-Aipril-2023",
    "Satrt Date": "23-Aipril-2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "COmpleted",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "23-Aipril-2023",
    "Expected End Date": "23-Aipril-2023",
    "Satrt Date": "23-Aipril-2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "COmpleted",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "23-Aipril-2023",
    "Expected End Date": "23-Aipril-2023",
    "Satrt Date": "23-Aipril-2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "COmpleted",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "23-Aipril-2023",
    "Expected End Date": "23-Aipril-2023",
    "Satrt Date": "23-Aipril-2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "COmpleted",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "23-Aipril-2023",
    "Expected End Date": "23-Aipril-2023",
    "Satrt Date": "23-Aipril-2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "COmpleted",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "23-Aipril-2023",
    "Expected End Date": "23-Aipril-2023",
    "Satrt Date": "23-Aipril-2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "COmpleted",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "23-Aipril-2023",
    "Expected End Date": "23-Aipril-2023",
    "Satrt Date": "23-Aipril-2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "COmpleted",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "23-Aipril-2023",
    "Expected End Date": "23-Aipril-2023",
    "Satrt Date": "23-Aipril-2023",
  },
];
