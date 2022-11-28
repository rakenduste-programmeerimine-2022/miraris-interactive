import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"
import { Box, Button, List, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import Carousel from "react-material-ui-carousel"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"
import NewsDetails from "../components/NewsDetails"
import { useNewsContext } from "../hooks/useNewsContext"
import projectImage1 from "../images/pb.jpg"
import projectImage2 from "../images/natarc.jpg"

const Home = () => {
  const { news, dispatch } = useNewsContext()
  const [sortReverse, setSortReverse] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch("http://localhost:8080/api/news")
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_NEWS", payload: json })
      }
    }
    fetchNews()
  }, [dispatch])

  const navigate = useNavigate()
  const project1 = () => {
    let path = "/projects/63726bb3f5ddd84483f82406"
    navigate(path)
  }
  const project2 = () => {
    let path = "/projects/63726b0ef5ddd84483f82404"
    navigate(path)
  }

  return (
    <ThemeProvider theme={Theme}>
      <Box className="mainContainer">
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
        <Box className="sliderContainer">
          <Carousel
            sx={{
              alignContent: "center",
              width: "512px",
              height: "384px"
            }}
          >
            <Box
              component="img"
              sx={{
                width: "512px",
                height: "384px"
              }}
              src={projectImage1}
            />
            <Box
              component="img"
              sx={{
                width: "512px",
                height: "384px"
              }}
              src={projectImage2}
            />
          </Carousel>
        </Box>
        <Box className="contentContainer">
          <Box className="latestNews">
            <Typography>News</Typography>
            <List>
              {!sortReverse &&
                news &&
                news.map(newsElement => (
                  <NewsDetails
                    key={newsElement._id}
                    newsElement={newsElement}
                  />
                ))}
              {sortReverse &&
                news &&
                [...news].reverse().map(newsElement => (
                  <NewsDetails
                    key={newsElement._id}
                    newsElement={newsElement}
                  />
                ))}
            </List>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "150px",
              padding: "25px",
              gap: "10px",
              alignItems: "right"
            }}
          >
            <Typography>Projects</Typography>
            <Button
              color="primary"
              onClick={project2}
            >
              Painted Blood
            </Button>
            <Button
              color="primary"
              onClick={project1}
            >
              NatArc
            </Button>
          </Box>
        </Box>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default Home
