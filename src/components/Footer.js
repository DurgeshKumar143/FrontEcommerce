import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 md:flex justify-between items-center">
        
        {/* Developer Info */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-semibold text-white">Durgesh Kumar</h1>
          <p className="text-gray-400 mt-2">&copy; 2024 All Rights Reserved</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <Link href="https://github.com/DurgeshKumar143" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaGithub className="text-2xl" />
          </Link>
          <Link href="www.linkedin.com/in/durgesh-kumar-b8385b234" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaTwitter className="text-2xl" />
          </Link>
          <Link href="https://instagram.com/mithileshsingh_143" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaInstagram className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* Footer bottom border */}
      <div className="mt-6 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>Built with ❤️ by Durgesh Kumar using React & Tailwind CSS</p>
      </div>
    </footer>


  )
}

export default Footer