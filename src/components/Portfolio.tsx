'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { Navigation } from '@/components/Navigation'
import { MainContent } from '@/components/MainContent'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Bên trái - 50% - Profile Info */}
      <div className="w-1/2 h-screen relative z-10 border-r border-white/20 dark:border-gray-700/50 backdrop-blur-sm">
        <Sidebar />
      </div>
      
      {/* Bên phải - 50% - Navigation + Content */}
      <div className="w-1/2 h-screen flex flex-col relative z-10">
        {/* Navigation ở trên */}
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Content ở dưới */}
        <div className="flex-1 overflow-hidden">
          <MainContent activeSection={activeSection} />
        </div>
      </div>
    </div>
  )
}
