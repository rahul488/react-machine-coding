import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Timer from "./Timer";

function Mc0() {
  const [value, setValue] = useState(0);
  const [timers,setTimers] = useState([])
  const timerInstances = useRef();

  function startTimer() {
    if(timerInstances.current){
        clearInterval(timerInstances.current)
    }
    if (value > 0) {
        timerInstances.current = setInterval(() => {
        setValue((prev) => {
          if (prev == 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }

  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <TextField
        placeholder="Enter Duration"
        variant="standard"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Box><Button variant="contained" onClick={startTimer}>
        Start Timer
      </Button>
      <Button variant="contained" color="success" sx={{ml:2}} onClick={()=>setTimers((prev) => [...prev,{
        value
      }])}>Start Another Instance</Button>
      </Box>
      {
        timers.map((timer,index) =>(
            <Timer key={index} value={timer.value}  />
        ))
      }
    </Box>
  );
}

export default Mc0;
