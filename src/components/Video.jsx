import React from 'react'
import short from '../assets/short.mp4'

const Video = () => {
  return (
    <div className='w-full h-screen'>
    <video src={short} type="video/mp4" loop autoPlay muted preload='' playsInline className='transform translate-x-0 translate-y-0 rotate-0 scale-100'></video>
  </div>
  )
}

export default Video
