import React, { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import "../App.css"
import {
  Box,
  Typography,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  Input
} from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import Header from "../components/Header"
import Theme from "../components/Theme"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async e => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "top",
          flexDirection: "column",
          gap: "25px",
          height: "100vh"
        }}
      >
        <Header></Header>
        <Typography>Login</Typography>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl required>
              <InputLabel>Email address</InputLabel>
              <Input
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl required>
              <InputLabel>Password</InputLabel>
              <Input
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </FormControl>
            <Button
              color="success"
              variant="contained"
              type="submit"
              disabled={isLoading}
            >
              Log in
            </Button>
          </FormGroup>
          {error && <Box>{error}</Box>}
        </form>
      </Box>
    </ThemeProvider>
  )
}

export default Login
