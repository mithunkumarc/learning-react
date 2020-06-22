props.children used to render content in our component, it could be list/ui comp or nested component  


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

            //component begin with uppercase: jsx rule
            //smallcase dedicated to html tags
            const Person = (props) => {
              return (
                <div className="person">
                  <h1>{props.name}</h1>
                  <p>{props.age}</p>
                  <p>{props.children}</p>
                </div>
              )
            }


            var app = (
              <div>
                 <Person name="Max" age="28" >
                 hobby: read
                 </Person>
                 <Person name="Tanu" age="29" >
                 hobby: cycling
                 </Person>
              </div>
            );

            render(
              app, 
              document.getElementById('root')
            );
