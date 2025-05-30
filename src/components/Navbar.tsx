'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 border-b bg-white fixed top-0 z-50 shadow-sm">
      <div className="text-lg font-bold">MyPortfolio</div>
      <ul className="flex gap-6">
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={clsx(
                'transition-colors duration-200 hover:text-indigo-600',
                pathname === href ? 'text-indigo-600 font-semibold' : 'text-gray-700'
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
