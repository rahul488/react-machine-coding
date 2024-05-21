import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const AppLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  fontFamily: "sans-serif",
  position: "relative",
  "&:hover": {
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "1px",
      backgroundColor: "black",
    },
  },
}));
