import React, { useEffect } from 'react'
import video from '../assets/1.mp4'
import AOS from "aos";
import "aos/dist/aos.css";

const Middle = () => {
   useEffect(()=>{
    AOS.init();
   },[])
  return (
    <div className='w-full h-screen my-30 flex justify-between items-center px-30 pt-30 gap-20'>
    <div data-aos="fade-up" className='h-120 w-250 p-15'>
        <video src={video} className='h-full w-full' type="video/mp4" loop autoPlay muted playsInline preload=''></video>
    </div>
    <div data-aos="fade-up" className=' h-120 w-250 flex flex-col p-15 justify-between'>
      <h2 className='text-3xl'>Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.</h2>
     
      <button className="relative overflow-hidden bg-white text-3xl p-10 outline-1 rounded-full transition-all duration-300 ease-in-out text-black border border-black group">
  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">What we do</span>
</button>

    </div>
 </div>
  )
}

export default Middle
