#### index.html
        <div id="root"></div>
        
#### index.js

        import React from 'react';
        import ReactDOM from 'react-dom';

        class Button extends React.Component {
          constructor() {
            super();
            this.state = {
              count: 0,
            };
          }

          increment() {
            this.setState((prevState, props) => {
              return { count: prevState.count + 1 }
            })
          }

          decrement() {
            this.setState((prevState, props) => {
              return { count: prevState.count - 1 }
            })
          }
          render() {
            return (
              <div>
                <h1>counter : {this.state.count}</h1>
                <button onClick={() => this.increment()} > increment  </button>
                <button onClick={() => this.decrement()}> decrement </button>
              </div>
            )
          }
        }

        ReactDOM.render(
          <Button />,
          document.getElementById('root')
        );

