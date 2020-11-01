import React, {useEffect} from 'react';

function Child(props) {

  useEffect(() => {
    console.log("1. executed only once. when component is created")
  },[]);
  useEffect(() => {
    console.log("2. executed when there is change in any state/props(message|info)");
  });
  useEffect(() => {
    console.log("3. executed only when props.message is change");
  },[props.message]);

  return (
    <div>
      <p>child comp message : {props.message}</p>
      <br/>
      <p>child comp info : {props.info}</p>
    </div>
  )
}


export default Child;