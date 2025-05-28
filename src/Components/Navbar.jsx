// Navbar.jsx
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
        console.log(window.scrollY);
        
      } else {
        console.log(window.scrollY);
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-309 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center">
        {/* <div className="text-2xl font-bold">mikon<span className="text-green-500">.</span></div> */}
        <ul className="flex gap-15 font-medium">
          <li><a href="#home">HOME</a></li>
          <li><a href="#experienceProjects">WORK EXPERIENCE</a></li>
          <li><a href="#experienceProjects">PROJECTS</a></li>
          <li><a href="#education">EDUCATION</a></li>
          {/* <li><a href="#about">ABOUT ME</a></li> */}
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}
