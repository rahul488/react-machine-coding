import {
  AppBar,
  Box,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Menus from "./Menus";
import useScreenSize from "../hooks/useScrenSize";
import SearchInput from "./SearchInput";
import {
  MdAccountBox,
  MdHeartBroken,
  MdMenu,
  MdOutlineMonitorHeart,
  MdOutlinePerson,
  MdOutlineShoppingBag,
  MdSearch,
} from "react-icons/md";
import { useDrawerContext } from "../Context/DrawerProvider";

function Header() {
  const { isSmall, isMedium, isExtraSmall } = useScreenSize();
  const { handleSidebar=()=>{} } = useDrawerContext();
  return (
    <AppBar position="static" color="transparent" elevation={1}>
      <Toolbar>
        {isSmall || isExtraSmall ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebar}
          >
            <MdMenu  />
          </IconButton>
        ) : null}
        <Box
          sx={{
            display: "flex",
            justifyContent: `${
              isExtraSmall || isSmall ? "flex-end" : "space-between"
            }`,
            gap: "0.5rem",
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <Box>
            <img
              src="./Adidas-Logo.jpg"
              height={"60px"}
              style={{ padding: "0.5rem 0.5rem" }}
            />
          </Box>
          {isMedium ? <Menus /> : null}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {isSmall || isExtraSmall ? (
              <MdSearch size={"25"} cursor={"pointer"} />
            ) : (
              <SearchInput />
            )}
            <MdOutlinePerson size={"25"} cursor={"pointer"} />
            <MdHeartBroken size={"25"} cursor={"pointer"} />
            <MdOutlineShoppingBag size={"25"} cursor={"pointer"} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
