import React, { useEffect, useState } from "react"
import "../App.css"
import { Box, Typography, Button } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import List from "@mui/material/List"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"
import { useProjectsContext } from "../hooks/useProjectsContext"
import ProjectDetails from "../components/ProjectDetails"

const Portfolio = () => {
  const { projects, dispatch } = useProjectsContext()
  const [sortReverse, setSortReverse] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("http://localhost:8080/api/projects")
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json })
      }
    }
    fetchProjects()
  }, [dispatch])

  const handleSort = () => {
    setSortReverse(current => !current)
  }
  return (
    <ThemeProvider theme={Theme}>
      <Box className="mainContainer">
        <Header></Header>
        <Typography>Our projects</Typography>
        <Button
          color="primary"
          onClick={handleSort}
        >
          Sort by date
        </Button>
        <List className="contentList">
          {!sortReverse &&
            projects &&
            projects.map(project => (
              <ProjectDetails
                key={project._id}
                project={project}
              />
            ))}
          {sortReverse &&
            projects &&
            [...projects].reverse().map(project => (
              <ProjectDetails
                key={project._id}
                project={project}
              />
            ))}
        </List>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default Portfolio
