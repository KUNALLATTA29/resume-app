import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white p-6 text-center flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      
      <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} All rights reserved.</p>
      
      <p className="text-sm md:text-base">
        Built with <span className="text-red-500 animate-pulse">♥</span> by Kunal Latta
      </p>
      
      <div className="flex space-x-6">
        <a 
          href="https://github.com/KUNALLATTA29" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/kunal-latta-842321227/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        
        <a 
          href="mailto:kunalofficial234@gmail.com" 
          className="text-gray-400 hover:text-white transition"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
      
    </footer>
  );
}
