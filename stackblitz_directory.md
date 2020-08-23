1. forwardRef : 

        https://stackblitz.com/edit/mr-forwardref-useref

2. style used as javascript object, use className instead of class becuase React uses JSX. class is reserver keyword in React(React.class) 

        https://stackblitz.com/edit/mr-style-classname

3. reusable component. file name should begin with lowercase, functional component name should begin with upper case(bestpractice). native html tags begin with lowercase
        
        https://stackblitz.com/edit/mr-reusable-component

4. props.children, content of component can be accessed by prop.childre. eg : <Person>raghu</Person>, raghu can be accessed by props.children in Person component. this pattern is componsition. (in the place of children : you can send component too). 

        https://stackblitz.com/edit/mr-props-children
        reference : https://reactjs.org/docs/composition-vs-inheritance.html

5. React.Fragments : can be used to avoid extra div element. <Fragment>your tags</Fragment>. alternate to Fragment tag is empty tag <>your tags</>. like ngcontainer in angular.

        https://stackblitz.com/edit/mr-fragments

6. destructring props : const {prop1, prop2, ...} = {...props}, prop1 and prop2 must exist in props as keys.

        https://stackblitz.com/edit/mr-destructuring-props

7. conditional rendering : displaying component can be decided using props. if condition deosn't meet, u can just return <></> else return 'your jsx dom'

        https://stackblitz.com/edit/mr-conditional-rendering

8. conditional rendering inside jsx : tags can be displayed or not using condition inside jsx. 
        
        eg : {data=='confidential' && <div>hello</div>}
        https://stackblitz.com/edit/mr-condition-render-inside-jsx
        
9. hoc : higher order component : receives component as parameter and manage props/view and returns same component. 

        https://stackblitz.com/edit/mr-higher-order-component

10. useState: used maitain state of component. note: event names, sending data from event , always use setValue to change state.

        https://stackblitz.com/edit/mr-usestate-example

11. list : javascript inside jsx dom. write always javascript inside {} inside jsx(react dom).
        
        https://stackblitz.com/edit/mr-list-jsx
        
12. component communication, parent should sent event handler to child, child should respond to parent. parent should maintain state. 

        https://stackblitz.com/edit/mr-component-communication
        
