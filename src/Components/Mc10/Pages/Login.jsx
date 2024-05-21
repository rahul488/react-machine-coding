import React, { useEffect, useLayoutEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { redirect, useLocation, useNavigate, useRoutes } from "react-router";

function Login() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (localStorage.getItem("credentials")) {
      navigate("/home");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = {};
    formData.forEach((v, k) => {
      credentials[k] = v;
    });
    credentials['role'] = 'CUSTOMER'
    localStorage.setItem("credentials", JSON.stringify(credentials));
    navigate("/home");
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <TextField
          name="username"
          required
          type="text"
          placeholder="Enter username"
          variant="outlined"
          fullWidth
        />
        <TextField
          name="password"
          required
          type="password"
          placeholder="Enter password"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
