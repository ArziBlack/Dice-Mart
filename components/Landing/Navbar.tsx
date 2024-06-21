import React from 'react'
import SubNavbar from './SubNavbar'

const Navbar = () => {
  return (
    <div className='bg-[#003A74] w-full flex items-center px-5 py-7 flex-col'>
        <nav className="">
            <h2>BLACKDICE</h2>
        </nav>
        <SubNavbar/>
    </div>
  )
}

export default Navbar