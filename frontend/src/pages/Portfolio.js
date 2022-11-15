import React, { useEffect, useState } from "react"
import "../App.css"
import { useProjects } from "../hooks/useProjects"
import { Box, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Header from "../components/Header"
import Theme from "../components/Theme"

const Portfolio = () => {
  console.log("rendering")
  const { projectList, isLoading, error } = useProjects()
  const id = "63726bb3f5ddd84483f82406"

  const loadData = async () => {
    console.log("request")
    await projectList(id)
  }
  useEffect(() => {
    loadData()
  })

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
        <Typography>Our projects</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemText
            /*primary={titles[0]}
              secondary={descriptions[0]}*/
            />
          </ListItem>
          <ListItem>
            <ListItemText
            /*primary={titles[1]}
              secondary={descriptions[1]}*/
            />
          </ListItem>
        </List>
      </Box>
    </ThemeProvider>
  )
}

export default Portfolio
