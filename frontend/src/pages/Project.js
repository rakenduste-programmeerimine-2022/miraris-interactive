import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import "../App.css"
import { Box } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Theme from "../components/Theme"
import { useProjectsContext } from "../hooks/useProjectsContext"
import ProjectContent from "../components/ProjectContent"

const Project = () => {
  const { project, dispatch } = useProjectsContext()
  const { id } = useParams()

  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(`http://localhost:8080/api/projects/${id}`)
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_INDIVIDUAL_PROJECT", payload: json })
      }
    }
    fetchProject()
  }, [dispatch])
  return (
    <ThemeProvider theme={Theme}>
      <Box className="mainContainer">
        <Header></Header>
        {project && (
          <ProjectContent
            key={project._id}
            project={project}
          />
        )}
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  )
}

export default Project
