import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(data => setTodos(data))
  },[]);// [] : useEffect runs only once when mounted
  const getUsers = () => {
    return todos.map(todo => <li>{todo["title"]}</li>)
  }

  return (
    <div>
      <ol>
        { getUsers() }
      </ol>
    </div>
  );
}
