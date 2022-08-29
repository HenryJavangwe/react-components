import React, { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(false)
  function handleClick() {
    // console.log('Button clicked')
    if(!toggle){
      setToggle(true)
    }else{
      setToggle(false)
    }
  }
  
  return (
    <button onClick={handleClick} >{toggle? 'ON' : 'OFF'}</button>
  );
}

export default Toggle 