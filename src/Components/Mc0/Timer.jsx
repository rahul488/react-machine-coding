import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

function Timer({ value }) {
  const [currTime, setTime] = useState(value);
  const intervalRef = useRef();

  useEffect(() => {
    if (value) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev == 0) {
            clearInterval(interval);
            return prev;
          }

          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(intervalRef.current);
    }
  }, [value]);

  return (
    <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <Typography>{currTime}</Typography>
      <Button
        color="warning"
        variant="outlined"
        onClick={() => clearInterval(intervalRef?.current)}
      >
        Stop
      </Button>
    </Box>
  );
}

export default Timer;
