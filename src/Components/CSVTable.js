// src/components/CsvTable.js
import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const CSVTable = () => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    fetch("/data.csv")
      .then((response) => response.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setCsvData(result.data);
          },
        });
      });
  }, []);

  // Styling consistent with the rest of the project
  const tableContainerStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    maxWidth: "90%",
    margin: "auto",
    height: "70vh",                 // Fixed height
    display: "flex",
    flexDirection: "column",
  };

  const scrollWrapperStyle = {
    overflowY: "auto",              // Scroll only this part
    flex: 1,                        // Take available space
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "16px",
  };

  const headerStyle = {
    backgroundColor: "#5356ad",
    color: "#fff",
    padding: "12px",
    textAlign: "left",
    position: "sticky",
    top: 0,
    zIndex: 1,
  };

  const cellStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    color: "#333",
    backgroundColor: "#f9f9f9",
  };

  const titleStyle = {
    color: "#5356ad",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
  };

  return (
    <div style={tableContainerStyle}>
      <h2 style={titleStyle}>📊 Data Preview</h2>
      {csvData.length > 0 ? (
        <div style={scrollWrapperStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                {Object.keys(csvData[0]).map((header) => (
                  <th style={headerStyle} key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td style={cellStyle} key={j}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#888" }}>Loading CSV data...</p>
      )}
    </div>
  );
};

export default CSVTable;
