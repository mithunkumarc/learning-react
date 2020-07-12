import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

function App() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
      'https://jsonplaceholder.typicode.com/users/1/todos',
    );
    console.log(result)
    setUsers(result.data);
    }
    fetch()
  }, []);
 
  return (
    <ul>
      {users.map(u => <li>{u.title}</li>)}
    </ul>
  );
}
render(
  <App />,
  document.getElementById('root')
)
