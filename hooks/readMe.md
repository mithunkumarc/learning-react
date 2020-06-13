#### why hooks :

        Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
        Hooks don’t work inside classes — they let you use React without classes

        with hooks, extract stateful logic from a component so it can be tested independently
        and reused. Hooks allow you to reuse stateful logic without changing your component
        hierarchy. This makes it easy to share hooks among many components or with community



        Hooks let you split one component into smaller functions based on what pieces are related 
        (such as setting up a subscription or fetching data),

#### useEffect : 

        Data fetching, subscriptions, or manually changing the DOM ,these operations called “side effects”  
        because they can affect other components and can’t be done during rendering.

        The Effect Hook, useEffect, adds the ability to perform side effects from a function component. 
        It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, 
        but unified into a single API. 
       
        useState works asynchronously , 
        so updated state can be found in useEffect rather than immediate after using setState.
        
        important :
        When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. 
        Effects are declared inside the component so they have access to its props and state. 
        By default, React runs the effects after every render — including the first render.
        
#### rules of hooks

        Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
        Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.
        
        
#### tobe covered :

        using useEffect as lifecycle methods same as component
