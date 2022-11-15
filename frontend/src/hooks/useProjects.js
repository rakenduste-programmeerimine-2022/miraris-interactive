import { useEffect, useState } from "react"

export const useProjects = () => {
  console.log("useProjects")
  /*const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)*/
  const data = []

  const projectList = async id => {
    /*setIsLoading(true)
    setError(null)*/

    const response = await fetch("http://localhost:8080/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
    const json = await response.json()
    console.log("here")
    data.push(response.data)
    if (!response.ok) {
      /*setIsLoading(false)
      setError(json.error)*/
    }
    if (response.ok) {
      data.push(response.data)
      console.log("response ok")
    }
  }
  console.log(data)
  return { projectList }
}
