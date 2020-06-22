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

index.js : example 1 : nested text

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
                 hobby: read                                    <!-- props.children -->
                 </Person>
                 <Person name="Tanu" age="29" >
                 hobby: cycling                                 <!-- props.children -->
                 </Person>
              </div>
            );

            render(
              app, 
              document.getElementById('root')
            );
            
            
index.js example 2  : nested component

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

          const Role = (props) => {
            return (
              <p>{props.type}</p>
            )
          }

          var app = (
            <div>
               <Person name="Tanu" age="29" >
               <Role type="student"/>                                   <!-- props.children -->
               </Person>
            </div>
          );

          render(
            app, 
            document.getElementById('root')
          );

