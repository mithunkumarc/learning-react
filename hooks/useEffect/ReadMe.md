
1. useEffect gets executed (atleast once) when component is mounted(created).  

2. you can control when useEffect has to get executed by passing array of parameters(state/props).  

3. useEffect(() => {}) : this will get executed everytime when there is a change in state/props of component.

4. useEffect(() => {},[]) : this will get executed only when component is created/mounted.

5. useEffect(() => {}, [myState1, myProp1]) : this will get executed when there is a change in(value of) myState1 or myProp1.
