// by default , useEffect fires everytime when there is change in component state
// when a component state changes, useEffect will be fired
// we can control when to fire useEffect , and when to avoid
// below exacample shows , useEffect will be fired only state --name-- changer not --mileage--

import { render} from 'react-dom';
import React, { useState, useEffect } from 'react';
function Scooter(props) {
  //states
  const [name, setName] = useState(props.name);
  const [milage, setMilage] = useState(0);
  
  useEffect(() => {
    console.log('something happened')
  },[name])               // useEffect works only if name changes
  
  const changeName = () => {
    setName("bajaj")
  }
  const changeMileage = () => {
    setMilage(prev => prev + 1);
  }
  return (
    <div>
    <p>{name}</p>
    <p>{milage}</p>
    <button onClick = {changeName}>changeName</button>
    <button onClick = {changeMileage}>changeMileage</button>
    </div>
  )
}

render(
  <Scooter name="java"/>
  ,
  document.getElementById('root')
)


/*
  useEffect fires whene either name or mileage changes
      useEffect(() => {
        console.log('something happened')
      },[name,mileage])     

ignore state changes
   useEffect(() => {
    console.log('something happened')
  },[]) // useEffect wont be fired, works one time when component is mounted  

*/
