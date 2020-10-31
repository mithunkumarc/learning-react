import React, {useState} from 'react';

function Counter(prop, ref) {
  
  const [count, setCount] = useState(0);
  const incrementHandler = (event) => {
    setCount(count + 1);
  }
  return (
    <div>
      <p>--------- child component --------</p>
      <p ref={ref}> 
        {count}
      </p>
      <button onClick={incrementHandler}>+</button>
    </div>
  )
}


const ForwarededCounter = React.forwardRef(Counter);

export default ForwarededCounter;