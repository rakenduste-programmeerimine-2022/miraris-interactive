import { createContext, useReducer } from "react"

export const ForumContext = createContext()

export const forumReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        categories: action.payload
      }
    case "SET_TOPICS":
      return {
        topics: action.payload
      }
    case "SET_TOPIC_BY_ID":
      return {
        topic: action.payload
      }
    default:
      return state
  }
}

export const ForumContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(forumReducer, {
    categories: null,
    topics: null
  })

  return (
    <ForumContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ForumContext.Provider>
  )
}
