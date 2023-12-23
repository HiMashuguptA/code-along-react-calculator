import React from 'react'

function Buttons({handleInput,value,ClearInput,deleteLast}) {
  return(
    <>
    <button onClick={()=>handleInput(value)}>{value}</button>
    </>
  )
}

export default Buttons