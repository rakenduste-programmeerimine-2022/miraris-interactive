import { Typography } from "@mui/material"

const TopicContent = ({ topic }) => {
  return (
    <>
      <Typography>{topic.topic}</Typography>
      <Typography variant="subtitle2">{topic.description}</Typography>
    </>
  )
}

export default TopicContent
