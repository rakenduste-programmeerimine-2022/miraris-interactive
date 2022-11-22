import React, { useState } from "react"
import "../App.css"
import { ThemeProvider } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { useNewsContext } from "../hooks/useNewsContext"
import NewsDetails from "../components/NewsDetails"
import Header from "../components/Header"
import Theme from "../components/Theme"

const News = () => {
  //const { news, dispatch } = useNewsContext()

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "top",
          flexDirection: "column",
          gap: "25px",
          height: "10vh"
        }}
      >
        <Header></Header>
        <Typography>All news</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemText
              primary="News 1"
              secondary="News 1 contents"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="News 2"
              secondary="News 2 contents"
            />
          </ListItem>
        </List>
      </Box>
    </ThemeProvider>
  )
}

export default News
