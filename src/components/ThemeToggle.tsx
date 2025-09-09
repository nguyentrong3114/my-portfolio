'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg border border-gray-300">
        <MdLightMode className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <MdLightMode className="w-5 h-5 text-yellow-500" />
      ) : (
        <MdDarkMode className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  )
}
