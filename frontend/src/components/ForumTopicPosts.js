import { useState } from "react"
import { useParams } from "react-router-dom"
import { usePostsContext } from "../hooks/usePostsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel
} from "@mui/material"
import ForumPostList from "./ForumPostList"

const ForumTopicPosts = () => {
  const { dispatch } = usePostsContext()
  const { user } = useAuthContext()
  const { id } = useParams()

  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    if (!user) {
      setError("You must be logged in")
      return
    }

    const post = { id, postTitle, postBody }

    const response = await fetch(`http://localhost:8080/api/forum/topic`, {
      method: "POST",
      body: JSON.stringify(post),
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
      setPostTitle("")
      setPostBody("")
      setError(null)
      dispatch({ type: "CREATE_POST", payload: json })
    }
  }

  return (
    <>
      <ForumPostList />
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl required>
            <InputLabel>Post title</InputLabel>
            <Input
              className="commentField"
              type="text"
              onChange={e => setPostTitle(e.target.value)}
              value={postTitle}
            />
          </FormControl>
          <FormControl required>
            <InputLabel>Post contents</InputLabel>
            <Input
              className="commentField"
              type="text"
              onChange={e => setPostBody(e.target.value)}
              value={postBody}
            />
          </FormControl>
          <Button
            color="success"
            variant="contained"
            type="submit"
          >
            Post
          </Button>
        </FormGroup>
        {error && <Box>{error}</Box>}
      </form>
    </>
  )
}

export default ForumTopicPosts
