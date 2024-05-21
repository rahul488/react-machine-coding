// import React, { useState } from "react";
// import {
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Typography,
// } from "@mui/material";
// import data from "./data.json";
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
// import { v4 as uuid } from "uuid";

// function Mc17() {
//   return (
//     <Box>
//       <Drawer open>
//         <Box sx={{ width: "250px" }}>
//           <SidebarMenu menus={data.foods} />
//         </Box>
//       </Drawer>
//     </Box>
//   );
// }

// export default Mc17;

// const SidebarMenu = ({ menus, isChild = false }) => {
//   return isChild ? (
//     <>
//       {menus.map((menu, index) => (
//         <SubMenu menu={menu} index={index} key={uuid()} />
//       ))}
//     </>
//   ) : (
//     <List>
//       {menus.map((menu, index) => (
//         <SubMenu menu={menu} index={index} key={uuid()}/>
//       ))}
//     </List>
//   );
// };

// const SubMenu = ({ menu }) => {
//   const [isClicked, setClicked] = useState(false);
//   function handleClick() {
//     setClicked(!isClicked);
//   }
//   return (
//     <>
//       <ListItem>
//         <ListItemText>{menu.name}</ListItemText>
//         {menu?.subCategories?.length ? (
//           !isClicked ? (
//             <FaChevronCircleRight onClick={handleClick} cursor={"pointer"} />
//           ) : (
//             <FaChevronCircleLeft onClick={handleClick} cursor={"pointer"} />
//           )
//         ) : null}
//       </ListItem>
//       {menu?.subCategories?.length && isClicked ? (
//         <List sx={{ background: "grey" }}>
//           <SidebarMenu menus={menu?.subCategories} isChild={true} />
//         </List>
//       ) : null}
//     </>
//   );
// };

// const SidebarMenu = ({ menus, isChild = false }) => {
//   const [openMenuIndex, setOpenMenuIndex] = useState(null);

//   const handleMenuClick = (index) => {
//     setOpenMenuIndex(openMenuIndex === index ? null : index);
//   };

//   return isChild ? (
//     <>
//       {menus.map((menu, index) => (
//         <SubMenu
//           menu={menu}
//           index={index}
//           key={uuid()}
//           isOpen={index === openMenuIndex}
//           handleClick={() => handleMenuClick(index)}
//         />
//       ))}
//     </>
//   ) : (
//     <List>
//       {menus.map((menu, index) => (
//         <SubMenu
//           menu={menu}
//           index={index}
//           key={uuid()}
//           isOpen={index === openMenuIndex}
//           handleClick={() => handleMenuClick(index)}
//         />
//       ))}
//     </List>
//   );
// };

// const SubMenu = ({ menu, isOpen, handleClick }) => {
//   return (
//     <>
//       <ListItem>
//         <ListItemText>{menu.name}</ListItemText>
//         {menu?.subCategories?.length ? (
//           isOpen ? (
//             <FaChevronCircleLeft onClick={handleClick} cursor={"pointer"} />
//           ) : (
//             <FaChevronCircleRight onClick={handleClick} cursor={"pointer"} />
//           )
//         ) : null}
//       </ListItem>
//       {menu?.subCategories?.length && isOpen ? (
//         <List sx={{ background: "grey" }}>
//           <SidebarMenu menus={menu?.subCategories} isChild={true} />
//         </List>
//       ) : null}
//     </>
//   );
// };

import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import data from "./data.json";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Mc17() {
  return (
    <Box>
      <Drawer open>
        <Box sx={{ width: "250px" }}>
          <SidebarMenu menus={data.foods} />
        </Box>
      </Drawer>
    </Box>
  );
}

export default Mc17;

const SidebarMenu = ({ menus, currParent = null, handleBack = () => {} }) => {
  const [isChild, setChild] = useState(false);
  const [selectedIndex, setIndex] = useState(null);
  const [parent, setParent] = useState(currParent);
  const [showBackBtn, setBackbtn] = useState(true);

  function handleOpen(idx, currmenu) {
    setChild(!isChild);
    setBackbtn(false);
    setIndex(idx);
    if (currmenu) {
      setParent({
        idx: idx,
        menu: currmenu,
      });
    } else {
      setParent(null);
    }
  }
  function handleBackBtn() {
    if (!currParent) {
      setBackbtn(false);
    } else {
      setBackbtn(true);
    }
    setChild(false);
  }
  return (
    <>
      {showBackBtn && currParent ? (
        <>
          <List>
            <ListItem>
              <ListItemText>
                <Typography variant="body1">
                  {currParent?.menu?.name}
                </Typography>
              </ListItemText>
              <MdChevronLeft
                size={"25"}
                cursor={"pointer"}
                onClick={() => {
                  handleBack();
                }}
              />
            </ListItem>
          </List>
          <Divider />
        </>
      ) : null}
      {menus.map((catg, idx) => (
        <SubMenu
          key={uuid()}
          menu={catg}
          isOpen={isChild}
          isChildOpen={selectedIndex === idx}
          handleOpen={(currmenu) => handleOpen(idx, currmenu)}
          parent={parent}
          handleBack={() => handleBackBtn(idx, null)}
        />
      ))}
    </>
  );
};

function SubMenu({
  menu,
  isOpen,
  handleOpen,
  isChildOpen,
  parent,
  handleBack,
}) {
  return !isOpen ? (
    <List>
      <ListItem>
        <ListItemText>{menu.name}</ListItemText>
        {menu?.subCategories?.length ? (
          <MdChevronRight
            size={"20"}
            cursor={"pointer"}
            onClick={() => handleOpen(menu)}
          />
        ) : null}
      </ListItem>
    </List>
  ) : isChildOpen ? (
    <SidebarMenu
      menus={menu?.subCategories}
      currParent={parent}
      handleBack={handleBack}
    />
  ) : null;
}
