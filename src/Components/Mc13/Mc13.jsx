import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Boxes from "./Boxes";
import data from "./data.json";
function Mc13() {
  const [boxes, setBoxes] = useState(data.boxesData);
  const [boxQueue, setBoxQueue] = useState([]);

  useEffect(() => {
    if (boxQueue.length == boxes.filter((box) => box.isVisible).length) {
      let idx = 0;
      const tempBox = [...boxQueue];
      const interval = setInterval(() => {
        if (idx == boxQueue.length) {
          clearInterval(interval);
          setBoxQueue([]);
        }
        const id = tempBox.shift();
        setBoxes((prev) => {
          return prev.map((bx) => {
            if (bx.id == id) {
              idx++;
              (bx.isClicked = false), (bx.background = "yellow");
            }
            return bx;
          });
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [boxQueue.length]);

  function handleBoxClick(box) {
    const updatedBox = boxes.map((currBox, _) => {
      if (currBox.id == box.id) {
        box.isClicked = true;
        box.background = "green";
      }
      return currBox;
    });
    setBoxes(updatedBox);
    setBoxQueue((prev) => [...prev, box.id]);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <Boxes boxes={boxes} handleBoxClick={handleBoxClick} />
    </Box>
  );
}

export default Mc13;
