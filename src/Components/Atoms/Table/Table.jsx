import React from "react";
import { PrimaryButton } from "../Buttons/Buttons";
import { ImPencil } from "react-icons/im";
import Chip from "../Chip/Chip";
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
    cell: (row) => {
      return (
        <div className="w-[168px] flex justify-between border border-[#CEE3FC] h-10 rounded-[10px]">
          <span className="flex items-center w-full ml-1 text-xs text-iamgray-50 leading-[17px">
            Comment...
          </span>
          <button className="w-[37px] flex justify-center items-center border-l border-[#CEE3FC] rou">
            {" "}
            <ImPencil className="w-5 h-5 text-iamblue" />
          </button>
        </div>
      );
    },
  },
  {
    column: "Status",
    label: "Status",
    cell: (row) => {
      return <Chip status={row.Status}>{row.Status}</Chip>;
    },
  },
  {
    column: "Actions",
    label: "Actions",
    cell: (row) => {
      return (
        <div>
          <PrimaryButton>
            <ImPencil className="w-8 h-6" />
          </PrimaryButton>
        </div>
      );
    },
  },
];

export const sampleTableData = [
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "Hold",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "Apr 06, 2023",
    "Expected End Date": "Apr 06, 2023",
    "Satrt Date": "Apr 06, 2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "Hold",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "Apr 06, 2023",
    "Expected End Date": "Apr 06, 2023",
    "Satrt Date": "Apr 06, 2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "Hold",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "Apr 06, 2023",
    "Expected End Date": "Apr 06, 2023",
    "Satrt Date": "Apr 06, 2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "Done",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "Apr 06, 2023",
    "Expected End Date": "Apr 06, 2023",
    "Satrt Date": "Apr 06, 2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "Done",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "Apr 06, 2023",
    "Expected End Date": "Apr 06, 2023",
    "Satrt Date": "Apr 06, 2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "In Progress",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "Apr 06, 2023",
    "Expected End Date": "Apr 06, 2023",
    "Satrt Date": "Apr 06, 2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "Done",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "Apr 06, 2023",
    "Expected End Date": "Apr 06, 2023",
    "Satrt Date": "Apr 06, 2023",
  },
  {
    "S.No": "01",
    Description: "This is some description",
    "Ticket ID": "09865",
    "Project Name": "Xpress",
    Actions: "Edit/delete",
    Status: "Done",
    Comment: "updated",
    "Actual TAT": "20:00",
    "Actual End Date": "Apr 06, 2023",
    "Expected End Date": "Apr 06, 2023",
    "Satrt Date": "Apr 06, 2023",
  },
];
