'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection' // ⬅️ add this

const navItems = [
  { label: 'about.', href: '#about', id: 'about' },
  { label: 'work life.', href: '#experiences', id: 'experiences' },
  { label: 'contact.', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [prevScroll, setPrevScroll] = useState(0)
  const [hidden, setHidden] = useState(false)
  const activeId = useActiveSection(navItems.map(item => item.id)) // ⬅️ track visible section

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setHidden(current > 200 && current > prevScroll)
      setPrevScroll(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScroll])

  return (
    <nav
      className={clsx(
        'w-full fixed top-0 z-40 shadow-sm transition-all duration-300',
        'flex justify-between items-center py-4 px-6',
        'bg-indigo-100/90 backdrop-blur-m',
        hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      )}
    >
      <div className="text-lg font-bold text-black">i am Peter.</div>
      <ul className="flex gap-6">
        {navItems.map(({ label, href, id }) => (
          <li key={href}>
            <Link
              href={href}
              className={clsx(
                'transition-colors duration-200 hover:text-indigo-600',
                activeId === id ? 'text-indigo-600 font-semibold' : 'text-gray-700'
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
