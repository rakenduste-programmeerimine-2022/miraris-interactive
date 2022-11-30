import { List } from "@mui/material"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useCommentsContext } from "../hooks/useCommentsContext"
import PostListContent from "./PostListContent"

const PostList = () => {
  const { comments, dispatch } = useCommentsContext()
  const { id } = useParams()

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `http://localhost:8080/api/news/comments/${id}`
      )
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_COMMENTS", payload: json })
      }
    }

    fetchComments()
  }, [dispatch, id])

  return (
    <List className="contentList">
      {comments &&
        [...comments].reverse().map(comment => (
          <PostListContent
            key={comment._id}
            comment={comment}
          />
        ))}
    </List>
  )
}

export default PostList
