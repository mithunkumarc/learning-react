import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.myref = React.createRef();
    this.setFocus = this.setFocus.bind(this);
  }  
  setFocus = () => {
    this.myref.current.focus();         // this will take focus to input box referred by "myref"
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="enter message" ref={this.myref}/>
        <button onClick={this.setFocus}>click</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
