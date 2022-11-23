import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useNewsContext } from "../hooks/useNewsContext"

const NewsDetails = ({ newsElement }) => {
  const { dispatch } = useNewsContext()

  const navigate = useNavigate()
  const detailsPage = () => {
    let path = "/news/" + newsElement._id
    navigate(path)
  }
  return (
    <ListItem>
      <ListItemText
        primary={newsElement.header}
        secondary={newsElement.introduction}
      ></ListItemText>
      <Button onClick={detailsPage}>Read more</Button>
    </ListItem>
  )
}

export default NewsDetails
