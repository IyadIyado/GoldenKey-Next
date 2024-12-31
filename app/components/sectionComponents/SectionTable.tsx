import React from "react";

interface SectionTableProps {
  table: {
    headers: string[];
    rows: string[][];
  };
}

const SectionTable: React.FC<SectionTableProps> = ({ table }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {table.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionTable;
