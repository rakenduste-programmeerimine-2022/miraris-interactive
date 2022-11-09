import React, { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import "../App.css"
import {
  Box,
  TextField,
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

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async e => {
    e.preventDefault()

    await signup(name, email, password)
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
        <Typography>Sign up</Typography>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl required>
              <InputLabel>Name</InputLabel>
              <Input
                type="text"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </FormControl>
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
              Sign up
            </Button>
          </FormGroup>
          {error && <Box>{error}</Box>}
        </form>
      </Box>
    </ThemeProvider>
  )
}

export default Signup
