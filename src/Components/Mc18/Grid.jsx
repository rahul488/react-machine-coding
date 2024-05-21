import { Box } from "@mui/material";
import React from "react";

function Grid({ matrix }) {
  function createGrid() {
    const grid = [];
    let counter = 1;
    for (let i = 0; i < matrix.cols; i++) {
      const row = [];
      for (let j = 0; j < matrix.rows; j++) {
        if (i % 2 == 0) {
          row.push(counter++);
        } else {
          row.unshift(counter++);
        }
      }
      grid.push(row);
    }
    return grid;
  }

  return (
    <Box style={{ display: "flex" }}>
      {createGrid().map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {row.map((value, colIndex) => (
            <div
              key={colIndex}
              style={{
                border: "1px solid black",
                padding: "5px",
                width: "50px",
                textAlign: "center",
              }}
            >
              {value}
            </div>
          ))}
        </div>
      ))}
    </Box>
  );
}

export default Grid;
