import React from 'react';
import image from '../../assets/kunal.png';
import cv from '../../assets/Kunal_Mern_Resume.pdf';

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white min-h-screen">
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold animate-pulse leading-tight">
          Empowering Ideas Through Code.
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          As a skilled Frontend developer, I am dedicated to turning ideas into innovative web applications.
          Explore my latest projects, showcasing my expertise in web development.
        </p>
        <a 
          href={cv}
          download
          className="mt-4 inline-block bg-gray-800 text-white py-2 px-6 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          My Resume
        </a>
      </div>
      <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center">
        <img 
          src={image}
          alt="kunal" 
          className="w-2/3 md:w-full h-auto rounded-lg transform transition duration-500 hover:scale-105"
          style={{ border: 'none', boxShadow: 'none' }}
        />
      </div>
    </section>
  );
}
