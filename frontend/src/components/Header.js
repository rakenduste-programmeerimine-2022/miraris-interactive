import {
  AppBar,
  Box,
  Toolbar,
  MenuItem,
  Typography,
  Button
} from "@mui/material"
import React from "react"
import "../App.css"
import { useNavigate } from "react-router-dom"
import Theme from "./Theme"
import { ThemeProvider } from "@mui/material/styles"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import Logo from "../images/logo.png"

export default function Header() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

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
      <Box className="mainContainer">
        <Box
          component="img"
          sx={{
            height: 90,
            width: 250
          }}
          src={Logo}
        />
        {!user && (
          <Box>
            <Button
              sx={{ marginRight: "10px" }}
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
        )}
        {user && (
          <Box>
            <Typography>{user.name}</Typography>
            <Button
              color="primary"
              onClick={handleClick}
            >
              Log out
            </Button>
          </Box>
        )}
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
