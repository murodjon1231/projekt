import React, { useState } from 'react'
import './index.css'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Hero_1 from './component/Hero_1'
import Main from './component/Main'
import SupabaseFooter from './component/footer'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`${isDarkMode ? 'bg-[#181818]' : 'bg-gray'} min-h-screen`}>
      <div className={`w-[80%] mx-auto ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <Nav isDarkMode={isDarkMode} />
        <Hero isDarkMode={isDarkMode} />
        <Hero_1 isDarkMode={isDarkMode} />
        <Main isDarkMode={isDarkMode} />
        <SupabaseFooter isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  )
}

export default App