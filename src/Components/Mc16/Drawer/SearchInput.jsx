import { Box, TextField } from "@mui/material";
import React from "react";
import { MdSearch } from "react-icons/md";

function SearchInput() {
  return (
    <Box sx={{ position: "relative" }}>
      <TextField name="search" variant="standard" placeholder="Search" color="secondary" />
      <MdSearch style={{ position: "absolute", right: "0",zIndex:'9', background:'white' }} size={"20"}  />
    </Box>
  );
}

export default SearchInput;
