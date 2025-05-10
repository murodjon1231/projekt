import React from 'react'

const Nav = ({ isDarkMode }) => {
  return (
    <div>
      <img className='w-[100%]' src={isDarkMode ? "/nav.svg" : "/nav-light.svg"} alt="" />
    </div>
  )
}

export default Nav