#### you may not need to useEffect always

      check : https://www.youtube.com/watch?v=eFGeStq8dZo
      David khourshid
      https://www.youtube.com/watch?v=-yIsQPp31L0

##### useEffect : like useState, useRef , useEffect can also be declared multiple times

useEffect can be used as  
1. componentDidMount(after component created), 
2. componentWillUnmount(before component destroyed) and 
3. componentDidUpdate(any change with state/props)

uses of useEffect : 

1. useEffect gets executed (atleast once) when component is mounted(created). 

2. you can control when useEffect has to get executed by passing array of parameters(state/props).  

3. useEffect(() => {}) : this will get executed everytime when there is a change in state/props of component. 
   similar to componentDidUpdate

4. useEffect(() => {},[]) : this will get executed only when component is created/mounted.  
   similar to componentDidMount. executes only once when component mounted/created.
   its like ngOnInit: executes only once: you can subscribe observer here(if it is avialable : not mandatory)

5. useEffect(() => {}, [myState1, myProp1]) : this will get executed when there is a change in(value of) myState1 or myProp1.  
   similar to componentDidUpdate.

6. use cleanup function inside useEffect. similar to componentWillUnmount.

7. useEffect(async () => {}) : this will raise error as useEffect doesnt work well with async function. 
   so use it inside and call it after declaring.

         useEffect(() => { //define here and call it }
8. you can have multiple useEffect, used as componentDidMount, componentDidUpdate, componentWillUnmount

         https://legacy.reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns
         https://dev.to/joannaotmianowska/multiple-or-one-useeffect-4oco


todo : 

         catch error in axios and fetch
         
         https://www.robinwieruch.de/react-hooks-fetch-data : useEffect doesn't support async func
         
         dont print state in useEffect , it is asynchronous in nature.
         
         https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react
