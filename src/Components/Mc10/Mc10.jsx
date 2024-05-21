import { Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function Mc10() {
  return <Box>
    <RouterProvider router={router} />
  </Box>;
}

export default Mc10;
