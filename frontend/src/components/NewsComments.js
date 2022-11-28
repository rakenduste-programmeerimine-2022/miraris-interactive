import { useState } from "react"
import { useParams } from "react-router-dom"
import { useCommentsContext } from "../hooks/useCommentsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography
} from "@mui/material"
import CommentList from "../components/PostList"

const NewsComments = () => {
  const { dispatch } = useCommentsContext()
  const { user } = useAuthContext()
  const { id } = useParams()

  const [commentBody, setCommentBody] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    if (!user) {
      setError("You must be logged in")
      return
    }

    const comment = { id, commentBody }

    const response = await fetch(`http://localhost:8080/api/news/`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setCommentBody("")
      setError(null)
      dispatch({ type: "CREATE_COMMENT", payload: json })
    }
  }

  return (
    <>
      <Typography>Comments</Typography>
      <CommentList></CommentList>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl required>
            <InputLabel>Comment</InputLabel>
            <Input
              className="commentField"
              type="text"
              onChange={e => setCommentBody(e.target.value)}
              value={commentBody}
            />
          </FormControl>
          <Button
            color="success"
            variant="contained"
            type="submit"
          >
            Post comment
          </Button>
        </FormGroup>
        {error && <Box>{error}</Box>}
      </form>
    </>
  )
}

export default NewsComments
