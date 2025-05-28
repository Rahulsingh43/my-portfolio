import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import SocialLinks from './SocialLinks';
// import Typewriter from './Typewriter';
// import bannerImg from './assets/your-image.png'; // Replace with actual image

export default function Banner() {
  return (
    <>
      {/* <div>
        <h1 className="text-6xl font-bold">I'm Mikon</h1>
        <p className="mt-4 text-3xl bg-yellow-100 inline-block px-4 py-2 text-black font-semibold border-l-4 border-green-400">
          I'M A Developer 
        </p>
        <div className="mt-8">
          <button className="bg-white text-black px-6 py-2 rounded-full shadow hover:bg-gray-200 transition">Get in touch →</button>
        </div>
      </div>
      <div>
        <img src={bannerImg} alt="Profile" className="w-[400px] rounded-lg" />
      </div> */}
      <div class="flex flex-col md:flex-row h-screen relative">
        <div class="w-full md:w-2/3 h-screen">
        <div className='mt-30 ml-20'>
        {/* <h1 className="text-5xl font-bold text-yellow-500">Hello...</h1> */}
        <h1 className="text-5xl font-bold text-yellow-500"><span> I'm </span> Rahul Singh Chandela</h1>
        <p className="mt-8 text-md bg-yellow-100 inline-block px-2 text-black font-semibold border-l-4 border-green-400">
         {" "}
      <span className="text-black">
        <Typewriter
          words={["MEAN Stack Developer !", "MERN Stack Developer !"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </span>
        </p>
        <p className='text-white max-w-200 text-3xl mt-12 text-wrap italic mt-5'> 
        Skilled Full Stack Developer with 1 year and 6 months of experience in building user-friendly interfaces and robust backend systems.
         Experienced in creating scalable and efficient web applications.
        Passionate about learning new technologies and continuously improving development practices.
        </p>
        <p></p>
       
        <div className="mt-12">
          <button className="bg-white text-black px-8 py-3 rounded-full shadow hover:bg-gray-200 transition text-base font-medium cursor-pointer">Get in touch →</button>
          <button className="border-3 border-yellow-500 bg-white text-black px-8 py-3 rounded-full shadow hover:bg-yellow-500 ml-12 inline-flex transition cursor-pointer">
         <svg className="fill-current w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
         <span className='text-base'> Download CV </span>
          </button>
        </div>
        </div>
        
        </div>
        <img src="/download.jpg" className='landing-img  shadow-xl' alt="" />
        <div class="bg-yellow-500 w-full md:w-1/3 h-screen relative overflow-hidden flex items-center justify-center">
           {/* right side area */}
           <svg
  className="absolute top-0 w-full h-[80%] z-0"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#facc15" />
      <stop offset="100%" stopColor="#fbbf24" />
    </linearGradient>
  </defs>
  <path
    fill="url(#yellowGradient)"
    d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,160C672,160,768,128,864,117.3C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
  ></path>
  <path
    fillOpacity="0.4"
    fill="#facc15"
    d="M0,128L60,144C120,160,240,192,360,197.3C480,203,600,181,720,176C840,171,960,181,1080,170.7C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
  ></path>
</svg>

  <div className="flex justify-center mt-100">
 <button
    onClick={() => window.open('https://github.com/Rahulsingh43', '_blank')}
    className="p-4 bg-white rounded-full shadow-lg hover:bg-gray-200 transition flex items-center justify-center cursor-pointer z-10"
    aria-label="GitHub Profile"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 pointer-events-none fill-black"
      viewBox="0 0 24 24"
    >
      <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.1-.75.08-.74.08-.74a2.5 2.5 0 011.83 1.23 2.55 2.55 0 003.48 1 2.55 2.55 0 01.76-1.6c-2.67-.3-5.47-1.34-5.47-5.96a4.67 4.67 0 011.25-3.23 4.3 4.3 0 01.12-3.18s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.28-1.23 3.28-1.23a4.3 4.3 0 01.12 3.18 4.67 4.67 0 011.25 3.23c0 4.63-2.8 5.66-5.47 5.96a2.85 2.85 0 01.82 2.21v3.29c0 .32.22.7.83.58A12 12 0 0012 0z" />
    </svg>
  </button>

  {/* LinkedIn Button */}
  <button
    onClick={() => window.open('https://www.linkedin.com/in/rahul-singh-chandela-066202221/', '_blank')}
    className="p-4 ml-10 bg-white rounded-full shadow-lg hover:bg-gray-200 transition flex items-center justify-center cursor-pointer z-10"
    aria-label="LinkedIn Profile"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="30" height="30">
    <circle cx="32" cy="32" r="32" fill="white" />
    <path
      fill="#0A66C2"
      d="M20.45 27.63h5.5v17.38h-5.5V27.63zm2.75-8.69c1.76 0 3.19 1.43 3.19 3.19s-1.43 3.19-3.19 3.19a3.19 3.19 0 1 1 0-6.38zm7.38 8.69h5.27v2.38h.08c.73-1.38 2.52-2.83 5.2-2.83 5.57 0 6.6 3.67 6.6 8.43v9.4h-5.5v-8.33c0-1.98-.03-4.53-2.76-4.53-2.77 0-3.2 2.16-3.2 4.39v8.47h-5.5V27.63z"
    />
  </svg>
  </button>
  </div>

        </div>
      </div>
      </>
  );
}
