import React, { useState } from "react"
import "../App.css"
import { Box, TextField, Typography, Button } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import Header from "../components/Header"
import Theme from "../components/Theme"

const Login = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "top",
          flexDirection: "column",
          gap: "25px",
          height: "100vh"
        }}
      >
        <Header></Header>
        <Typography>Signup</Typography>
        <Typography>Username</Typography>
        <TextField></TextField>
        <Typography>email</Typography>
        <TextField></TextField>
        <Typography>Password</Typography>
        <TextField></TextField>
        <Button
          color="success"
          variant="contained"
        >
          Signup
        </Button>
      </Box>
    </ThemeProvider>
  )
}

export default Login
