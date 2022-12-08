import React from "react"
import { PropTypes } from "prop-types"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ForumCategory = ({ category }) => {
  let forumCategory = category.category
  let forumCategoryDescription = category.description
  const navigate = useNavigate()
  const detailsPage = () => {
    let path = "/forum/category/" + category._id
    navigate(path)
  }

  return (
    <ListItem className="listItem">
      <ListItemText
        primary={forumCategory}
        secondary={forumCategoryDescription}
      />
      <Button onClick={detailsPage}>Browse topics</Button>
    </ListItem>
  )
}

ForumCategory.propTypes = {
  forumCategory: PropTypes.string,
  forumCategoryDescription: PropTypes.string
}

export default ForumCategory
