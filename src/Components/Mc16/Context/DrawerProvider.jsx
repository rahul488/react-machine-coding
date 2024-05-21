import { Box, Drawer, Typography } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import menuData from "../navMenu.json";
import { AppLink } from "../style";
import { v4 as uuidv4 } from "uuid";
import useScreenSize from "../hooks/useScrenSize";
import Sidebar from "../Drawer/Sidebar";

const DrawerContext = createContext();

const useDrawerContext = () => useContext(DrawerContext);

function DrawerProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenuDdata, setCurrentMenuData] = useState([]);
  const [isOpenSidebar, setSidebar] = useState(false);
  const { isMedium, isSmall, isExtraSmall, isLarge } = useScreenSize();

  useEffect(() => {
    if (isMedium || isLarge) {
      setSidebar(false);
    }
  }, [isMedium, isSmall, isExtraSmall, isLarge]);

  function handleSidebar() {
    setSidebar(!isOpenSidebar);
  }

  function openMenuTable(index) {
    setMenuOpen(true);
    setCurrentMenuData(menuData.menus[index]);
  }
  function closeMenuTable() {
    setMenuOpen(false);
    setCurrentMenuData([]);
  }

  function createMenuTable(currmenu) {
    return currmenu?.subMenus?.map((menu, idx) => (
      <Box key={uuidv4()}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Box>
            <Typography variant="body1">{menu.name}</Typography>
            {menu.links.map((link, idx2) => (
              <AppLink to={link.path} key={uuidv4()}>
                <Typography variant="body2" mt={2}>
                  {link.name}
                </Typography>
              </AppLink>
            ))}
          </Box>
          <Box>
            {menu?.subMenus && menu.subMenus.length
              ? createMenuTable(menu)
              : null}
          </Box>
        </Box>
        <Box sx={{ position: "fixed", bottom: 10 }}>
          {menu?.footerMenus?.map((footerMenu) => (
            <AppLink to={footerMenu.path} key={uuidv4()}>
              {" "}
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {footerMenu.name}
              </Typography>
            </AppLink>
          ))}
        </Box>
      </Box>
    ));
  }

  return (
    <DrawerContext.Provider
      value={{ openMenuTable, closeMenuTable, isOpenSidebar, handleSidebar }}
    >
      {children}
      {menuOpen ? (
        <Box
          sx={{
            position: "fixed",
            top: "64px",
            left: "0",
            width: "100%",
            borderTop: "1px solid #eee",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "space-between",
            zIndex: 99,
            padding: "20px 40px",
            background: "white",
            height: "100%",
          }}
        >
          {createMenuTable(currentMenuDdata)}
        </Box>
      ) : null}
      {isOpenSidebar ? (
        <Sidebar
        />
      ) : null}
    </DrawerContext.Provider>
  );
}

export { DrawerProvider, useDrawerContext };
