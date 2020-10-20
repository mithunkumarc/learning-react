import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import Counter from './Counter';
import counter from './reducers';
const store = createStore(counter);

const render = () => ReactDOM.render(
  /*
    to change the state of store(counter), call dispatch function.
    store dispatch will ask reduces to apply logic and make changes.

    store.dispatch('setSplitData',[data[0], data [1]])

   */
  
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT', value: 1 })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT', value: -1 })}
  />, 
  document.getElementById("root")
);

render();
// when there is change in store state, render again
store.subscribe(render);