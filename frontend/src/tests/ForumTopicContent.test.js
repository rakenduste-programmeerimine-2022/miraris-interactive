import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import ForumTopicContent from "../components/ForumTopicContent"

let container = null
let topic = {
    forumTopic: "testTopic",
    forumTopicDescription: "testTopicDesc"
}

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders with given test name and description", () => {
  act(() => {
    render(<ForumTopicContent topic={topic}></ForumTopicContent>, container)
  })
  expect(container.textContent).toBe("testTopictestTopicDesc")
})
