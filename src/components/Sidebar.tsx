'use client'

import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export function Sidebar() {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-800 p-8 flex flex-col justify-center border-r border-gray-200 dark:border-gray-700">
      <div className="text-center">
        {/* Avatar */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/next.svg"
            alt="Profile"
            fill
            className="rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
          />
        </div>
        
        {/* Name and Title */}
        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          Tên của bạn
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Full Stack Developer
        </p>
        
        {/* Contact Info - Smaller */}
        <div className="space-y-2 text-sm mb-6">
          <div className="flex items-center justify-center gap-2">
            <MdEmail className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-400">email@example.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MdPhone className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-400">+84 123 456 789</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MdLocationOn className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-400">Hà Nội, Việt Nam</span>
          </div>
        </div>
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">Hà Nội, Việt Nam</span>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors">
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>
        
        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </div>
  )
}
