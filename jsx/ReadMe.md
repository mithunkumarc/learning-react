jsx : 

1.  Javascript XML
2.  allows to add/write HTML in react

        const element = <h1>Hello, world!</h1>;

3.  JSX converts HTML tags to react elements
4.  you can write expressions in JSX

        const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
        // example 2
        const name = 'Josh Perez';
        const element = <h1>Hello, {name}</h1>;


5.  must have one top level element

        const myelement = (
          <div>                           // one top level element, there cannot be more than one top element
            <h1>I am a Header.</h1>
            <h1>I am a Header too.</h1>
          </div>
        );
        
6.  Elements must be closed

        const myelement = <input type="text" />;
        
7.  attributes can be added , it must be in camelcase  

        const nav = <span className="menu navigation-menu">Menu</span>      

8.   if tag is empty close it immediately

        const myelement = <input type="text" />;


9.   jsx represents object


                // jsx 
                const element = (
                  <h1 className="greeting">
                    Hello, world!
                  </h1>
                );
                // same as above
                const element = React.createElement(
                  'h1',
                  {className: 'greeting'},
                  'Hello, world!'
                );
