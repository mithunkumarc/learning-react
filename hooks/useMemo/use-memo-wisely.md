this is based on article : https://dmitripavlutin.com/use-react-memo-wisely/

use useMemo for component, whose input doesn't changes(remains same)

for example: 

        you have a Movie component with props views, title and description. 
        since title and description remains same, you can add these two props with Movie comp and memoize it.
        but views count keep changing so keep it outside movie component.

        <>
          <MemoizeMove title={props.title} desc = {props.desc} />
          <MovieViews view={props.view} />
        </>

example from above link : 

        function MovieViewsRealtime({ title, releaseDate, views }) {
          return (
            <div>
              <MemoizedMovie title={title} releaseDate={releaseDate} />  // rendered only once
              Movie views: {views}   // MovieViewsRealtime rendered when views count changed.
            </div>
          )
        }
