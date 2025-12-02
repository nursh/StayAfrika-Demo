import '@app/styles/Counter.css'
import { useState } from "react"


export default function Counter() {
  const [count, setCount] = useState(0);

  const incCount = () => setCount(count + 1)
  const decCount = () => setCount(count - 1)

  return (
    <div className="counter">
      <button onClick={decCount}>-</button>
      <p>{count}</p>
      <button onClick={incCount}>+</button>
    </div>
  )
}