import { useEffect, useState } from "react"

export const useProjects = () => {
  console.log("useProjects")
  /*const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)*/
  const data = []

  const projectList = async id => {
    console.log(id)
    /*setIsLoading(true)
    setError(null)*/

    fetch("http://localhost:8080/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success", result)
    })
    .catch((error) => {
      console.log("Error", error)
    })
    /*const json = await response.json()
    console.log("here")
    data.push(response.data)
    if (!response.ok) {
      /*setIsLoading(false)
      setError(json.error)*/
   /* }
    if (response.ok) {
      data.push(response.data)
      console.log("response ok")
    }*/
  }

  return { projectList }
}
