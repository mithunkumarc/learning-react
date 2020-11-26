import React, { useState, useMemo } from "react";
import "./style.css";

const users = [
  {id:'a', name:'Robin'},
  {id:'b', name:'Dennis'},
]

export default function App() {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const handleText = (event) => {
    setText(event.target.value);
  }

  const handleSearch = () => {
    setSearch(text);
  }

  // with useMemo
  // if the input is same, then filter will be called again
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      console.log("searching...",search)
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  },[search])
  
  
  // without memo
  /*
  const filteredUsers = users.filter((user) => {
      console.log("searching...",search)
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  */


  return (
    <div>
      <input type="text" onChange={handleText}/>
      <button onClick={handleSearch}>Search</button>
      <br/>
      <List list={filteredUsers} />
    </div>
  );
}


const List = (props) => {
  return (
    <ul>
      {props.list.map((item) => {
        return <li key={`${item.id}${item.name}`}>{item.name}</li>
      })}
    </ul>
  )
}