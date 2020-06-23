useRef: Hook

        it is similar to template reference in angular

usage of useRef in class component

      this.myRef = React.createRef();

usage of use reference in functional component

      const myRef = useRef(null)

index.html

        <div id="root"></div>

index.js

        import React, { Component, useState, useRef } from 'react';
        import { render } from 'react-dom';
        import './style.css';

        const App = (props) => {
          // creating reference 
          const myRef = useRef(null)
          // state
          const [name,setName] = useState('')
          
          const nameHandler = (event) => {
            console.log(myRef.current.value);
            // always use setState function to set value
            setName(myRef.current.value);           
            myRef.current.value = "";               // clear
          }
          return(
            <div>
              <p>{name}</p>
              <input type="text" ref={myRef}/>
              <button onClick = {nameHandler}>
              click
              </button>
            </div>
          )
        }
        render(
          <App />
          , 
          document.getElementById('root')
        );
