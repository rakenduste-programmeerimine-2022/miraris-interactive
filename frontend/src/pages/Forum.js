import React, { useState } from "react"
import "../App.css"
import { Box, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"

const Forum = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box className="mainContainer">
        <Header></Header>
        <Typography>Forum</Typography>
        <List className="contentList">
        <ListItem className="forumCategory">
            <ListItemText
              primary="Category 1"
              secondary="Category 1 description"
            />
            <List>
              <ListItem className="forumTopic">
                <ListItemText
                  primary="Topic 1"
                  secondary="Topic 1 description"
                />
              </ListItem>
              <ListItem className="forumTopic">
                <ListItemText
                  primary="Topic 2"
                  secondary="Topic 2 description"
                />
              </ListItem>
            </List>
          </ListItem>
          <ListItem className="forumCategory">
            <ListItemText
              primary="Category 2"
              secondary="Category 2 description"
            />
            <List>
              <ListItem className="forumTopic">
                <ListItemText
                  primary="Topic 1"
                  secondary="Topic 1 description"
                />
              </ListItem>
              <ListItem className="forumTopic">
                <ListItemText
                  primary="Topic 2"
                  secondary="Topic 2 description"
                />
              </ListItem>
            </List>
          </ListItem>
        </List>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default Forum
