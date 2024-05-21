import React, { act, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

/**
 * 
 * Traffic light App
 * 
 */

function Mc14() {
  const lights = [
    {
      color: "red",
      background: "red",
      duration: 6000,
    },
    {
      color: "yellow",
      background: "yellow",
      duration: 3000,
    },
    {
      color: "green",
      background: "green",
      duration: 5000,
    },
  ];
  const [activeLight, setActiveLight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeLight == lights.length - 1) {
        setActiveLight(0);
        return;
      }
      setActiveLight((prev) => prev + 1);
    }, lights[activeLight].duration);

    return () => clearInterval(interval);
  }, [activeLight]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <Typography variant="h3" mt={4} color={"red"}>
        Follow Traffic Rules
      </Typography>
      <Box
        sx={{
          height: "300px",
          backgroundColor: "black",
          width: "100px",
          padding: "0.5rem 0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {lights.map((light, idx) => (
          <Box
            sx={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              background: `${light.background}`,
              opacity: `${activeLight == idx ? 1 : "0.5"}`,
            }}
            key={light.color}
          ></Box>
        ))}
      </Box>
    </Box>
  );
}

export default Mc14;
