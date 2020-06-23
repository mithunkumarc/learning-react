Component is in curly brace because it is names export  : refer javascript module system  
React imported without curly braces because it is default export   

index.html

          <div id = "root"></div>

index.js

          import React, {Component} from 'react';
          import {render} from 'react-dom';

          class App extends Component { 
            render() {
              return (
                <h2>hello world</h2>
              )
            }
          }

          render(
            <App />,
            document.getElementById("root")       
          )
