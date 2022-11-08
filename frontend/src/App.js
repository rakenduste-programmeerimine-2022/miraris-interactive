import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import News from "./pages/News"
import NewsPage from "./pages/NewsPage"
import Portfolio from "./pages/Portfolio"
import Forum from "./pages/Forum"
import ForumTopic from "./pages/ForumTopic"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Project from "./pages/Project"

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
          path="/news/newspage"
          element={<NewsPage />}
        />
        <Route
          path="/projects"
          element={<Portfolio />}
        />
        <Route
          path="/projects/project"
          element={<Project />}
        />
        <Route
          path="/forum"
          element={<Forum />}
        />
        <Route
          path="/forum/topic"
          element={<ForumTopic />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
      </Routes>
    </BrowserRouter>
  )
}
