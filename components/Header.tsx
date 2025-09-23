"use client"
// components/Header.js
import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <div className="text-3xl font-bold">
          <Link href="/">SUBACITO .</Link>
        </div>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/" className="hover:text-gray-300">About me</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">Services</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-300">Goals</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">Partner</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">Courses</Link>
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
            <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About me</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Goals</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Partner</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Courses</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
