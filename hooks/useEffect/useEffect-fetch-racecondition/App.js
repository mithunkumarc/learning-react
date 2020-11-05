import React, {useState, useEffect} from "react";
import "./style.css";

export default function App() {
  // {} : expecting object
  const [todo, setTodo] = useState({});
  useEffect(() => {
    let isActive = true;// create lock
    /* 
      this example may not need racecondition fix
      because request/url doesn/t depends on state/props.
     */
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        if(isActive){
          setTodo(data)
        }
      }
    )
    return () => {
      isActive = false;//when request complete, relase lock
    }
  },[])// executes only once when component is mounted
  return (
    <div>
      <h3>{todo['id']}</h3>
      <br/>
      <h2>{todo['title']}</h2>
    </div>
  );
}
