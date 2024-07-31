import React from 'react'
import { IoCheckbox } from "react-icons/io5";
function Header() {
  return (
    <div className='container mx-auto text-5xl font-semibold flex py-6'>
      <IoCheckbox className='text-green'/>
      <h1>Tasks</h1>
    </div>
  )
}

export default Header;
