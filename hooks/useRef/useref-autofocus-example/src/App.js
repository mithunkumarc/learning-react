import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const agreeRef = useRef();
  const [ email, setEmail] = useState();
  const [ password, setPassword ] = useState();
  const [ agree, setAgree ] = useState(false);
  const emailHandler = () => {
    console.log(emailRef.current.type, emailRef.current.value);
    setEmail(emailRef.current.value);
  }
  const passwordHandler = () => {
    setPassword(passwordRef.current.value);
  }
  const agreeHandler = () => {
    console.log(agreeRef.current.checked);
    setAgree(agreeRef.current.checked);
  }
  const submitHandler = (e) => {
    e.preventDefault();
  }
  useEffect(() => {
    //on page load, get focus to email input
    emailRef.current.focus();
  },[]) //[] array imp here, else component will refresh onchange of input.

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
            <h3>
              useref example.
            </h3>
            <form role="form" onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Email address
                </label>
                <input type="email" className="form-control" id="exampleInputEmail1" ref = {emailRef} 
                onChange={emailHandler}/>
              </div>
              <div className="form-group">                
                <label htmlFor="exampleInputPassword1">
                  Password
                </label>
                <input type="password" className="form-control" id="exampleInputPassword1" ref = {passwordRef} 
                  onChange = {passwordHandler}
                />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" ref= {agreeRef} onClick = {agreeHandler}/> I Agree to terms and conditions.
                </label>
              </div> 
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
      <h3>{email}</h3><br/>
      <h3>{password}</h3>
      <h3>{agree ? 'yes user agreed' : 'No, user doesn"t agree for this'}</h3>
    </div>
  );
}
