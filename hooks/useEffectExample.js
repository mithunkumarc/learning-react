//index.js
import {render} from 'react-dom';
import React, {useState, useEffect} from 'react';

function UpdateDocTitle() {

  const [count, setCount] = useState(0);
  
  useEffect(() =>{
    //works after component state UpdateDocTitle
    //open browser in separate window if you are using stackblitz
    document.title = `clicked ${count} times`;
  })
  
  return (
    <button onClick = {() => setCount(count + 1)}>
    click me
    </button>
  )
}

render(
  <UpdateDocTitle />
  ,
  document.getElementById('root')
)
