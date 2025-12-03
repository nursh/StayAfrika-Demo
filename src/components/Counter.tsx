import "@app/styles/Counter.css";
import { useState } from "react";

type CounterProps = {
  initValue?: number;
  step?: number;
  textClass?: string;
};

export default function Counter({
  initValue,
  step,
  textClass,
}: CounterProps) {
  const initialCount = initValue || 0;
  const stepValue = step || 1;
  const [count, setCount] = useState(initialCount);

  const incCount = () => 
    setCount(count + stepValue);

  const decCount = () => {
    if (count > initialCount) {
      setCount(count - stepValue);
    } else {
      setCount(initialCount);
    }
  };

  return (
    <div className="counter">
      <button onClick={decCount}>-</button>
      <p className={textClass || ""}>{count}</p>
      <button onClick={incCount}>+</button>
    </div>
  );
}
