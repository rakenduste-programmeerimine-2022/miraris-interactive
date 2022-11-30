import { Typography } from "@mui/material"
import { PropTypes } from "prop-types"

const NewsContent = ({ newsElement }) => {
  let header = newsElement.header
  let introduction = newsElement.introduction
  let body = newsElement.body
  return (
    <>
      <Typography
        align="center"
        sx={{
          width: "100%",
          maxWidth: 720
        }}
      >
        {header}
      </Typography>
      <Typography
        align="justify"
        sx={{ width: "100%", maxWidth: 720, whiteSpace: "pre-line" }}
      >
        {introduction}
      </Typography>
      <Typography
        align="justify"
        sx={{ width: "100%", maxWidth: 720, whiteSpace: "pre-line" }}
      >
        {body}
      </Typography>
    </>
  )
}

NewsContent.propTypes = {
  header: PropTypes.string,
  introduction: PropTypes.string,
  body: PropTypes.string
}

export default NewsContent
