import { Box, Button } from "@mui/material";
import React from "react";

function Index({ totalPage, currPage, pageCount, setPage }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
      {Array.from({ length: totalPage / pageCount }, (v, k) => (
        <Box
          sx={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            background: `${currPage == k ? "grey" : ""}`,
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ":hover": {
              background: "grey",
            },
            cursor: "pointer",
          }}
          onClick={() => setPage(k)}
          key={k}
        >
          {k + 1}
        </Box>
      ))}
    </Box>
  );
}

export default Index;
