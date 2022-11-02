import React from "react"
import "../App.css"
import { Box, Typography } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

const NewsPage = () => {
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
      <Typography>News title</Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemText primary="News contents" />
        </ListItem>
      </List>
    </Box>
  )
}

export default NewsPage
