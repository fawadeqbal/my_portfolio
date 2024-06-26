"use client"
import React, { useEffect, useState } from 'react'
import ThemeToggler from './ThemeToggler'
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'

function Header() {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    const scrollYPas = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })

    return () => window.removeEventListener('scroll', scrollYPas)
  })
  return (
    <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-accent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'} `}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* <Logo /> */}
          <h1 className='h2'>Fawad Iqbal</h1>
          <div className='flex items-center gap-x-6'>
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            <div className="xl:hidden ">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header