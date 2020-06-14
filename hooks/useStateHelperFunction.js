//index.js
//useState can take help of helper function to compute initial value for states

import React, {useState} from 'react';
import {render} from 'react-dom';

const computeInitialCount = (initialCount) => initialCount + 1; 

function Counter({initialCount}) {
  //initialCount coming here as 0, but we need to set it to 1
  const [count, setCount] = useState(() => computeInitialCount(initialCount));
  //useState called once, when reset button is clicked
  //initial count set to zero so , 
  //reset button setCount to reset to 1
  return (
    <>
      count : {count}
      <button onClick={() => setCount(() => computeInitialCount(initialCount) )}>reset</button>
      <button onClick={() => setCount(prevCount => prevCount +1)}>increment</button>
      <button onClick={() => setCount(prevCount => prevCount -1)}>decrement</button>
    </>
  )
}

render(
  //sending zero, but useState take helper function to change
  <Counter initialCount={0} />, 
  document.getElementById('root')
)
