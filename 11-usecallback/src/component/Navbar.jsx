import React from 'react'
import { memo } from 'react';

const Navbar = ({navbar, getAdjective}) => {
    console.log("nav is rendered");
    
  return (
    <div>
      i am {navbar}
      <button onClick={() => {}}>{getAdjective()}</button>
      
    </div>
  )
}

export default Navbar
