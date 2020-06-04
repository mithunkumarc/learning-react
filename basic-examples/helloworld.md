#### html file : 

           <div id="root"></app>

#### index.js

          import React from 'react';
          import ReactDOM from 'react-dom';
          import './index.css';


          class HelloMessage extends React.Component {
            render() {
              return (
                <div>
                  Name : {this.props.name},
                  city : {this.props.city}
                </div>
              );
            }
          }

          ReactDOM.render(
            <HelloMessage name="sharath" city="Dandeli" />,
            document.getElementById('root')         
          );

