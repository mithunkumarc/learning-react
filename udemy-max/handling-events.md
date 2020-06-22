index.js


        import React, { Component } from 'react';
        import { render } from 'react-dom';
        import './style.css';

        class App extends Component {
          myhandler = () => console.log("clicked");
          render() {
            return(
              <div>
                <button 
                onClick={this.myhandler}>
                click
                </button>
              </div>
            )
          }
        }
        render(
          <App />
          , 
          document.getElementById('root')
        );
