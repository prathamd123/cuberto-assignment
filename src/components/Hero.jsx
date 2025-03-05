import React from 'react'
import header from '../assets/header.mp4'
import './hero.css'

const Hero = () => {
  return (
    <div className='w-full px-50 py-20 leading-6 my-15'>
    <h1 className='text-[8em] mb-13 fade-in-hello fadeInUp-animation'>We are a digital </h1>
    <div className='flex items-center mb-13'>
    <video src={header} type="video/mp4" loop autoPlay muted playsInline preload='' className='h-28  transform translate-x-0 translate-y-0 rotate-0 scale-100 rounded-[4vw]' ></video>
    <h1 className='text-[8em] fade-in-hello fadeInUp-animation'><span className='design'>design</span> and</h1>
    </div>
    <h1 className='text-[8em] fade-in-hello fadeInUp-animation'>motion agency</h1>
    </div>
  )
}

export default Hero
