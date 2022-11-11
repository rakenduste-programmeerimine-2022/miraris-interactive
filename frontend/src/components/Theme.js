import { createTheme } from "@mui/material/styles"

const Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ba9120",
          boxShadow: "20px",
          border: "1px solid #a17c16",
          fontSize: "14px",
          fontWeight: "bold"
        }
      }
    }
  },
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
