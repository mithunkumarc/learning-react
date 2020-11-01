import React, {useState} from "react";
import "./style.css";
import Child from './Child';

export default function App() {
  
  const [message, setMessage ] = useState();
  const [info, setInfo] = useState();

  const messageHandler = (event) => {
    setMessage(event.target.value);
  }
  const infoHandler = (event) => {
    setInfo(event.target.value);
  }
  
  return (
    <div>
      <input 
        type="text" 
        placeholder="enter message: parent comp"
        onChange={messageHandler}
      />
      <br/>
      <input 
        type="text" 
        placeholder="enter info: parent comp"
        onChange={infoHandler}
      />
      <Child message={message} info={info} />
    </div>
  );
}
