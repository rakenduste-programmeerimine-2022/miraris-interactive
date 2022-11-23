import { Typography } from "@mui/material"

const NewsContent = ({ newsElement }) => {
  return (
    <>
      <Typography
        align="center"
        sx={{
          width: "100%",
          maxWidth: 720
        }}
      >
        {newsElement.header}
      </Typography>
      <Typography
        align="justify"
        sx={{ width: "100%", maxWidth: 720, whiteSpace: "pre-line" }}
      >
        {newsElement.introduction}
      </Typography>
      <Typography
        align="justify"
        sx={{ width: "100%", maxWidth: 720, whiteSpace: "pre-line" }}
      >
        {newsElement.body}
      </Typography>
    </>
  )
}

export default NewsContent
