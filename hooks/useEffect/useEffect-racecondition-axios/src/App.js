import React, { useState, useEffect } from "react";
import "./style.css";
import axios from 'axios';

export default function App() {
  /* initialize todos with empty array if you are exptecting array from api call*/
  const [todos, setTodos] = useState([]);
  const [lock, setLock] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      /* 
        like synchronising in java.
        put lock when request is in process.
        when request is complete, remove lock.
      */
      if (!lock) {
        setLock(true);
        /* 
          this example may not run into racecondition
          becuase, url/reuest not dependending on any props/state.
          if request depends on props/state, it may run into race condition.  
        */
        const result = await axios('https://jsonplaceholder.typicode.com/todos'); 
        console.log(result.data);
        setTodos(result.data);
        setLock(false);
      }
    };
    fetchData();
  },[]); // runs only once when component is mounted/created
  return (
    <div>
      <ol>
        {
          todos.map(todo => 
          <li key={`${todo['id']}`}>{todo['title']}</li>
          )
        }
      </ol>
    </div>
  );
}
