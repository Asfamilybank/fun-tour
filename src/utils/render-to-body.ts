import { ReactElement } from 'react'
import { createRoot } from 'react-dom/client'

export function renderToBody(element: ReactElement, parent?: HTMLElement) {
  const div = document.createElement('div')
  ;(parent ?? document.body).appendChild(div)
  const renderRoot = createRoot(div)
  function unmount() {
    renderRoot.unmount()
    if (div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }
  renderRoot.render(element)
  return unmount
}
