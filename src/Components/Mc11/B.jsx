import React, { memo, useEffect, useMemo } from "react";
import { Box, Button, Typography } from "@mui/material";
import MemoHoc from "./MemoHoc";
import useCustoMemo from "./useCustoMemo";

function updateCount(count = 0) {
  for (let i = 0; i < 1000000; i++) {
    count += i;
  }
  return count;
}

function B({ count, setBCount, address }) {
 
  const updatedCount = useCustoMemo(() => {
    return updateCount(count);
  }, [count,address]);

  return (
    <Box>
      <Typography variant="h2">{updatedCount}</Typography>
      <Button
        onClick={() => setBCount((prev) => prev + 1)}
        variant="contained"
        color="success"
      >
        Increase B Count
      </Button>
    </Box>
  );
}

export default MemoHoc(B);
