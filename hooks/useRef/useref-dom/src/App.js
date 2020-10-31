import React, {useRef, useState } from "react";
import "./style.css";
import Counter from './Counter';

export default function App() {
  const [ childCompCount, setChidCompCount] = useState();
  const countRef = useRef();
  const bHandler = () => {
    console.log(countRef.current.innerHTML);
    setChidCompCount(countRef.current.innerHTML);
  };
  return (
    <div>
      <Counter ref={countRef}/>
      <p>------ this is parent component -------</p>
      <button onClick={bHandler}>
      Read Count value from parent</button>
      <p>
          click above button to read count 
          value from child comp : 
          {childCompCount}
      </p>
    </div>
  );
}
