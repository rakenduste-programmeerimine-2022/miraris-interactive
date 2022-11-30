import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ForumCategory = ({ category }) => {
  const navigate = useNavigate()
  const detailsPage = () => {
    let path = "/forum/category/" + category._id
    navigate(path)
  }

  return (
    <ListItem className="listItem">
      <ListItemText
        primary={category.category}
        secondary={category.description}
      />
      <Button onClick={detailsPage}>Browse topics</Button>
    </ListItem>
  )
}

export default ForumCategory
