"use client"
// components/Header.js
import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gradient-to-b from-gray-950 text-white w-full z-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <div className="text-3xl font-bold ">
          <Link href="/" className='flex items-center gap-2'>
            <div className="relative w-15 h-15">
              <Image src="/images/daisy-logo.png" alt="Logo" fill className="object-contain" />
             
            </div>
           SUBA Code Bậy
          </Link>
        </div>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/" className="hover:text-gray-300">@</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">About</Link>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform z-10 duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <FiX size={28} className="text-white" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-10 ml-6 text-lg">
          <li>
            <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>@</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
