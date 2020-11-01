import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {
      console.log("cleanup before rendered again");
    }
  })
  const countHandler = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <p>everytime there is change in count value , component rendered agian, when old instance is beging destroyed, cleanup function will be called.</p>
      <p>
        {count}
      </p>
      <button onClick={countHandler}>increment</button>
    </div>
  );
}
