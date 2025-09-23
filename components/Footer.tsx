// components/Footer.js
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center">
        {/* Cột 1: Thông tin thương hiệu */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-center">SUBACITO</h2>
          <p className="text-sm text-gray-400">
            © 2021. All rights reserved.
          </p>
        </div>

        </div>
    </footer>
  )
}
