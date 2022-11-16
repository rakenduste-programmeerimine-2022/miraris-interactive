import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

import { useProjectsContext } from "../hooks/useProjectsContext"

const ProjectDetails = ({ project }) => {
  const { dispatch } = useProjectsContext()

  return (
    <ListItem>
      <ListItemText
        primary={project.title}
        secondary={project.description}
      ></ListItemText>
    </ListItem>
  )
}

export default ProjectDetails
