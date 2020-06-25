1.  Keys help React identify which items have changed, are added, or are removed.  
2.  Keys should be given to the elements inside the array to give the elements a stable identity.  
3.  The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.  
4.  Most often you would use IDs from your data as keys. eg: person.id  , student.id  
5.  We don’t recommend using indexes for keys if the order of items may change.  
6.  Using index negatively impact performance and may cause issues with component state.


index.js

        import {render} from 'react-dom';
        import React from 'react';

        function NumberList(props) {
          const numbers = props.numbers;
          const listItems = numbers.map(number =>
            //cant see in dom after render
            <li key={number.toString()}>{number}</li>     // dont use index as keys
          );
          return (
            <ul>{listItems}</ul>
          );
        }

        const numbers = [1, 2, 3, 4, 5];
        render(
          <NumberList numbers={numbers} />,
          document.getElementById('root')
        );
