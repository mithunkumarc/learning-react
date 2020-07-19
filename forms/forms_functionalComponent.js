import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import'bootstrap/dist/css/bootstrap.css';

const App = (props) => {
  const [formValues, setFormValues] = useState({formValues: {}});
  
  const setInputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    formValues['formValues'][name] = value
    setFormValues(formValues)
  }
  useEffect(() => {
    console.log(formValues)
  },[formValues])
  
  const handleSubmit = (e) => {
    console.log(formValues);
    //avoid refresh
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
