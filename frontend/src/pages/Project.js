import React, { useEffect } from "react"
import "../App.css"
import { ThemeProvider } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"
import { useProjectsContext } from "../hooks/useProjectsContext"
import ProjectContent from "../components/ProjectContent"
import Header from "../components/Header"
import Theme from "../components/Theme"

const Project = () => {
  const { project, dispatch } = useProjectsContext()

  useEffect(() => {
    console.log("here")
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
        <Typography>
          {project &&
            <ProjectContent
              key={project._id}
              project={project}
            />
          }
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default Project
