import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Button, Typography, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useProjectsContext } from "../hooks/useProjectsContext"

const ProjectContent = ({ project }) => {
  const { dispatch } = useProjectsContext()

  return (
    <>
      <Typography
        align="center"
        sx={{
          width: "100%",
          maxWidth: 720
        }}
      >
        {project.title}
      </Typography>
      <Typography
        align="justify"
        sx={{ width: "100%", maxWidth: 720, whiteSpace: "pre-line" }}
      >
        {project.description}
      </Typography>
      <Typography
        align="justify"
        sx={{ width: "100%", maxWidth: 720, whiteSpace: "pre-line" }}
      >
        {project.content}
      </Typography>
    </>
  )
}

export default ProjectContent
