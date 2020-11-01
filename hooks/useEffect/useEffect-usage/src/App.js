import React, {useState, useEffect} from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const countHandler = (event) => {
    setCount(count + 1)
  }
  const nameHandler = (event) => {
    setName(event.target.value);
  }
  
  useEffect(() => {
    console.log("1. executed when any state/prop of component is changed");
  });
  
  
  useEffect(() => {
    console.log("2. executes only once when component mounted");
  },[]);

  useEffect(() => {
    console.log("3. executed when count is changed.")
  },[count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={countHandler}>click</button>
      <br/>
      <p>name: {name}</p>
      <br/>
      <input type="text" placeholder="name" onChange={nameHandler}/>
    </div>
  );
}
