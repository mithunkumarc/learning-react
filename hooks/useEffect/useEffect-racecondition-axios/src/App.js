import React, { useState, useEffect } from "react";
import "./style.css";
import axios from 'axios';

export default function App() {
  /* initialize todos with empty array if you are exptecting array from api call*/
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
      /* 
        like synchronising in java.
        put lock when request is in process.
        when request is complete, remove lock.
      */
    let isActive = true;
    const fetchData = async () => {
        /* 
          this example may not run into racecondition
          because, url/reuest not dependending on any props/state.
          if request depends on props/state, it may run into race condition.  
        */
        const result = await axios('https://jsonplaceholder.typicode.com/todos'); 
        if(isActive) {
          setTodos(result.data);
        }
    };
    fetchData();
    return () => {
      isActive = false;
    }
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
