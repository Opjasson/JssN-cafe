import React from 'react'

function Label(props) {
    const { children, label} = props
  return (
    <div>
      <label htmlFor={label} className='text-slate-950 font-bold'>{children}</label>
    </div>
  )
}

export default Label
