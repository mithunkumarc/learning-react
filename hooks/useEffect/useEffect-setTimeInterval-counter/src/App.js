import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [counter,setCounter] = useState(0);
  useEffect(() => {
    let handle = setInterval(() => {
      setCounter(counter + 1);      
    },1000)
    return () => {
      // clear interval or else old setInterval keep running
      clearInterval(handle);
    }
  })
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{counter}</p>
    </div>
  );
}
