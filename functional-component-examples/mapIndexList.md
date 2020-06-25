index.js

        import React, { useState } from "react";
        import { render } from "react-dom";

        function GroceryList() {
          const [groceries, setGroceries] = useState(["sugar", "sweet"]);

          return (
            <div>
              {groceries.map((g, index) => {
                return (
                  <p>
                    {index + 1} {g}
                  </p>
                );
              })}
            </div>
          );
        }

        render(<GroceryList />, document.getElementById("root"));
