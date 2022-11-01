import { AppBar, Box, Toolbar, MenuItem, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const pages = ["home", "news", "projects", "forum"]
  const navigate = useNavigate()
  const handleRoute = e => {
    switch (e.target.textContent) {
      case "home":
        return navigate("/")
      case "news":
        return navigate("/news")
      case "projects":
        return navigate("/projects")
      case "forum":
        return navigate("/forum")
      default:
        return navigate("/")
    }
  }

  return (
    <AppBar position="sticky" sx={{ background: "#ba9120", alignItems: "center" }}>
      <Toolbar disableGutters>
        <Box sx={{ display: "flex", background: "#a17c16" }}>
          {pages.map(page => (
            <MenuItem
              key={page}
              onClick={e => handleRoute(e)}
            >
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
