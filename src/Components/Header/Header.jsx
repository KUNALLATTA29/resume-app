import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kunal Latta</h1>
        <nav>
            <ul className="flex space-x-10">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
            </ul>
        </nav>
    </header>
  )
}
