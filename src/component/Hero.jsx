import React from 'react'

const Hero = ({ isDarkMode }) => {
  return (
    <div className='flex justify-between items-center mt-10'>
      <div>
        <img src={isDarkMode ? "/left.svg" : "/left-light.svg"} alt="" />
      </div>
      <div>
        <img src={isDarkMode ? "/right.svg" : "/right-light.svg"} alt="" />
      </div>
    </div>
  )
}

export default Hero