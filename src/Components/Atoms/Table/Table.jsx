import React from "react";
import PropTypes from "prop-types";
import TableContainer from "./Table.style";
import { TiArrowUnsorted } from "react-icons/ti";

const Table = ({ columns, data }) => {
  const renderCell = (row, column) => {
    if (typeof column.cell === "function") {
      return <td className="px-2 py-6 text-iamblack">{column.cell(row)}</td>;
    } else if (typeof row[column.column] === "string" || typeof row[column.column] === "number") {
      const cellValue = column.prefix ? `${column.prefix}-${row[column.column]}` : row[column.column];
      return (
        <td className="px-2 py-6 text-iamblack">
          <div className="flex items-center justify-center">{cellValue}</div>
        </td>
      );
    } else if (!row[column.column]) {
      return (
        <td className="px-2 py-6 text-iamblack">
          <div className="flex items-center justify-center">---</div>
        </td>
      );
    }
  };

  const renderHeader = () => {
    return (
      <tr>
        {columns.map((column, index) => (
          <th
            className="px-3 py-4 border-opacity-25 border-solid cursor-pointer bg-iamblue-700 text-iamblack border-y border-iamblue"
            key={`table-header-${index}`}
          >
            <div className="flex items-center justify-center gap-1">
              {column.breakWord ? (
                <div>{breakSpaceString(column.label)}</div>
              ) : (
                column.label
              )}
              <TiArrowUnsorted className="text-[16px] text-iamblue-400" />
            </div>
          </th>
        ))}
      </tr>
    );
  };

  const renderRows = () => {
    return data.map((row, rowIndex) => (
      <tr key={`table-row-${rowIndex}`}>
        {columns.map((column, columnIndex) => (
          <React.Fragment key={`table-cell-${rowIndex}-${columnIndex}`}>
            {renderCell(row, column)}
          </React.Fragment>
        ))}
      </tr>
    ));
  };

  return (
    <TableContainer>
      <table className="w-full">
        <thead>{renderHeader()}</thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </TableContainer>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      column: PropTypes.string.isRequired,
      prefix: PropTypes.string,
      cell: PropTypes.func,
      breakWord: PropTypes.bool,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const breakSpaceString = (str) => {
  const words = str.trim().split(" ");
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

export default Table;