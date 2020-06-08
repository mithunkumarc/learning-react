import React, { Component } from 'react';
import { render } from 'react-dom';

function WelcomeMessage(props) { 
  const mystyle = {
      color: "red",
      backgroundColor: "SkyBlue",
      padding: "10px",
      fontFamily: "Arial"
    }; 
  return <h1 style={mystyle}>{props.name}</h1>;  
}  

render(
  <WelcomeMessage name="suswagata"/>, 
  document.getElementById('root')
);
