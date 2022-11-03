import React, { useState } from "react"
import "../App.css"
import { Box, Typography } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Header from "../components/Header"

const Portfolio = () => {
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
      <Header></Header>
      <Typography>Our projects</Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemText
            primary="Project 1"
            secondary="Project 1 description"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Project 2"
            secondary="Project 2 description"
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default Portfolio
