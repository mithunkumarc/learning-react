// useState with eventHandler
// index.js file
import React, {useState} from 'react';
import {render} from 'react-dom';

function Example() {
  // Declare a new state variable , which we will call count
  // useState : gives two ref, one var and setter method
  const [count, setCount] = useState(0);
  const increment = () => setCount(count+1)
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={increment}>        // seperate : event handler function
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
