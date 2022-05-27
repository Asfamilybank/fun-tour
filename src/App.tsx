import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <p className="m-2">Hello Fun Tour</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
