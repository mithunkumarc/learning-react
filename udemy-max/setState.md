change state of component using funciton setState  


import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


          class App extends Component {
            state = {
              name : "raj"
            }
            myhandler = () => {
              this.setState({
                  name:'rajkumar'
                })
            };
            render() {
              return(
                <div>
                  <p>{this.state.name}</p>
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
