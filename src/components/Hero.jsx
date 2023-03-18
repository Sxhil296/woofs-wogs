import React from 'react'
import heroImg from '../assets/main.svg'

const Hero = () => {
  return (


    <>
      <section className='bg-gradient-to-r from-[#36ACC6] to-[#B9F2FF] relative min-h-[80vh] overflow-hidden font-Roboto' >
        <div className=' max-w-[1400px] py-8 bg-transparent m-auto sm:grid grid-cols-2  float  md:py-3 px-4 items-end relative' >
          <div className='md:w-[130%] text-center sm:text-left sm:pb-60' >
            <span className='font-semibold text-[#FC5E2C]' >Enjoy worry-free pet parenthood with our <br /> comprehensive care service.</span>
            <h1 className='font-black text-black text-4xl md:text-7xl py-8' >Your lovely pet <br /> needs a lovely haircut.</h1>
            <p className='py-6 text-gray-700 max-w-md md:mb-10 font-bold' >We care for your pet as much as you do. Book an appointment today to visit us.</p>
            <a href="/" className='py-3 px-6 rounded-full text-[14px] font-semibold bg-teal-700 text-white items-center' >
              Book Appointment
            </a>
          </div>
          <div className='' >
            <img src={heroImg} alt="" className='max-h-md mb-0 mx-auto md:mb-10 lg:mb-28 xl:mb-40' />
          </div>
        </div>
        <div className='absolute block w-full bottom-0 ' >
          <svg xmlns="http://www.w3.org/svg" viewBox="0 0 1440 270" className=""><path fill="#fff" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
      </section>

    </>
  )
}
export default Hero