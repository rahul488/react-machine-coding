import { Box } from "@mui/material";
import React from "react";

function Boxes({ boxes, handleBoxClick }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3,50px)",
        gridTemplateRows: "repeat(3,50px)",
        gap: "0.5rem",
      }}
    >
      {boxes.map((box) => {
        return box.isVisible ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: `${box.background}`,
            }}
            onClick={() => handleBoxClick(box)}
            key={box.id}
          >
            {box.id}
          </Box>
        ) : (
          <Box key={box.id}></Box>
        );
      })}
    </Box>
  );
}

export default Boxes;
