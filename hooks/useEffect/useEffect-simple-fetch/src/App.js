import React, {useState, useEffect} from "react";
import "./style.css";

export default function App() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/4')
    .then(response => response.json())
    .then(data => setTodo(data))
    .catch(e => console.log(e));
  },[])
  const getUser = () => {
    /* using getUser helper here 
        becuase direct todo was not able to 
        destructure directly
       */
    const user = {
        "userId": todo["userId"],
        "id": todo["id"],
        "title": todo["title"],
        "completed": todo["completed"]
    }
    return user;
  }
  return (
    <div>
       <h4>id : { getUser().id }</h4>
       <h4>userId : { getUser().userId }</h4>
       <h4>title : { getUser().title }</h4>
       <h4>completed: { getUser().completed? "true" : "false" }</h4>
    </div>
  );
}
