import React from "react";
import Header from "./Drawer/Header";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import { DrawerProvider } from "./Context/DrawerProvider";
import Sidebar from "./Drawer/Sidebar";

function Layout() {
  return (
    <Box>
      <DrawerProvider>
        <Header />
      </DrawerProvider>
      <Outlet />
    </Box>
  );
}

export default Layout;
