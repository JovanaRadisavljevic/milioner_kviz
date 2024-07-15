import React, { useRef } from 'react'

export default function Start({setUserName}) {
    const inputRef=useRef();

    const handleClick = ()=>{
        //ako je podatak unuet onda se azurira username
        inputRef.current.value && setUserName(inputRef.current.value);
    }
  return (
    <div className='start'>
      <input 
      placeholder='Unesite ime:' 
      className='startInput' 
      ref={inputRef}/>
      <button className='startButton' onClick={handleClick}>Start</button>
    </div>
  )
}
