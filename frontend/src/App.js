import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import News from "./pages/News"
import NewsPage from "./pages/NewsPage"
import Portfolio from "./pages/Portfolio"
import Forum from "./pages/Forum"
import ForumTopic from "./pages/ForumTopic"

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
          path="/newspage"
          element={<NewsPage />}
        />
        <Route
          path="/projects"
          element={<Portfolio />}
        />
        <Route
          path="/forum"
          element={<Forum />}
        />
        <Route
          path="/forumtopic"
          element={<ForumTopic />}
        />
      </Routes>
    </BrowserRouter>
  )
}
