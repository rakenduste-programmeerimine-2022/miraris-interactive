import React from "react"
import "../App.css"
import { Box, TextField, Typography, Button } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"

const NewsPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box className="mainContainer">
        <Header></Header>
        <Typography>News title</Typography>
        <List>
          <ListItem>
            <ListItemText primary="News contents" />
          </ListItem>
        </List>
        <Box>
          <TextField></TextField>
          <Button>Add comment</Button>
        </Box>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default NewsPage
