import { Typography } from "@mui/material"
import PropTypes from "prop-types"

const ProjectContent = ({ project }) => {
  let title = project.title
  let description = project.description
  let content = project.content

  return (
    <>
      <Typography
        align="center"
        sx={{
          width: "100%",
          maxWidth: 720
        }}
      >
        {title}
      </Typography>
      <Typography
        align="justify"
        sx={{ width: "100%", maxWidth: 720, whiteSpace: "pre-line" }}
      >
        {description}
      </Typography>
      <Typography
        align="justify"
        sx={{ width: "100%", maxWidth: 720, whiteSpace: "pre-line" }}
      >
        {content}
      </Typography>
    </>
  )
}

ProjectContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string
}

export default ProjectContent
