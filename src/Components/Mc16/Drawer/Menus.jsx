import React from "react";
import navMenus from "../navMenu.json";
import { AppLink } from "../style";
import { useDrawerContext } from "../Context/DrawerProvider";
import { Box } from "@mui/material";

function Menus() {
  const { openMenuTable, closeMenuTable } = useDrawerContext();

  function handleMouseOver(e, index) {
    openMenuTable(index);
  }

  function hanldeMouseLeave() {
    closeMenuTable();
  }

  return (
    <Box
      onMouseLeave={() => hanldeMouseLeave()}
      sx={{
        display: "flex",
        gap: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
        flex: 2,
      }}
    >
      {navMenus.menus.map((menu, index) => (
        <AppLink
          to="/"
          sx={{ fontFamily: "sans-serif", fontWeight: "bold" }}
          key={index}
          onMouseOver={(e) => handleMouseOver(e, index)}
        >
          {menu.name}
        </AppLink>
      ))}
    </Box>
  );
}

export default Menus;
