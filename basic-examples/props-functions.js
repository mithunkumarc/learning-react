import {render} from 'react-dom';
import React, {useState, useEffect} from 'react';

function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState('');
  function handleChange(event) {
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(event.target.value);
    //you may not get updated inputValue here
    //as setState: setInputValue is asynchronous
    //so use useEffect
  }

  useEffect(() => {
   console.log('inputValue has changed', inputValue);
}, [inputValue]);

  return (
    <input type={inputType}
    value = {inputValue}
    name="input-form"
    onChange={handleChange}
    class="inputclass"/>
  )
}
function printInput(data){
  console.log('input data : ', data);
}
render(
  <FormInput type="text" onChange={printInput} />,
  document.getElementById('root')
)
