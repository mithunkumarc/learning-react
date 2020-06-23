alwasy use setState , dont directly change state


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
                  <button onClick={this.myHandler}>change</button>
                </div>
              )
            }
          }

          render(
            <App />,
            document.getElementById("root")
          )
