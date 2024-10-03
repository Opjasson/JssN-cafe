import React from 'react'
import Label from './Label'
import Input from './Input'

function Form(props) {
    const { label, name, children, type, placeholder, onChange} = props
  return (
    <div>
      <Label htmlFor={label}>{children}</Label>
      <Input placeholder={placeholder} type={type} name={name} onChange={onChange}/>
    </div>
  )
}

export default Form
