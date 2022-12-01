import { List } from "@mui/material"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { usePostsContext } from "../hooks/usePostsContext"
import ForumPostListContent from "./ForumPostListContent"

const ForumPostList = () => {
  const { posts, dispatch } = usePostsContext()
  const { id } = useParams()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `http://localhost:8080/api/forum/topic/posts/${id}`
      )
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_POSTS", payload: json })
      }
    }

    fetchPosts()
  }, [dispatch, id])

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {posts &&
        [...posts].reverse().map(post => (
          <ForumPostListContent
            key={post._id}
            post={post}
          />
        ))}
    </List>
  )
}

export default ForumPostList
