import React, { useEffect, useState } from "react"
import "../App.css"
import { Box, Button, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import List from "@mui/material/List"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"
import { useNewsContext } from "../hooks/useNewsContext"
import NewsDetails from "../components/NewsDetails"

const News = () => {
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

  const handleSort = () => {
    setSortReverse(current => !current)
  }
  return (
    <ThemeProvider theme={Theme}>
      <Box className="news">
        <Header></Header>
        <Typography>All news</Typography>
        <Button
          color="primary"
          onClick={handleSort}
        >
          Sort by date
        </Button>
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
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default News
