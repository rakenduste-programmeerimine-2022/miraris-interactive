import { createContext, useReducer } from "react"

export const NewsContext = createContext()

export const newsReducer = (state, action) => {
  switch (action.type) {
    case "SET_NEWS":
      return {
        news: action.payload
      }
    case "SET_NEWS_BY_ID":
      return {
        newsElement: action.payload
      }
    default:
      return state
  }
}

export const NewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, {
    news: null
  })

  return (
    <NewsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NewsContext.Provider>
  )
}
