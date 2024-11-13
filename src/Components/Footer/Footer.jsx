import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center flex justify-around items-center">
    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
    <p>
      Built With <span className="text-red-500">♥</span> by Kunal Latta
    </p>
  </footer>
  )
}
