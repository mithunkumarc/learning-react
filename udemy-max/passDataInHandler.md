to pass data from event handler call bind function :

          onClick={this.myHandler.bind(this, 'prakash')}
          
to receive data 

          myHandler = (newname) => {        
                //...
          }      
              

index.js

              import React, { Component } from 'react';
              import { render } from 'react-dom';

              class App extends Component {
                constructor() {
                  super();
                  this.state = {
                    name: 'prabhu'
                  };
                }

                myHandler = (newname) => {                                  // receiving here
                  console.log("handler", newname) 
                  this.setState({
                    name: newname
                  })
                }

                render() {
                  return (
                    <div>
                      <p>name : {this.state.name}</p>
                      <button 
                      onClick={this.myHandler.bind(this, 'prakash')}>           // sending data
                      click
                      </button>
                    </div>
                  );
                }
              }

              render(<App />, document.getElementById('root'));
