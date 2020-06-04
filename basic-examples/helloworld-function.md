#### html : 

        <div id="root"></div>

#### index.js

        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.css';


        class HelloMessage extends React.Component {
          render() {
            return (
              <div>
                hello
                <button onClick={() => this.callme()}>click</button>
              </div>
            );
          }
          callme() {
            console.log("i called you, but you didn't picked up the call");
          }
        }

        ReactDOM.render(
          <HelloMessage onclick="callme()" />,
          document.getElementById('root')
        );
