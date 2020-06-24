dont update state directly  
treat state as immutable???


        setState([...oldArray,newData]

index.js

            import React, { Component, useState, useRef, useEffect } from 'react';
            import { render } from 'react-dom';


            function Person(props) {
              return (
                <li>{props.name}</li>
              )
            }

            function App() {
              const [people,setPeople] = useState(['arun','tarun'])
              
              const inputRef = useRef(null)
              
              const updateHandler = (name) => {
                //below code wont work
                //state must not be altered directly
                //setPeople(people.push(name));
                setPeople([...people,name])             // update creating new array by destructuring 
                inputRef.current.value = '';
              }
              
              return (
                <div>
                <ul>{
                  // forEach wont return anything
                  people.map(p => {
                    return <Person name={p} />
                  })
                }</ul>
                <input type="text" ref = {inputRef}/>
                <button onClick={() => updateHandler(inputRef.current.value)}>add</button>
                </div>

              )
            }

            render(<App />, document.getElementById('root'));
