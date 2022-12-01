import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import "../App.css"
import { Box } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"
import { useForumContext } from "../hooks/useForumContext"
import TopicContent from "../components/TopicContent"
import ForumTopicPosts from "../components/ForumTopicPosts"

const ForumPost = () => {
  const { topic, dispatch } = useForumContext()
  const { id } = useParams()

  useEffect(() => {
    const fetchTopicById = async () => {
      const response = await fetch(
        `http://localhost:8080/api/forum/topic/${id}`
      )
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_TOPIC_BY_ID", payload: json })
      }
    }
    fetchTopicById()
  }, [dispatch, id])
  return (
    <ThemeProvider theme={Theme}>
      <Box className="mainContainer">
        <Header></Header>
        {topic && (
          <TopicContent
            key={topic._id}
            topic={topic}
          />
        )}
        <ForumTopicPosts />
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default ForumPost
