import React from "react"
import { PropTypes } from "prop-types"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ForumTopic = ({ topic }) => {
  let forumTopic = topic.topic
  let forumTopicDescription = topic.description
  const navigate = useNavigate()
  const detailsPage = () => {
    let path = "/forum/topic/" + topic._id
    navigate(path)
  }

  return (
    <ListItem className="listItem">
      <ListItemText
        primary={forumTopic}
        secondary={forumTopicDescription}
      />
      <Button onClick={detailsPage}>Browse posts</Button>
    </ListItem>
  )
}

ForumTopic.propTypes = {
  forumTopic: PropTypes.string,
  forumTopicDescription: PropTypes.string
}

export default ForumTopic
