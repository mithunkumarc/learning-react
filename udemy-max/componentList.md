use map function to add list of components, forEach wont return anything  

index.js

              import React, { Component, useState } from 'react';
              import { render } from 'react-dom';


              function Person(props) {
                return (
                  <li>{props.name}</li>
                )
              }

              function App() {
                const [people,setPeople] = useState(['arun','tarun'])
                return (
                  // loop inside curly braces, js always appear inside curly braces inside javascript
                  <ul>{
                    // forEach wont return anything
                    people.map(p => {
                      return <Person name={p} />
                    })
                  }</ul>
                )
              }


              render(<App />, document.getElementById('root'));
