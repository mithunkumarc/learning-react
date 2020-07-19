/*
  onSubmit of form component reloading the browser, becuase html native elements have internal state and any change here leads react to reload
  to avoid this use preventDefault()
  
*/

import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formValues: {}
  }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setInputEvent = this.setInputEvent.bind(this);
  }
  setInputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const formValues = this.state.formValues;
    formValues[name] = value;
    this.setState({formValues})
  }
  
  handleSubmit(e) {
    console.log(this.state)
    //avoid refresh
    e.preventDefault();
  }
  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.setInputEvent} placeholder="name" name="name"/>
        <input type="number" onChange={this.setInputEvent}
        placeholder="age" name="age"/>
        <button type="submit">enter</button>
      </form>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
