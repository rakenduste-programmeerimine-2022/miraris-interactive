import React, { useEffect } from "react"
import "../App.css"
import { Box, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import List from "@mui/material/List"
import Header from "../components/Header"
import Theme from "../components/Theme"
import { useProjectsContext } from "../hooks/useProjectsContext"
import ProjectDetails from "../components/ProjectDetails"

const Portfolio = () => {
  const { projects, dispatch } = useProjectsContext()

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
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "top",
          flexDirection: "column",
          gap: "25px",
          height: "10vh"
        }}
      >
        <Header></Header>
        <Typography>Our projects</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {projects &&
            projects.map(project => (
              <ProjectDetails
                key={project._id}
                project={project}
              />
            ))}
        </List>
      </Box>
    </ThemeProvider>
  )
}

export default Portfolio
