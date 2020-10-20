import React, { useEffect } from 'react';

function Counter(props) {
  
  const value = props.value;
  const onIncrement = props.onIncrement;
  const onDecrement = props.onDecrement;
  
  useEffect(() => {
    console.log("counter component : rendered again")
  })
  
  return(
       <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
      </p>
  )
}

export default Counter;