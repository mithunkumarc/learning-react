// use below code in index.js

import React, {useState} from 'react';
import {render} from 'react-dom';

function Example() {
  //Declare a new state variable , which we will call count
  // useState : gives two ref, one var and setter method
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>   // check jsx events name conventions with js events
        click me
      </button>
    </div>
  )
}

render(
  <Example />
  ,
  document.getElementById('root')
)
