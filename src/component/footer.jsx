import { Sun, Moon, Twitter, Github } from 'lucide-react'
import React from 'react'

const SupabaseFooter = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`w-full ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <svg className="h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="0,11 7,4 14,11 7,18" />
              </svg>
              <span className="ml-2 font-bold text-lg">supabase</span>
            </div>
            <div className="flex space-x-4 mb-6">
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
                <Twitter size={20} />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Database</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Authentication</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Storage</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Functions</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Coming soon</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Support</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Case Studies</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>System Status</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Terms of service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Developers</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Documentation</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>API Reference</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Guides</a></li>
            </ul>
            
            <h3 className="font-medium text-lg mt-8 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Blog</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Open Source</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Humans.txt</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>Lawyers.txt</a></li>
            </ul>
          </div>
        </div>

        <div className={`w-full h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} mb-8`}></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© Supabase Inc</p>
          </div>
          <div className="flex items-center">
            <Sun size={20} className="text-gray-400 mr-2" />
            <button 
              className={`w-12 h-6 rounded-full p-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} transition-colors duration-200 flex items-center`}
              onClick={toggleDarkMode}
            >
              <div 
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`} 
              />
            </button>
            <Moon size={20} className="text-gray-400 ml-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupabaseFooter