import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import NewsContent from "../components/NewsContent"

let container = null
let newsElement = {
  header: "mockNews",
  introduction: "mockNewsIntroduction",
  body: "mockNewsBody"
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

it("renders with given test header, introduction, and body", () => {
  act(() => {
    render(<NewsContent newsElement={newsElement}></NewsContent>, container)
  })
  expect(container.textContent).toBe("mockNewsmockNewsIntroductionmockNewsBody")
})
