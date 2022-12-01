import { createContext, useReducer } from "react"

export const PostsContext = createContext()

export const postsReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        posts: action.payload
      }
    case "CREATE_POST":
      return {
        posts: [...state.posts, action.payload]
      }
    default:
      return state
  }
}

export const PostssContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, {
    posts: null
  })

  return (
    <PostsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostsContext.Provider>
  )
}
