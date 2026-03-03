import React from 'react'
import page_not_found from '../assets/not_found.png'

const NotFound = () => {
  return (
    <div className='w-full h-screen py-24 flex flex-col items-center justify-center'>
      <img src={page_not_found} alt="" className=' w-80 md:w-105 ' />
      <p>Page Not Found!</p>
    </div>
  )
}

export default NotFound