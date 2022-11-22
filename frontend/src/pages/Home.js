import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"
import { Paper, Box, Typography, Button } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import Carousel from "react-material-ui-carousel"
import Header from "../components/Header"
import Theme from "../components/Theme"
import projectImage1 from "../images/pb.jpg"
import projectImage2 from "../images/natarc.jpg"

const Home = () => {
  const navigate = useNavigate()
  const project1 = () => {
    let path = "/projects/project"
    navigate(path)
  }
  const project2 = () => {
    let path = "/projects/project"
    navigate(path)
  }

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "top",
          flexDirection: "column",
          gap: "25px",
          height: "10vh",
          width: "100%"
        }}
      >
        <Header></Header>
        <Typography variant="introduction">
          Miraris Interactive is a team of creators, seeking ways to make their
          dreams reality and express themselves.
        </Typography>
        <Typography variant="introduction">
          Inspired by smaller Japanese game development studios, and ran by
          creators from different nations, Miraris is purely about the games as
          pieces of art, not products to sell.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "top",
            flexDirection: "row",
            height: "1500px"
          }}
        >
          <Carousel
            sx={{
              alignContent: "center",
              width: "1024px",
              height: "1384px"
            }}
          >
            <Box
              component="img"
              sx={{
                height: "50%",
                width: "100%"
              }}
              src={projectImage1}
            />
            <Box
              component="img"
              sx={{
                height: "50%",
                width: "100%"
              }}
              src={projectImage2}
            />
          </Carousel>
        </Box>
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
          <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "150px", padding: "25px", gap: "10px", alignItems: "right" }}>
            <Button
              color="primary"
              onClick={project1}
            >
              Painted Blood
            </Button>
            <Button
              color="primary"
              onClick={project2}
            >
              NatArc
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Home
