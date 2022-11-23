import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ProjectDetails = ({ project }) => {
  const navigate = useNavigate()
  const detailsPage = () => {
    let path = "/projects/" + project._id
    navigate(path)
  }
  return (
    <ListItem>
      <ListItemText
        primary={project.title}
        secondary={project.description}
      ></ListItemText>
      <Button onClick={detailsPage}>Read more</Button>
    </ListItem>
  )
}

export default ProjectDetails
