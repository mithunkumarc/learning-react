two way binding

1. handler funciton to set 
        const [name, setname] = useState('initialValue') 
        const myHandler = (event) => {
            setName(event.target.value)
          }

2. track change

        <input type='text' value={name} onChange={myHandler} />

index.js

        import React, { Component, useState } from 'react';
        import { render } from 'react-dom';
        function App () {

          const [name, setName] = useState('ramu')

          const myHandler = (event) => {                                  // handle
            setName(event.target.value)
          }

          return (
            <div>
              <p>{name}</p>                                               // display
              <input type='text' value={name} onChange={myHandler} />     // track
            </div>
          );

        }

        render(<App />, document.getElementById('root'));
