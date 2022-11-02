import React, { useState } from "react"
import "../App.css"
import { Box, Typography } from "@mui/material"

const Home = () => {
  return (
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
      <Typography>Banner</Typography>
      <Typography>Navmenu</Typography>
      <Typography
        variant="h5"
        gutterBottom
      >
        Miraris Interactive is a team of creators, seeking ways to make their
        dreams reality and express themselves. Inspired by smaller Japanese game
        development studios, and ran by creators from different nations, Miraris
        is purely about the games as pieces of art, not products to sell.
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
  )
}

export default Home
