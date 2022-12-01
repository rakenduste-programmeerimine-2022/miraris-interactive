import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"
import "./App.css"
import Home from "./pages/Home"
import News from "./pages/News"
import NewsPage from "./pages/NewsPage"
import Portfolio from "./pages/Portfolio"
import Forum from "./pages/Forum"
import ForumTopic from "./pages/ForumTopic"
import ForumPost from "./pages/ForumPost"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Project from "./pages/Project"

export default function App() {
  const { user } = useAuthContext()

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
          path="/news/:id"
          element={<NewsPage />}
        />
        <Route
          path="/projects"
          element={<Portfolio />}
        />
        <Route
          path="/projects/:id"
          element={<Project />}
        />
        <Route
          path="/forum"
          element={<Forum />}
        />
        <Route
          path="/forum/category/:id"
          element={<ForumTopic />}
        />
        <Route
          path="/forum/topic/:id"
          element={<ForumPost />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  )
}
