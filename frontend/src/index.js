import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { AuthContextProvider } from "./context/AuthContext"
import { ProjectsContextProvider } from "./context/ProjectContext"
import { NewsContextProvider } from "./context/NewsContext"
import { CommentsContextProvider } from "./context/CommentContext"
import { ForumContextProvider } from "./context/ForumContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProjectsContextProvider>
        <NewsContextProvider>
          <CommentsContextProvider>
            <ForumContextProvider>
              <App />
            </ForumContextProvider>
          </CommentsContextProvider>
        </NewsContextProvider>
      </ProjectsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
