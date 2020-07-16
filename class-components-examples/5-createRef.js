import React, { Component } from 'react';
import { render } from 'react-dom';


const Hello = ({ name }) => {
  console.log("hello comp")
  return <h1>Hello {name}!</h1> 
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
    this.myref = React.createRef();   // similar to template ref var in anular/ useRef in functional component

    this.activateLasers = this.activateLasers.bind(this);   // event bind inside constructor
  }
  
  // define event bind
  activateLasers = () => {
    this.setState({name: this.myref.current.value})
    //console.log(this.myref.current.value);
  }
  
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <input type="text" placeholder="enter message" ref={this.myref}/>
        <button onClick={this.activateLasers}>click</button>                  // notice this keyword used here
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
