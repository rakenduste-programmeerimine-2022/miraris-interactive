import React, { useEffect } from "react"
import "../App.css"
import { Box, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import List from "@mui/material/List"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"
import { useForumContext } from "../hooks/useForumContext"
import ForumCategory from "../components/ForumCategory"

const Forum = () => {
  const { categories, dispatch } = useForumContext()

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:8080/api/forum")
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_CATEGORIES", payload: json })
      }
    }
    fetchCategories()
  }, [dispatch])

  return (
    <ThemeProvider theme={Theme}>
      <Box className="mainContainer">
        <Header></Header>
        <Typography>Forum</Typography>
        <List className="forumList">
          {categories &&
            categories.map(category => (
              <ForumCategory
                key={category._id}
                category={category}
              />
            ))}
        </List>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default Forum
