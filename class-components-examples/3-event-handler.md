using event handler 

dont call handler in jsx , leads to error before event is fired

        // took from class component example
        <button onClick={this.myHandler()} >
        

just declare function , dont call
     
        // example from class component
        <button onClick={() => this.myHandler()}>change</button>

handler function : 

          import React, {Component} from 'react';
          import {render} from 'react-dom';

          class App extends Component { 
            state = {
              name : "himalaya"
            }
            myHandler = (event) => {
              this.setState({
                name : "western ghats"
            });
            }
            render() {
              return (
                <div>
                  <h2>{this.state.name}</h2>
                  <button onClick={() => this.myHandler()}>change</button>
                </div>
              )
            }
          }

          render(
            <App />,
            document.getElementById("root")
          )
