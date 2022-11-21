import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Button } from "@mui/material"

import { useNewsContext } from "../hooks/useNewsContext"

const NewsDetails = ({ news }) => {
  console.log("here")
  const { dispatch } = useNewsContext()
  const id = news._id
  console.log(id)

  return (
    <ListItem>
      <ListItemText
        primary={news.header}
        secondary={news.introduction}
      ></ListItemText>
      <Button
        onClick={e => {
          e.preventDefault()
          window.location.href = "news/newspage/" + id
        }}
      >
        Read more
      </Button>
    </ListItem>
  )
}

export default NewsDetails
