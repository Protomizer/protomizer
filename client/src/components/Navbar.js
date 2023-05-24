import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-white py-4 shadow-lg'>
        <div className="container flex justify-between items-center">
            <img src={Logo}/>
            

            <div className='hidden md:flex items-center space-x-2'>
                {/* <button className='bg-[#BFD3FF] text-blue-700 border-2 border-blue-700'>Register</button>
                <button className='bg-[#001EB2] text-white  border-2 border-[#001EB2]'>Login</button> */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar