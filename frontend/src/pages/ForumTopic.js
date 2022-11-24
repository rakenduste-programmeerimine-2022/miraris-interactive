import React from "react"
import "../App.css"
import { Box, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import PersonIcon from "@mui/icons-material/Person"
import Header from "../components/Header"
import Theme from "../components/Theme"

const ForumTopic = () => {
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
        <Typography>Banner</Typography>
        <Header></Header>
        <Typography>Topic name</Typography>
        <Typography variant="subtitle2">Topic description</Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <PersonIcon />
            </ListItemAvatar>
            <ListItemText
              primary="Post 1"
              secondary="Post 1 contents"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <PersonIcon />
            </ListItemAvatar>
            <ListItemText
              primary="Post 2"
              secondary="Post 2 contents"
            />
          </ListItem>
        </List>
      </Box>
    </ThemeProvider>
  )
}

export default ForumTopic
