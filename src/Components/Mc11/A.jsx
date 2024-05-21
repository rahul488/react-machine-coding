import React from "react";
import { Box, Button, Typography } from "@mui/material";

function A({ count, setAcount }) {
  return (
    <Box>
      <Typography variant="h2">{count}</Typography>
      <Button onClick={() => setAcount((prev) => prev + 1)} variant="contained" color="warning">
        Increase A Count
      </Button>
    </Box>
  );
}

export default A;
