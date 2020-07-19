/*
  add boostrap jquery popper in dependency
*/

import React from 'react';
import { render } from 'react-dom';
import'bootstrap/dist/css/bootstrap.css';

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
      <div class="row">
        <div class="card">
        </div>
        <div class='col-3'></div>
        <div class='col-6'>
          <div class="card">
            <div class="card-body">
            <h5 class="card-title"> user information</h5>
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label>name</label>
                  <input type="text" onChange={this.setInputEvent} placeholder="name" name="name" class="form-control"/>
                </div>
                <div class="form-group">
                  <label>age</label>
                  <input type="number" onChange={this.setInputEvent} placeholder="age" name="age" class="form-control"/>
                </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">submit</button>
              </div>                            
            </form>
            </div>
          </div>
        </div>
        <div class='col-3'></div>
      </div>      
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
