import '@app/styles/Counter.css'
import { useState } from "react"


type CounterProps = {
  initValue?: number;
  step?: number
}

export default function Counter({ initValue , step }: CounterProps) {

  const initialCount = initValue || 0;
  const stepValue = step || 1;
  const [count, setCount] = useState(initialCount);

  const incCount = () => setCount(count + stepValue)
  const decCount = () => count >= initialCount ? setCount(count - stepValue) : setCount(initialCount)

  return (
    <div className="counter">
      <button onClick={decCount}>-</button>
      <p>{count}</p>
      <button onClick={incCount}>+</button>
    </div>
  )
}