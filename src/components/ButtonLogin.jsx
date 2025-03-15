import React from 'react'

function ButtonLogin({ type, value, onClick }) {
  return (
    <div>
      <button onClick={onClick} type={type} style={{ width: '100%' }}>
        {value}
      </button>
    </div>
  )
}

export default ButtonLogin
