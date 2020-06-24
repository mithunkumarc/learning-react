index.js


            import React, { Component, useState } from 'react';
            import { render } from 'react-dom';
            import Person from './personcomp/Person';

            const divStyle = {
              color: 'blue',
              'background-color': 'red'
             };

            function App() {
              const myhandler = () => {
                console.log("clicked")
              };
              return (
                <div>
                  <button style={divStyle}
                  onClick={myhandler}
                  >click</button>
                </div>
              )
            }
            render(<App />, document.getElementById('root'));
