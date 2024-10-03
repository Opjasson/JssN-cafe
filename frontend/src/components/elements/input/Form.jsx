import React from 'react'
import Label from './Label'
import Input from './Input'

function Form(props) {
    const { label, name, children, type, placeholder} = props
  return (
    <div>
      <Label htmlFor={label}>{children}</Label>
      <Input placeholder={placeholder} type={type} name={name}/>
    </div>
  )
}

export default Form
