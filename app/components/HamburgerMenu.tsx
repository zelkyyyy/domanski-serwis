'use client'

import React, { useState } from 'react'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#', label: 'Strona główna' },
    { href: '#o-nas', label: 'O nas' },
    { href: '#usługi', label: 'Usługi' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((open) => !open)}
        className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-neutral-900/60 text-neutral-100 shadow-lg shadow-black/30 transition hover:border-red-500/40 hover:bg-neutral-800"
      >
        <span className="sr-only">Menu</span>
        <span
          className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'}`}
        />
        <span
          className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isOpen ? 'scale-x-0 opacity-0' : 'opacity-100'}`}
        />
        <span
          className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'}`}
        />
      </button>

      <div
        id="mobile-menu"
        className={`absolute right-0 top-14 w-72 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/5  shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300 ${isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'}`}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-lg font-semibold text-neutral-100 transition hover:bg-white/5 hover:text-red-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HamburgerMenu