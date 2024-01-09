import React from 'react'
import { Link } from 'react-router-dom'
import mainImg from '../assets/hero-bcg-2.jpeg'
import SecondImg from '../assets/hero-bcg.jpeg'
export const SectionCenter = () => {
  return (
    <div className='contain flex mt-32 justify-evenly relative'>

    <div className="info lg:w-fit flex flex-col gap-9 justify-center md:translate-x-12">

      <div className="title text-3xl md:text-5xl font-bold text-[#102a42]">
      Design Your
        <br/>
      Comfort Hanfu
      </div>

      <p className="text w-[100%] lg:w-96 text-[#617d98] leading-7">
      Remember that designing a Comfort Hanfu is a creative process, and you have the flexibility to infuse your personality into the design. Take inspiration from traditional Hanfu styles while making it uniquely yours.
      </p>

        <Link to='/products'
          className='bg-[#ab7a5f] text-white tracking-[0.15em] p-4 transition rounded-md w-40 text-center hover:bg-[#bd7a57]'>SHOP NOW</Link>
    </div>

    <div className="images items-end relative hidden lg:flex">
      {/* <img src={mainImg} className='after h-44 absolute z-10 ' width={'800px'}alt="main img" /> */}
      <img src={SecondImg} className='rounded-md relative' width={'800px'} alt="second img" />
    </div>

  </div>
  )
}
