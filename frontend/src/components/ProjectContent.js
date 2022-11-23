import { Typography } from "@mui/material"
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
