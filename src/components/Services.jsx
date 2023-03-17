import React from 'react'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/fours.png'
import five from '../assets/5.png'
import six from '../assets/6.png'

import { GoChevronRight } from 'react-icons/go'

const Services = () => {
  return (
    <div className="container max-w-[1400px] mx-auto md:py-10">
      <h1 className='text-[#EFF7FF] md:text-[104px] text-5xl font-bold mb-10'>Services</h1>
      <div className='grid md:grid-cols-2 p-4 gap-6' >


{/* 1st */}
        <div className='grid grid-cols-2 bg-gradient-to-r overflow-hidden max-h-96  from-teal-400 to-teal-300 rounded-md py-3   items-center relative' >
          <div className='w-[130%] px-4' >
            <h2 className='text-4xl font-bold text-white ' >Vet Clinic</h2>
            <p className='py-6 text-gray-700' >A range of services to keep your furry friends healthy and happy.</p>
            <button className='py-2 px-4 rounded-full text-[14px] font-semibold bg-teal-700 text-white flex max-w-[200px] items-center' >
              Book Appointment
              <span className=' bg-white text-black rounded-full ml-2' > <GoChevronRight className='text-2xl' /></span>
            </button>
          </div>
          <div className='md:mt-16'>
            <img src={one} alt="/"  className='w-full'/>
          </div>
        </div>

{/* 2nd */}
        <div className='grid grid-cols-2 bg-gradient-to-r float max-h-96 overflow-hidden from-yellow-600 to-yellow-400 rounded-md py-3 items-center relative' >
          <div className='md:mt-10 md:ml-1 ml-2 mt-10' >
            <img src={two} alt="" className='relative -left-3' />
          </div>
          <div className='w-[130%]  relative left-[-30%] px-4 ' >
            <h2 className='text-4xl font-black text-white' >Grooming</h2>
            <p className='py-6 text-gray-700' >We maintain your pet’s appearance and hygiene </p>
            <button className='py-2 px-4 rounded-full text-[14px] font-semibold bg-teal-700 text-white flex max-w-[200px] items-center' >
              Book Appointment
              <span className=' bg-white text-black rounded-full ml-2' > <GoChevronRight className='text-2xl' /></span>
            </button>
          </div>
        </div>


{/* 3rd */}
        <div className='grid grid-cols-2 bg-gradient-to-r float max-h-96 from-cyan-300 to-cyan-400 rounded-md py-3 px-4 items-center relative' >
          <div className='md:mt-16'>
            <img src={three} alt="/" className='relative -left-3 object-cover' />
          </div>
          <div className='w-[130%]  relative left-[-30%]' >
            <h2 className='text-4xl font-black text-white' >Creche</h2>
            <p className='py-6 text-gray-700' >Leave your pet with us for the day and let them enjoy a fun and comfortable stay while you're away</p>
          </div>
        </div>


        {/* 4th */}
        <div className='grid grid-cols-2 bg-gradient-to-r float max-h-96 from-green-300 to-green-400 rounded-md py-3  items-center relative' >
          <div className='w-[130%] px-4' >
            <h2 className='text-4xl font-black text-white' >Pet Store</h2>
            <p className='py-6 text-gray-700' >Your one-stop shop for all pet’s needs, from toys to treats, beds to bowls, and everything in between</p>
          </div>
          <div>
            <img src={four} alt="/" className='float-right w-full h-full' />
          </div>
        </div>

        {/* 5th */}
        <div className='grid grid-cols-2 bg-gradient-to-r  max-h-96 overflow-hidden float from-slate-400 to-slate-300 rounded-md py-3 px-4 items-center relative' >
          <div className='w-[130%]' >
            <h2 className='text-4xl font-black text-white' >Pick up and Drop</h2>
            <p className='py-6 text-gray-700' >We make life easier for you and your furry companion by offering reliable and convenient pet transportation services</p>
          </div>
          <div>
            <img src={five} alt="/" className='relative -right-6 mt-10 md:mt-[-10px] md:mr-[-10px]' />
          </div>
        </div>


{/* 6th */}
        <div className='grid grid-cols-2 bg-gradient-to-r float overflow-hidden  max-h-96 from-pink-600 to-pink-400 rounded-md  items-center relative' >
          <div className='' >
            <img src={six} alt="/" className='relative -left-3 object-contain' />
          </div>
          <div className='w-[130%]  relative left-[-30%] mx-2' >
            <h2 className='text-4xl font-black text-white'>Pet Bakery</h2>
            <p className='py-6 text-gray-700' >Treat your pet with delicious and healthy homemade pet treats from our artisan pet bakery</p>
          </div>
        </div>


      </div>
    </div >
  )
}

export default Services