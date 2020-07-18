/*
componentWillMount is executed before rendering, on both the server and the client side.

componentDidMount is executed after the first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.

componentWillReceiveProps is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.
it runs before componentWillUpdate

shouldComponentUpdate should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.

componentWillUpdate is called just before rendering.

componentDidUpdate is called just after rendering.

componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js.

*/

import React from 'react';
import {render} from 'react-dom';
class App extends React.Component {
  constructor(props) {
    this.state = {
      count:0
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({count : this.state.count + 1})
  }
  render() {
    return (
      <div>
        <ChildComponent counter={this.state.count}/>
        <button onClick={this.increment}>parent increment button {this.state.count}</button>
      </div>
    )
  }
}

class ChildComponent extends React.Component {
  //default constructor with props provided by react
  UNSAFE_componentWillMount() {
    console.log('component will mount');
  }
  componentDidMount() {
    console.log('component did mount')
  }
  UNSAFE_componentWillReceiveProps() {
    // click button , parent comp will send data to child comp
    console.log("component will receive props")
  }
  shouldComponentUpdate() {
    return true;//render comp if there is change in props/state
  }
  UNSAFE_componentWillUpdate() {
    console.log("component will update: called before render");// before rendering
  }
  componentDidUpdate() {
    console.log("component did update: called after render")
  }
  componentWillUnmount() {
    console.log("component will unmount")
  }
  render() {
    return(
      <div>inside child : counter : {this.props.counter}</div>
    )
  }
}


render(
  <App />,
  document.getElementById('root')
)


/*
component will mount
component did mount
component will receive props
component will update: called before render
component did update: called after render

*/
