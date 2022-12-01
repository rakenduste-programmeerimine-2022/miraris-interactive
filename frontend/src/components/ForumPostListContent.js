import { ListItem, ListItemText } from "@mui/material"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import PersonIcon from "@mui/icons-material/Person"
import { useAuthContext } from "../hooks/useAuthContext"

const PostListContent = ({ post }) => {
  const { user } = useAuthContext()

  return (
    <ListItem>
      <ListItemAvatar
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          marginRight: "20px"
        }}
      >
        <PersonIcon />
        <ListItemText secondary={post.user.name || user.name} />
      </ListItemAvatar>
      <ListItemText
        primary={post.title}
        secondary={post.body}
      />
    </ListItem>
  )
}

export default PostListContent
