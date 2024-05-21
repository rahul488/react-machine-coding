import { Box } from "@mui/material";
import { useEffect, useState } from "react";

/**
 *
 *  PROGRESS BAR IN REACT JS
 *
 */

function Mc12() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (width <= 80) {
        setWidth((prev) => prev + 20);
      } else {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [width]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <Box
        sx={{
          width: "400px",
          borderRadius: "20px",
          background: "#eee",
          height: "20px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: `${width}%`,
            background: "green",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "50%",
            color: "black",
          }}
        >
          {width}%
        </Box>
      </Box>
    </Box>
  );
}

export default Mc12;
