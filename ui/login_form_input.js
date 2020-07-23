/*
make sure u have added bootstrap in dependencies
*/

import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import'bootstrap/dist/css/bootstrap.css';

const App = (props) => {
  // creating object to store state of each fields
  const [formValues, setFormValues] = useState({formValues: {}});
  
  // function to update form field state
  const setInputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    formValues['formValues'][name] = value
    setFormValues(formValues)
  }
  
  useEffect(() => {
    //console.log(formValues), post state update tasks here
  },[formValues])
  
  //onsubmit tasks here
  const handleSubmit = (e) => {
    console.log(formValues);
    //avoid re-rendering component again on state update
    e.preventDefault();
  }
  
  return(
    <div className="row">
      <div className="card">
      </div>
      <div className='col-3'></div>
      <div className='col-6'>
        <div className="card">
          <div className="card-body">
          <h5 className="card-title"> user information</h5>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>name</label>
                <input type="text" onChange={setInputEvent} placeholder="name" name="name" className="form-control"/>
              </div>
              <div className="form-group">
                <label>age</label>
                <input type="number" onChange={setInputEvent} placeholder="age" name="age" className="form-control"/>
              </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">submit</button>
            </div>                            
          </form>
          </div>
        </div>
      </div>
      <div className='col-3'></div>
    </div>      
  )
  
}

render(
  <App />,
  document.getElementById('root')
)
