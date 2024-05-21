import { Box, Typography } from "@mui/material";
import React from "react";

function Denied() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography variant="h6"> You don't have permission</Typography>
    </Box>
  );
}

export default Denied;
