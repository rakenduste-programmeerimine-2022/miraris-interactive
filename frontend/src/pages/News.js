import React, { useState } from "react"
import "../App.css"
import { Box, Typography } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

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
      <Typography>All news</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="News 1" secondary="News 1 contents" />
      </ListItem>
      <ListItem>
        <ListItemText primary="News 2" secondary="News 2 contents" />
      </ListItem>
    </List>
    </Box>
  )
}

export default Home
