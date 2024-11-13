import React from 'react'
import './Home.css'
import image from '../../assets/kunal.png'
import cv from '../../assets/kunalresume.pdf'

export default function Home() {
  return (
    <section className="flex items-center justify-between p-8">
      <div className="w-1/2">
        <h2 className="text-6xl font-bold animate">Empowering Ideas Through Code.</h2>
        <p className="mt-4 text-lg">
          As a skilled Frontend developer, I am dedicated to turning ideas into innovative web applications. 
          Explore my latest projects, showcasing my expertise in web development.
        </p>
        <a 
          href={cv}
          download
          className="mt-4 inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          My Resume
        </a>
      </div>
      <div className="w-1/4">
        <img 
          src={image}
          alt="kunal" 
          className="w-full h-auto rounded-lg animate" 
        />
      </div>
    </section>
  )
}
