passing function/method reference between components  
passing funciton reference from parent to child  

1. declare function : parent component

  
        const myHandler = (data) => {
            console.log("clicked : ",data)
          }

        //jsx child comp
        <Hello click={() => myHandler('rocket')}/>

2. child component : jsx

        <p onClick={props.click}>hello child</p>


index.js  


              import React, { Component, useState, useRef } from 'react';
              import { render } from 'react-dom';

              function Hello (props) {
                return (
                  <div>
                    <p onClick={props.click}>hello child</p>
                  </div>
                )
              }


              function App () {
                const myHandler = (data) => {
                  console.log("clicked : ",data)
                }
                return (
                  <div>
                    <p>click on hello component</p>
                    <p>parent component</p>
                    <Hello click={() => myHandler('rocket')}/>
                  </div>
                );  
              }

              render(<App />, document.getElementById('root'));
