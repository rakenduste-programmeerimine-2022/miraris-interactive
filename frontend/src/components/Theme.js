import { createTheme } from "@mui/material/styles"

const Theme = createTheme({
  palette: {
    primary: {
      main: "#ba9120",
      dark: "#a17c16",
      success: "#66bb6a"
    }
  },
  typography: {
    fontSize: 16,
    introduction: {
      fontSize: 24,
      align: "center",
      padding: 10
    },
    navbar: {
      color: "white"
    }
  }
})

export default Theme
