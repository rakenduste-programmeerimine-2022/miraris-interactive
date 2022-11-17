import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Button } from "@mui/material"

import { useProjectsContext } from "../hooks/useProjectsContext"

const ProjectDetails = ({ project }) => {
  console.log("here")
  const { dispatch } = useProjectsContext()
  const id = project._id
  console.log(id)

  return (
    <ListItem>
      <ListItemText
        primary={project.title}
        secondary={project.description}
      ></ListItemText>
      <Button
        onClick={e => {
          e.preventDefault()
          window.location.href = "projects/project/" + id
        }}
      >
        Read more
      </Button>
    </ListItem>
  )
}

export default ProjectDetails
