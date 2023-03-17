import React from 'react'
import { TiLocationOutline, TiPhoneOutline } from 'react-icons/ti'

const Navbar1 = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-300'>
      <header className="flex justify-between text-white font-bold max-w-[1480px] py-3 p-6  m-auto">
        <div className='leading-4 flex  items-center'>
          <TiLocationOutline className='mr-2 text-2xl' />
          <span >Locate Us</span>
        </div>
        <div className='leading-4 flex  items-center'>
          <TiPhoneOutline className='rotate-90 mr-2 text-2xl' />
          <span className='mb-0.5' >+91 98312 14414</span>
        </div>
      </header>
    </div>
  )
}

export default Navbar1