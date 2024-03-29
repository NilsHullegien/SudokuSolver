import { useState } from 'react'
import PrintBlock from "./Visual/page/PrintBlock.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    <PrintBlock>{'hello'}</PrintBlock>
    </>
  )
}

export default App
