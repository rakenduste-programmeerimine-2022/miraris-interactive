import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import "../App.css"
import { ThemeProvider } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"
import { useProjectsContext } from "../hooks/useProjectsContext"
import ProjectContent from "../components/ProjectContent"
import Header from "../components/Header"
import Theme from "../components/Theme"

const Project = () => {
  const params = useParams();
  const id = JSON.stringify(params.projectId)

  console.log(id)

  const { project, dispatch } = useProjectsContext()

  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch("http://localhost:8080/api/projects")
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json })
      }
    }
    fetchProject()
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
        {project &&
              <ProjectContent
                key={id}
                project={project}
              />
        }
      </Box>
    </ThemeProvider>
  )
}

export default Project
