alternate to ngIf in angular  
view depends on if else condition  


index.js

            import React, { Component, useState } from 'react';
            import { render } from 'react-dom';

            const divStyle = {
              color: 'white',
              'background-color': 'red'
             };

            function App() {
              const [flag,setFlag] = useState(false)
              const toggleHandler = () => {
                setFlag(!flag)
              }
              let view = null;
              if(flag){
                view = (
                  <div>
                    <p>hello</p>
                  </div>
                )
              } else {
                view = (
                  <div>
                    <p>world</p>
                  </div>
                )
              }
              return (
                <div>
                 {view}
                 <button style={divStyle} onClick={toggleHandler}>toggle</button>
                </div>
              )
            }
            render(<App />, document.getElementById('root'));
