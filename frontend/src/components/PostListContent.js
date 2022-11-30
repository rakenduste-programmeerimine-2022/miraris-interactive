import { ListItem, ListItemText } from "@mui/material"
import { useAuthContext } from "../hooks/useAuthContext"

const PostListContent = ({ comment }) => {
  const { user } = useAuthContext()

  return (
    <ListItem className="listItem">
      <ListItemText
        primary={comment.user.name || user.name}
        secondary={comment.comment}
      />
    </ListItem>
  )
}

export default PostListContent
