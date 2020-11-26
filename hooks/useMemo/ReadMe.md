useMemo : can be used to memoize function : same input same output functions  

useMemo api : used to avoid rendering component multiple times. (doubt , can we call it as?? memoise component)  


#### But do not overuse it

While optimizing performance is a noble pursuit, you should always consider the implications and side effects of doing to. 

#### The overhead 

The hook itself introduces new complex logic, and it might introduce more performance issues than it solves.  
Do not apply useMemo unless this is a really expensive computation,  
or, if you are not sure, you can benchmark both ways and make an informed descision.  

#### No guarantees 

As per the React docs, you may never depend on the internal mechanisms on useMemo.  
In other words, while useMemo is supposed to be called only on dependencies change, this is not guaranteed.  
Your app must still work perfectly well (maybe a bit slow though) if useMemo calls your callback on every render.


#### good use case : https://dmitripavlutin.com/dont-overuse-react-usecallback/

        import React from 'react';
        import useSearch from './fetch-items';

        function MyBigList({ term, onItemClick }) {
          const items = useSearch(term);

          const map = item => <div onClick={onItemClick}>{item}</div>;

          return <div>{items.map(map)}</div>;
        }

        export default React.memo(MyBigList);
        
The list could be big, maybe hundreds of items. To prevent useless list re-renderings, you wrap it into React.memo().  

The parent component of MyBigList provides a handler function to know when an item is clicked:

        import React, { useCallback } from 'react';

        export default function MyParent({ term }) {
          const onItemClick = useCallback(event => {
            console.log('You clicked ', event.currentTarget);
          }, [term]);

          return (
            <MyBigList
              term={term}
              onItemClick={onItemClick}
            />
          );
        }
        
read : https://dmitripavlutin.com/use-react-memo-wisely/        
