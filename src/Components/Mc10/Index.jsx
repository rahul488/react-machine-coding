import { Box, Button, styled } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AppLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
}));

function Index() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
          gap: "0.5rem",
        }}
      >
        <Button variant="contained" color="primary">
          <AppLink to={"/"}>Login</AppLink>
        </Button>
        <Button variant="contained" color="secondary">
          <AppLink to={"/home"}>Home</AppLink>
        </Button>
        <Button variant="contained" color="success">
          <AppLink to={"/admin"}>Dashboard</AppLink>
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            localStorage.removeItem("credentials");
            navigate("/");
          }}
        >
          Logout
        </Button>
      </Box>
      <Outlet />
    </>
  );
}

export default Index;
