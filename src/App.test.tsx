import { render } from '@testing-library/react'
import App from 'App'

it('test right', () => {
  const { asFragment } = render(<App />)
  console.log(1)
  expect(asFragment).matchSnapshot()
})
