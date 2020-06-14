#### use Effect always 

        The default behavior for effects is to fire the effect after every completed render. 
        That way an effect is always recreated if one of its dependencies changes.
        However, this may be overkill in some cases, like the subscription example from the previous section. 
        We don’t need to create a new subscription on every update, only if the source prop has changed.
        To implement this, pass a second argument to useEffect that is the array of values that the effect depends on.


        useEffect(
          () => {
            const subscription = props.source.subscribe();      // executed only when there is a change in props.source
            return () => {
              subscription.unsubscribe();
            };
          },
          [props.source],                      // you want of fire subs when props.source changes
        );
