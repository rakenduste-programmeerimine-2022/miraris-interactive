import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"
import { Box, Typography, Button } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import Header from "../components/Header"
import Theme from "../components/Theme"

const Home = () => {
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
        <Typography variant="introduction">
          Miraris Interactive is a team of creators, seeking ways to make their
          dreams reality and express themselves.
        </Typography>
        <Typography variant="introduction">
          Inspired by smaller Japanese game development studios, and ran by
          creators from different nations, Miraris is purely about the games as
          pieces of art, not products to sell.
        </Typography>
        <Typography>Image slider</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "top",
            flexDirection: "row",
            gap: "25px",
            height: "100vh"
          }}
        >
          <Typography>News</Typography>
          <Typography>Buttons</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Home
