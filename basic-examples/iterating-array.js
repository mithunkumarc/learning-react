// use below code in index.js file

import React, { useState } from 'react';
import { render } from 'react-dom';

const FruitBasket = (props) => {
  const fruits = ['Apple','Grapes','orange']
  const fruitsIterator = fruits.entries();
  const fruitList = [];
  let it;
  while(!(it = fruitsIterator.next()).done){
    const [k,v] = it.value;
    fruitList.push(<li>{k+1} : {v}</li>)
  }
  return (
    <div>
      {fruitList}
    </div>
  )
}

const App = (props) => {
  return (
      <div>
        <p>
          Fruit basket
        </p>
          <FruitBasket />
      </div>
    );
  }

render(<App />, document.getElementById('root'));
