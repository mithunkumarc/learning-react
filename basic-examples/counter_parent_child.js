import "./styles.css";
import { useState } from "react";

const Child = (props: { text: Number; add: Function; sub: Function }) => {
  return (
    <div>
      <p>Counter {props.text}</p>
      <button onClick={() => props.add()}>increment</button>
      <button onClick={() => props.sub()}>decrement</button>
    </div>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(() => count + 1);
  };
  const decrement = () => {
    setCount(() => count - 1);
  }
  return (
    <div>
      <Child text={count} add={increment} sub={decrement}/>
    </div>
  );
};

export default function App() {
  return <Parent />;
}
