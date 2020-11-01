import React, { useEffect, useState } from "react";
import "./style.css";
import axios from 'axios';

export default function App() {
  // if you are expecting list, initialize with empty array
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/todos/');
      setList(result.data);
    }
    fetchData();
  }
   ,[]); // [] : this useEffect runs only when comp is mounted


  return (
    <div>
      
        {list.map(l => <li>{l['title']}</li>)}
      
    </div>
  );
}
