import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import React, { useState } from "react";
import { useDrawerContext } from "../Context/DrawerProvider";
import { v4 as uuidv4 } from "uuid";
import { FaChevronCircleRight } from "react-icons/fa";
import { AppLink } from "../style";
import menuData from "../navMenu.json";

function Sidebar() {
  const { isOpenSidebar } = useDrawerContext();

  return (
    <>
      <Drawer open={isOpenSidebar}>
        <Box role="presentation" sx={{ width: "250px" }}>
          {menuData?.menus.map((menu) => (
            <Menus currMenus={menu} key={uuidv4()} />
          ))}
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar;

const Menus = ({ currMenus }) => {
  const [isOpen, setOpen] = useState(false);

  function handleClick(){
    setOpen(!open)
  }

  return (
    <List>
      <ListItem>
        <ListItemText>{currMenus.name}</ListItemText>
        {currMenus?.links?.length || currMenus?.subMenus?.length ? (
        
          <ListItemButton sx={{display:'flex',justifyContent:'end'}} onClick={handleClick}>
            <FaChevronCircleRight />
          </ListItemButton>
       
      ) : null}
      </ListItem>
     
    </List>
  );
};
