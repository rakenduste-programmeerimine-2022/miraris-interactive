import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home.js"
import News from "./pages/News.js"
import Portfolio from "./pages/Portfolio.js"

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
        <Route
          path="/projects"
          element={<Portfolio />}
        />
      </Routes>
    </BrowserRouter>
  )
}