if else cannot be used in jsx , ternary operator can be used  
below example shows toggle between two jsx tags  


index.js

              import React, { Component, useState } from 'react';
              import { render } from 'react-dom';
              import Person from './personcomp/Person';

              const divStyle = {
                color: 'blue',
                'background-color': 'red'
               };

              function App() {

                const [flag,setFlag] = useState(false)

                const toggleHandler = () => {
                  setFlag(!flag)
                }

                return (
                  <div>
                    {flag ? <p>hello</p> :<p>world</p>}                         // ternary operator used as condition
                    <button style={divStyle} onClick={toggleHandler}>toggle</button>
                  </div>
                )

              }
              render(<App />, document.getElementById('root'));

