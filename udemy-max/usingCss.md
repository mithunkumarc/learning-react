Person.css

        .person {
          background-color: skyblue;
          border-style: double;
        }

Person.js

        import React from 'react';
        import './Person.css'

        function Person() {
          return (
            <p className="person">person component</p>
          )
        }

        export default Person;

index.js

        import React, { Component, useState } from 'react';
        import { render } from 'react-dom';
        import Person from './personcomp/Person';

        function App() {
          return (
            <Person />
          )
        }
        render(<App />, document.getElementById('root'));

        
