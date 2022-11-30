import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import "../App.css"
import { Box, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import List from "@mui/material/List"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"
import { useForumContext } from "../hooks/useForumContext"
import ForumTopicContent from "../components/ForumTopicContent"

const ForumTopic = () => {
  const { topics, dispatch } = useForumContext()
  const { id } = useParams()

  useEffect(() => {
    const fetchTopics = async () => {
      const response = await fetch(
        `http://localhost:8080/api/forum/category/${id}`
      )
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_TOPICS", payload: json })
      }
    }
    fetchTopics()
  }, [dispatch, id])

  return (
    <ThemeProvider theme={Theme}>
      <Box className="mainContainer">
        <Header></Header>
        <Typography>Topics</Typography>
        <List className="forumList">
          {topics &&
            topics.map(topic => (
              <ForumTopicContent
                key={topic._id}
                topic={topic}
              />
            ))}
        </List>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default ForumTopic
