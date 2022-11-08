import {
  AppBar,
  Box,
  Toolbar,
  MenuItem,
  Typography,
  Button
} from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import Theme from "./Theme"
import { ThemeProvider } from "@mui/material/styles"

export default function Header() {
  const navigate = useNavigate()
  const loginPage = () => {
    let path = "/login"
    navigate(path)
  }
  const signupPage = () => {
    let path = "/signup"
    navigate(path)
  }
  const pages = ["home", "news", "projects", "forum"]
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
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "top",
          flexDirection: "row",
          gap: "25px",
          height: "100vh"
        }}
      >
        <Box
          component="img"
          sx={{
            height: 90,
            width: 250
          }}
          src="https://miraris.do.am/resource/logo.png"
        />
        <Button
          color="primary"
          onClick={loginPage}
        >
          Login
        </Button>
        <Button
          color="primary"
          onClick={signupPage}
        >
          Signup
        </Button>
      </Box>
      <AppBar
        position="sticky"
        sx={{ background: "#ba9120", alignItems: "center", variant: "navbar" }}
      >
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", background: "#a17c16" }}>
            {pages.map(page => (
              <MenuItem
                key={page}
                onClick={e => handleRoute(e)}
              >
                <Typography
                  textAlign="center"
                  variant="navbar"
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}
