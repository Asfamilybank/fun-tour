import { render } from '@testing-library/react'
import App from 'App'

it('test right', () => {
  const { asFragment } = render(<App />)

  expect(asFragment).matchSnapshot()
})
