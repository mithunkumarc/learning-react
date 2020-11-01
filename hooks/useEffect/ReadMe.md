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
   similar to componentDidMount.

5. useEffect(() => {}, [myState1, myProp1]) : this will get executed when there is a change in(value of) myState1 or myProp1.  
   similar to componentDidUpdate.

6. use cleanup function inside useEffect. similar to componentWillUnmount.