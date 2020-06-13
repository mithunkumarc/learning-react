// helper function writter outside function component, helps setter method to solve logic
// index.js file
import React, {useState} from 'react';
import {render} from 'react-dom';

const helperIncrement = (count) => count + 1 

function Example() {
  //Declare a new state variable , which we will call count
  // useState : gives two ref, one var and setter method
  const [count, setCount] = useState(0);
  const increment = () => setCount(helperIncrement(count))
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={increment}>
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
