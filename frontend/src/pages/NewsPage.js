import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import "../App.css"
import { Box } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"
import { useNewsContext } from "../hooks/useNewsContext"
import NewsContent from "../components/NewsContent"
import NewsComments from "../components/NewsComments"

const NewsPage = () => {
  const { newsElement, dispatch } = useNewsContext()
  const { id } = useParams()

  useEffect(() => {
    const fetchNewsById = async () => {
      const response = await fetch(`http://localhost:8080/api/news/${id}`)
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_NEWS_BY_ID", payload: json })
      }
    }
    fetchNewsById()
  }, [dispatch, id])
  return (
    <ThemeProvider theme={Theme}>
      <Box className="mainContainer">
        <Header></Header>
        {newsElement && (
          <NewsContent
            key={newsElement._id}
            newsElement={newsElement}
          />
        )}
        <NewsComments />
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default NewsPage
