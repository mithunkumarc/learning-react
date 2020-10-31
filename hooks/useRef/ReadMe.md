useRef : used to refer/access dom

        The useRef Hook allows us to create mutable variables in functional components. 
        It's useful for accessing DOM nodes/React elements, and to store mutable variables without triggering a re-render.

        autofocus
        passing value from child component(you could use event handler for this)


https://stackblitz.com/edit/mr-conditional-view-useref

####  useRef can be passed to child component.
  
####  forwardRef : used to access child component dom from parent component.
  
https://stackblitz.com/edit/mr-forwardref-useref

        this example includes, input box present in child component.
        button from parent component on click it prints text typed includes input box.
        embed child component body inside forwardRef
        forwardRef has two input, first oone normal props.
        second one ref sent from parent component
