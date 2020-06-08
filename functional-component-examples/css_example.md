#### example with css

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


#### fat arrow function as component 

        import React, { Component } from 'react';
        import { render } from 'react-dom';

        const WelcomeMessage = (props) => { 
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
