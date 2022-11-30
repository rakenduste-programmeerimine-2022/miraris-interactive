import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ForumTopic = ({ topic }) => {
  const navigate = useNavigate()
  const detailsPage = () => {
    let path = "/forum/topic/" + topic._id
    navigate(path)
  }

  return (
    <ListItem className="listItem">
      <ListItemText
        primary={topic.topic}
        secondary={topic.description}
      />
      <Button onClick={detailsPage}>Browse posts</Button>
    </ListItem>
  )
}

export default ForumTopic
