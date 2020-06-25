input box, enter grocery to delete  

index.js

          import React, { useState, useRef } from "react";
          import { render } from "react-dom";

          function GroceryList() {
            const [groceries, setGroceries] = useState(["sugar", "sweet"]);
            
            // jsx template reference
            const inpRef = useRef(null)
            
            const myHandler = () => {
              //console.log("delete", inpRef.current.value)
              setGroceries(groceries.filter(g => g!==inpRef.current.value))       // deleting
            }
            
            return (
              <div>
                <ul>
                  {groceries.map(g => {
                    return <li>{g}</li>;                                          // display list
                  })}
                </ul>
                <input type="text" ref={inpRef}/>
                <button onClick={myHandler}>delete</button>
              </div>
            );
          }

          render(<GroceryList />, document.getElementById("root"));


