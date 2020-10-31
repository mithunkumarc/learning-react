import React, { useState } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ show, setShow ] = useState(false);
  const handleSubmit = (event) => {
    console.log(email, password);
    setShow(true);
    event.preventDefault();
  }
  const setData = (event) => {
    if(event.target.type === 'email') {
      console.log(event.target.value);
      setEmail(event.target.value);
    }
    if(event.target.type === 'password') {
      console.log(event.target.value);
      setPassword(event.target.value);
    }
  }
  return (
    <div className="container-fluid">
      <div className="row">
          <div className="col-md-3">
          </div>
          
          <div className="col-md-6">
            <h3>
              User Information
            </h3>
            <form role="form" onSubmit={handleSubmit}>
              <div className="form-group">
                
                <label htmlFor="exampleInputEmail1">
                  Email address
                </label>
                <input type="email" className="form-control" id="exampleInputEmail1" onChange={setData}/>
              </div>
              <div className="form-group">
                
                <label htmlFor="exampleInputPassword1">
                  Password
                </label>
                <input type="password" className="form-control" id="exampleInputPassword1" 
                onChange = { setData }/>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <br/>
            <h3>
              { show ? email + ',' + password : ''}
            </h3>
          </div>
          
          <div className="col-md-3">
          </div>
	    </div>
    </div>
  );
}
