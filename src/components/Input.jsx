import React from 'react'

function Input({ placeholder, label, id }) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input type="text" placeholder={placeholder} id={id} />
      </label>
    </div>
  )
}

export default Input
