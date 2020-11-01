
        useEffect(() => {
            return () => {
              /*this is a cleanup function*/
              console.log("cleanup before rendered again");
            }
          })
  
  
  when there is a change in component state/props, component will be destroyed and new instance created to display new values.  
  
  cleanup function executed before component being destroyed: componentDidUnmount.   
  
  use for unsubscribing resources or other cleanup operations.
