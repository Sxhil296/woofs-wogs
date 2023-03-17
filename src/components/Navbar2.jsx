import React from 'react'
import logo from '../assets/logo.png'

const Navbar2 = () => {
  return (
    <div>
      <header className="text-black body-font max-w-[1480px] m-auto">
        <div className="w-full flex flex-wrap px-6 flex-col md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/" target="_blank" >
            <img src={logo} alt="logo png" width={60} className='mr-2' />
            <p className='text-2xl text-center font-bold justify-center items-center relative top-3' >
              Woffs & Wags <br />
              <span className='text-[8px]  text-[#36acc6] relative bottom-3 mr-1' >THE DREAM PET DESTINATION</span>
            </p>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" target="_blank" className="mr-5 hover:text-gray-900">Home</a>
            <a href="/" target="_blank" className="mr-5 hover:text-gray-900">Services</a>
            <a href="/" target="_blank" className="mr-5 hover:text-gray-900">Gallery</a>
            <a href="/" target="_blank" className="mr-0 hover:text-gray-900">Contact</a>
          </nav>

        </div>
      </header>
    </div>
  )
}

export default Navbar2 