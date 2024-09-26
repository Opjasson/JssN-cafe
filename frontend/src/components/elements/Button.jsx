import React from 'react'

function Button(props) {
    const { children, variant="bg-slate-400"} = props
  return (
    <div>
      <button className={`px-5 ${variant} rounded`}>
        {children}
      </button>
    </div>
  )
}

export default Button
