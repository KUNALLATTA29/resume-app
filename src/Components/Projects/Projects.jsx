import React from 'react'
import task from '../../assets/task.png'
import youtube from '../../assets/you.png'
import horo from '../../assets/horo.png'
import curr from '../../assets/curr.png'
import ecco from '../../assets/ecco.png'

export default function Projects() {
  const projects = [
    {
      title: 'YouTube Clone',
      description: 'A YouTube-like platform for browsing and watching videos.',
      image: youtube,
      link: 'https://youtube-clone-phi-beryl.vercel.app/'
    },
    {
      title: 'E-commerce Site',
      description: 'An online shopping platform with product browsing, cart, and checkout features.',
      image: ecco,
      link: 'https://react-ecommerce-web-hazel.vercel.app/'
    },
    {
      title: 'Horoscope App',
      description: 'A horoscope app that provides daily insights based on zodiac signs.',
      image: horo,
      link: 'https://horoscope-app-ecru.vercel.app/'
    },
    {
      title: 'Currency Converter',
      description: 'A handy currency converter with support for multiple international currencies.',
      image: curr,
      link: 'https://currency-converter-bice-pi.vercel.app/'
    },
    {
      title: 'Task Manager',
      description: 'A project management tool to organize tasks and track progress.',
      image: task,
      link: 'https://react-app-task-eight.vercel.app/'
    },
    //update-1-1-25
    {
      title: 'Blog Managment app',
      description: 'Developed a Blog management application that allows users to create, update, and delete images and tasks.',
      image: blog,
      link: 'https://blog-manager-fullstack.onrender.com'
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-200 mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:bg-indigo-700">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg transition-transform transform hover:scale-110 duration-300 shadow-md hover:shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition">
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
            </h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
