import React, { useState, useRef } from "react";
import { render } from "react-dom";

const personList = [
  {name:'raj',age:20},
  {name:'saj',age:21},
  {name:'vaj',age:22}
]

function App(props) {
  // creating list
  const [persons, setPersons] = useState(personList)
  // selected person : tobe updated
  const [selectedPerson, setSelectedPerson] = useState({})
  // updated
  const [updatedPerson,setUpdatedPerson] = useState({})

  // templat ref for input boxes
  const inputRefName = useRef(null);
  const inputRefAge = useRef(0);
  
  // view inserting to jsx
  const view = persons.map(p => {
    return <li key={p.name.toString()} onClick={() => selectHandler(p)}>{p.name} {p.age}</li>;
  })
  
  //on click on list : take the cicked/selected person
  const selectHandler = (person) => {
    //console.log(name);
    inputRefName.current.value = person.name;
    inputRefAge.current.value = person.age;
    setSelectedPerson({name:person.name,age:person.age})
  }
  
  //onclick of update button 
  const updateHandler = () => {
 
    if(inputRefName.current.value && inputRefAge.current.value) {
          const updatedPerson = {
            name: inputRefName.current.value,
            age: Number.parseInt(inputRefAge.current.value)     // reads as string
          }
          console.log(updatedPerson);
          console.log('selected  :',selectedPerson);
          //update : if there is a change , than update allowed
          if(updatedPerson.name != selectedPerson.name ||
              updatedPerson.age != updatedPerson.age
          ){
              // take out person other than selected
              const fileterd = persons.filter(person => {
                return  person.name !== selectedPerson.name && 
                        person.age !== selectedPerson.age
              })
              
              //add updated to filtered list
              fileterd.push(updatedPerson);
              //render to view
              setPersons(fileterd);
          } else{
              console.log('invalid input')
          }
    } else {
      console.log("no change detected")
    }
  }
  
  return (
    <div>
      <ul>
        {view}
      </ul>
      <input type="text" ref={inputRefName} placeholder="edit name"/>
      <input type="number" ref={inputRefAge} placeholder="edit age"/>
      <button onClick={updateHandler}>update</button>
    </div>
  );
}

render(<App />, document.getElementById("root"));
