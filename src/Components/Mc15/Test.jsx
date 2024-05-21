import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

function Test() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count.....", count);
  }, [count]); //print after every render
  console.log("rendered....."); //print first
  return (
    <Box
      sx={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography>{count}</Typography>
      <Button onClick={() => setCount(count + 1)} variant="contained">
        Click
      </Button>
    </Box>
  );
}

export default Test;
