import { useProjectsContext } from "../hooks/useProjectsContext"

const ProjectContent = ({ project }) => {
    console.log("here")
  const { dispatch } = useProjectsContext()
  const content = project.content
  console.log(content)

  return content
}

export default ProjectContent
