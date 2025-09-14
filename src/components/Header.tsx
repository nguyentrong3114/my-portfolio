"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/work', label: 'Work' },
    { href: '/experience', label: 'Experience' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' }
  ]
  
  return (
    <header className="fixed left-0 right-0 top-0 z-40 bg-transparent backdrop-blur-sm border-b border-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-12 py-4">
        <Link href="/" className="w-9 h-9 rounded-md flex items-center justify-center font-bold hover:scale-110 transition-transform duration-300 text-3xl">
          Portfolio
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`opacity-90 hover:opacity-100 transition-all duration-300 relative ${
                  pathname === item.href
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </Link>
            ))}
            <button className="px-3 py-1 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
              Contact Creator
            </button>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
