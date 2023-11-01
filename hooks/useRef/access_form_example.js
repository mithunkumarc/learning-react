import React, { Component, useRef } from 'react'
import { render } from 'react-dom'

import InputField from './inputfield'

import './style.css'

function App () {
  const nameForm = useRef(null)

  const handleClickEvent = () => {
     const form = nameForm.current
     alert(`${form['firstname'].value} ${form['lastname'].value}`)
  }

  return (
    <div>
      <form ref={nameForm}>
       <InputField label={'first name'} name={'firstname'}/>
       <InputField label={'last name'} name={'lastname'}/>
      </form>
      <button onClick={handleClickEvent}>gett value</button>
    </div>
  )
}

render(<App />, document.getElementById('root'))
