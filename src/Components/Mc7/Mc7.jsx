import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";

function Square({ value, onPlay }) {
  return (
    <Box
      sx={{
        border: "1px solid black",
        height: "100%",
        width: "100%",
        outline: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onPlay}
    >
      {value}
    </Box>
  );
}

function determineWinner(values) {
  const winnerArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let arr of winnerArray) {
    const [a, b, c] = arr;
    if (values[a] && values[a] === values[b] && values[a] === values[c]) {
      return true;
    }
  }
  return false;
}

function Mc7() {
  const [values, setValues] = useState(Array(9).fill(null));
  const [xIsNext, setCurrentPlayer] = useState(true);
  const [history, setHistory] = useState([]);

  function handlePlay(index) {
    if (values[index] || determineWinner(values)) {
      return;
    } else {
      const updatedValue = [...values];
      if (xIsNext) {
        updatedValue[index] = "X";
      } else {
        updatedValue[index] = "O";
      }
      setValues(updatedValue);
      setCurrentPlayer(!xIsNext);
      setHistory((prev) => [...prev, updatedValue]);
    }
  }

  const isWinner = determineWinner(values);

  function handleHistory(currHistory) {
    setValues(currHistory);
  }

  return (
    <Box sx={{ marginTop: "20px" }}>
      <Typography variant="h6" textAlign={"center"}>
        Start Game
      </Typography>
      {isWinner ? (
        <Typography variant="subtitle1" textAlign={"center"}>{`${
          xIsNext ? "O" : "X"
        } is winner`}</Typography>
      ) : null}
      <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,40px)",
            gridTemplateRows: "repeat(3,40px)",
            justifyContent: "center",
          }}
        >
          {values.map((_, idx) => (
            <Square
              key={idx}
              onPlay={() => handlePlay(idx)}
              value={values[idx]}
            />
          ))}
        </Box>
        <Box>
          {history.map((his, idx) => (
            <Box key={uuid()} mb={2}>
              <Button
                variant="contained"
                onClick={() => handleHistory(his)}
              >{`step ${idx + 1}`}</Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Mc7;
