import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Grid from "./Grid";

function Mc18() {
  const [matrix, setMatrix] = useState({});
  const [isClicked, setClicked] = useState(false);

  function changedCols(e) {
    const cols = e.target.value;
    setMatrix((prev) => ({ ...prev, cols: cols }));
    setClicked(false)
  }
  function changedRows(e) {
    const rows = e.target.value;
    setMatrix((prev) => ({ ...prev, rows: rows }));
    setClicked(false)
  }

  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField variant="outlined" onChange={changedRows} placeholder="Enter Rows" />
      <TextField variant="outlined" onChange={changedCols} placeholder="Enter Cols" />
      <Button onClick={() => setClicked(true)} variant="contained">Create Grid</Button>
      {isClicked && <Grid matrix={matrix} />}
    </Box>
  );
}

export default Mc18;
