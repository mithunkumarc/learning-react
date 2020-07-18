

## react-bootstrap 

> React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.


add react-bootstrap, bootstrap dependency, jquery , popper.js. 
( tried in stackblitz : once u add react-bootstarp and bootstrap, stackblitz suggest to add jquery and popper )        


1.import bootstrap lib in main js file : in app.js/index.js

        import 'bootstrap/dist/css/bootstrap.min.css';

2.in any other js file just import components and use it directly

        // import 
        import { Button } from 'react-bootstrap';   
        
        // jsx : important, below is a react-bootstrap component
        <Button variant="primary" className="mr-2">{name}</Button>
        
## just bootstrap

add bootstrap , stackblitz will suggest jquery and popper.js, other steps 

1. import bootstrap lib in main js file : in app.js/index.js

        import 'bootstrap/dist/css/bootstrap.min.css';

2. in any other js file just import components and use it directly

        // import 
        import { Button } from 'react-bootstrap';   
        
        // jsx : use bootstrap classes
        <button class="btn btn-primary">button</button>
   
