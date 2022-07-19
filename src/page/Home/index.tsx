import { useState } from 'react'
import KeepAlive from 'react-activation'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Home = () => {
  const [visible, setVisible] = useState(false)
  const [divRef] = useAutoAnimate<HTMLDivElement>()

  return (
    <>
      <button
        className="block p-2 m-2 rounded-lg border active:ring-2"
        onClick={() => setVisible((v) => !v)}
      >
        login
      </button>

      <div ref={divRef} className="overflow-hidden p-3 m-3 border">
        {visible ? (
          <>
            <ChildNode />
            <KeepAlive>
              <ChildNode />
            </KeepAlive>
          </>
        ) : null}
      </div>
    </>
  )
}

const ChildNode = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button
        className="px-2 m-2 border"
        onClick={() => setCount((v) => v + 1)}
      >
        +
      </button>
      {count}
    </>
  )
}

export default Home
