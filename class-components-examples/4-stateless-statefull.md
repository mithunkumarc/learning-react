any component it can be functional or class component , they can be classified into

            statefull component : states are defined. useState or state({var : value})
            stateless component : stares are not defined. props can exist.
            
Stateful and stateless components have many different names.

            They are also known as:
            – Container vs Presentational components
            – Smart vs Dumb components            

index.js


            import React, { Component } from 'react';
            import { render } from 'react-dom';

stateless component : no state defined

            class Person extends Component {
              constructor(props){
                this.props = props;
              }
              render() {
                return (
                  <p>name : {this.props.name}</p>
                )
              }
            }

stateful component : states defined

            class HouseRent extends Component{
            state = {
              rent : 500
            }  
            myhandler = (event) => {
                this.setState({rent: this.state.rent + 500})
            }
              render() {
                return (
                  <div>
                  <p>house rent : {this.state.rent}</p>
                  <button onClick={this.myhandler}>increase rent</button>
                  </div>
                )
              }
            }

helper to compbile both component

            const app = (
              <div>
                <Person name="mithun" />
                <HouseRent />
              </div>
            )

render

            render(
              app
              ,
              document.getElementById('root')
            )
