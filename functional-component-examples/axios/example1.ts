import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

function App() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
    setData(result.data);
    }
    fetch()
  }, []);
 
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
render(
  <App />,
  document.getElementById('root')
)
