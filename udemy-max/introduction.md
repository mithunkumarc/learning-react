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

          function Person(props) {
            return (
              <div className="person">
                <h1>{props.name}</h1>
                <p>{props.age}</p>
              </div>
            )
          }

          var app = (
            <div>
               <Person name="Max" age="28" />
                <Person name="Tanu" age="29" />
            </div>
          );

          render(
            app, 
            document.getElementById('root')
          );
