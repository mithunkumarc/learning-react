/*
  when state of component changes it will be rendered again. 
  when component is rendered ,its child component also will be rendered even there is not change in child component.
  so to keep child component rendering again , we can use React.memo() to remember (memoize) avoid render again.

  // as a child component , this component will be rendered again
  const Hello = () => {
    console.log("hello cmp");
    return <div>hello component</div>
  }
  
  // so use React.memo : this component will not be rendered only once chech console
  const Hello = React.memo(() => {
    console.log("hello cmp");
    return <div>hello component</div>
  })

*/


import React, { Component } from 'react';
import { render } from 'react-dom';

// embedding component inside React.memo(your component)
const Hello = React.memo(() => {
  console.log("hello cmp");
  return <div>hello component</div>
})

class App extends Component {
  constructor() {
    super();
    this.state = {counter:0};
    this.increment = this.increment.bind(this);
  }  
  increment = () => {
    this.setState({counter: this.state.counter + 1})
  }
  render() {
    return (
      <div>
        <Hello />
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


