App component state is being sent to Person component as props

style.css

              .person {
                  display: inline-block;
                  margin: 10px;
                  border: 1px solid #eee;
                  box-shadow: 0 2px 2px #ccc;
                  width: 200px;
                  text-align: center;
                  padding: 10px;
                }

index.html

                <div id="root"></div>

index.js
                import React, { Component } from 'react';
                import { render } from 'react-dom';
                import './style.css';

                class App extends React.Component {
                  state = {
                    persons : [
                      {name : "Max", age: 28},
                      {name : "Tanu", age: 29}
                    ]
                  }
                  constructor(props){
                    super(props)
                  }
                  render() {
                    return (
                    <div>
                      <Person name = {this.state.persons[0].name}
                      age={this.state.persons[0].age} />
                      <Person name = {this.state.persons[1].name}
                      age={this.state.persons[1].age} />
                    </div>
                  )
                  }
                }

                class Person extends React.Component {
                  constructor(props){
                  }
                  render() {
                    return (
                      <div className="person">
                      <h1>{this.props.name}</h1>
                      <p>{this.props.age}</p>
                    </div>
                    )
                  }
                }

                render(
                  <App />
                  , 
                  document.getElementById('root')
                );
