import logo from "./logo.svg"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home.js"
import News from "./pages/News.js"
<<<<<<< Updated upstream
=======
import Portfolio from "./pages/Portfolio.js"
>>>>>>> Stashed changes

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/news"
          element={<News />}
        />
<<<<<<< Updated upstream
=======
        <Route
          path="/projects"
          element={<Portfolio />}
        />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  )
}
