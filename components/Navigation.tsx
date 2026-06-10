'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Systems', href: '#competency' },
    { label: 'Writing', href: '#publications' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur border-b border-border-subtle' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/#" className="text-base sm:text-lg font-semibold text-foreground hover:text-accent transition-colors truncate">
          Intelligent Systems
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Links */}
        <div className="md:hidden flex items-center gap-3">
          <a href="#projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Work</a>
          <a href="#research" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Research</a>
          <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  )
}
