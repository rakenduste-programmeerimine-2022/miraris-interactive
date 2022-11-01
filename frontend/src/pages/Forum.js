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
      <List>
        <ListItem>
          <ListItemText
            primary="Category 1"
            secondary="Category 1 description"
          />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemText
                primary="Topic 1"
                secondary="Topic 1 description"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Topic 2"
                secondary="Topic 2 description"
              />
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Category 2"
            secondary="Category 2 description"
          />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemText
                primary="Topic 1"
                secondary="Topic 1 description"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Topic 2"
                secondary="Topic 2 description"
              />
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  )
}

export default Portfolio
