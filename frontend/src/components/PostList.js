import { List, ListItem, ListItemText } from "@mui/material"

const PostList = () => {
  return (
    <List className="contentList">
      <ListItem className="listItem">
        <ListItemText
          primary="User"
          secondary="Comment"
        />
      </ListItem>
      <ListItem className="listItem">
        <ListItemText
          primary="User"
          secondary="Comment"
        />
      </ListItem>
    </List>
  )
}

export default PostList
