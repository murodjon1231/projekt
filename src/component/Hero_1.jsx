import React from 'react'

const Hero_1 = ({ isDarkMode }) => {
  return (
    <div className='hero flex justify-between items-center mt-30 mb-5 '>
      <div>
        <img src={isDarkMode ? "/img.svg" : "/img-light.svg"} alt="" />
        <br />
        <h1 className={isDarkMode ? 'text-white' : 'text-gray-800'}>Interoperable</h1>
        <br />
        <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} w-[250px]`}>
          Integrates well with the rest of Supabase ecosystem, including Auth and Postgres.
        </p>
      </div>
      <div>
        <img src={isDarkMode ? "/img2.svg" : "/img2-light.svg"} alt="" />
        <br />
        <h1 className={isDarkMode ? 'text-white' : 'text-gray-800'}>Lightning fast</h1>
        <br />
        <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} w-[250px]`}>
          Thin API server layer that leverages Postgres' permissions and performance.
        </p>
      </div>
      <div>
        <img src={isDarkMode ? "/img1.svg" : "/img1-light.svg"} alt="" />
        <br />
        <h1 className={isDarkMode ? 'text-white' : 'text-gray-800'}>Dependable</h1>
        <br />
        <p className={`${isDarkMode ? 'text-white' : 'text-gray-600'} w-[250px]`}>
          Enterprise-level scalability and durability.
        </p>
      </div>
    </div>
  )
}

export default Hero_1