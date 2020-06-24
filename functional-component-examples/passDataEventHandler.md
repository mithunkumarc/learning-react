passdata : 

        <button  onClick={() => myHandler('prakash')}>click</button>
        
receive : 

        const myHandler = (newName) => {
          //...
        }

        
index.js

        import React, { Component, useState, useRef } from 'react';
        import { render } from 'react-dom';

        function App () {
          const [name,setName] = useState('prabhu');
          
          const myHandler = (newName) => {            // receive
            setName(newName)
          }

          return (
            <div>
              <p>{name}</p>
              <button  onClick={() => myHandler('prakash')}>click</button>            // send
            </div>
          );

        }

        render(<App />, document.getElementById('root'));
