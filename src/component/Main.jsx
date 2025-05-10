import React from 'react'

const Main = ({ isDarkMode }) => {
  return (
    <div className='mt-[96px]'>
      <div>
        <h1 className={`${isDarkMode ? 'text-white' : 'text-gray-800'} text-[50px]`}>
          Sleek dashboard for managing your media
        </h1>
        <div>
          <p className={isDarkMode ? 'text-[#E0E0E0]' : 'text-gray-600'}>
            A complete Object Explorer so that any of your team can use.
          </p>
          <p className={isDarkMode ? 'text-[#E0E0E0]' : 'text-gray-600'}>
            Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.
          </p>
        </div>
        <div className='mt-[60px]'>
          <img src={isDarkMode ? "/img3.svg" : "/img3-light.svg"} alt="" />
        </div>
      </div>
      <div>
        <img src={isDarkMode ? "/img4.svg" : "/img4-light.svg"} alt="" />
      </div>
      <div>
        <img src={isDarkMode ? "/img5.svg" : "/img5-light.svg"} alt="" />
      </div>
    </div>
  )
}

export default Main