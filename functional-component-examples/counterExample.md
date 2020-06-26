useEffect is called when component is rendered to view first time and if any state of component changes.



            import React, { useState, useEffect } from 'react';
            import { render } from 'react-dom';

            function App() {
              const [counter, setCounter] = React.useState(60);

              // first time useEffect will be called when component is redered for first time
              // from next time, useEffect will be called ever time when state(counter) is decremented.
              React.useEffect(() => {
                //refer to timer 
                const timer =
                  setInterval(() => setCounter(counter - 1), 1000);   // since setcounter change counter value, useEffect will be called again , 
                // when useEffect is completed , react will call its callback: refer below  
                return () => clearInterval(timer);    // timer resets, to avoid duplicate timer, ensures there will be one timer running
              }, [counter]);

              return (
                <div className="App">
                  <div>Countdown: {counter}</div>
                </div>
              );
            }

            render(
              <App />,
              document.getElementById('root')
            )
