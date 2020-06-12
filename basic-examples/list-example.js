// use curly braces inside jsx

import React, { useState } from 'react';
import { render } from 'react-dom';

const FruitBasket = (props) => {
  let fruits = ["Apple","Banana","Grapes"];
  let items = [];
  for (let fruit of fruits) {
    items.push(<li>{fruit}</li>)                    // use curly braces inside jsx
  }
  return (
    <ul>
    {items}                                         // use curly braces inside jsx
    </ul>
  )
}

const App = (props) => {
  const [name,setName] = useState('');
 
  return (
      <div>
        <p>
          Fruit Corner
        </p>
          <FruitBasket />
      </div>
    );
  }

render(<App />, document.getElementById('root'));
