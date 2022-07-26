import { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'

export function renderToBody(element: ReactElement) {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const container = createRoot(div)

  function unmount() {
    container.unmount()
    if (div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }
  container.render(element)
  return unmount
}
