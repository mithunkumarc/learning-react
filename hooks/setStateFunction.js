// index.js
//setState , access previous value and can alter using function

import React, {useState} from 'react';
import {render} from 'react-dom';

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      count : {count}
      <button onClick={() => setCount(initialCount)}>reset</button>
      <button onClick={() => setCount(prevCount => prevCount +1)}>increment</button>
      <button onClick={() => setCount(prevCount => prevCount -1)}>decrement</button>      // setState takes function
    </>
  )
}

render(
  <Counter initialCount={0} />,
  document.getElementById('root')
)
