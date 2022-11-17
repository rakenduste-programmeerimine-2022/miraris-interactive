import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Button } from "@mui/material"

import { useProjectsContext } from "../hooks/useProjectsContext"

const ProjectDetails = ({ project }) => {
  const { dispatch } = useProjectsContext()
  const title = project.title
  console.log(title)

  return (
    <ListItem>
      <ListItemText
        primary={project.title}
        secondary={project.description}
      ></ListItemText>
      <Button
        onClick={e => {
          e.preventDefault()
          window.location.href = "projects/" + title
        }}
      >
        Read more
      </Button>
    </ListItem>
  )
}

export default ProjectDetails
