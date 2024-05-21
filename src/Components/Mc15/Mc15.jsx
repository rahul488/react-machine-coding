import React, { useCallback, useMemo, useRef, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import useThrottle from "../hooks/useThrottle";
import useDebounce from "../hooks/useDebounce";
import useBrain from "../hooks/useBrainVal";
import { useBrainFunc } from "../hooks/useBrainFunc";
import Polyfill from "./polyfill";

function Mc15() {
  const [value, setValue] = useState("");
  const { throttleValue } = useThrottle(value, 2000);
  const { debounceVal } = useDebounce(value, 1000);

  const memoValue = useBrain(() => {
    console.log("expensive calculation....");
    return 5;
  }, [value]);

  useBrainFunc(() => {
    console.log("memofunc callled.....");
  }, [value])();

  return (
    <Box
      mt={5}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>Throttle Value - {throttleValue}</Typography>
      <Typography>Debounce Value - {debounceVal}</Typography>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter anything...."
      />
      <Typography variant="h5">{memoValue}</Typography>
      <Polyfill />
    </Box>
  );
}

export default Mc15;
