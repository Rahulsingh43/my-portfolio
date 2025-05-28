import React from "react";


const Contact = () => {
    return(
        <>
            
  <h3 className="text-center text-6xl font-semibold mt-18 text-yellow-500 font-family text-shadow-2xs text-shadow-whit">Contact</h3>

<div className="w-full mt-6">
  {/* Divider */}
  <hr className="border-t-4 border-white w-[85%] mx-auto rounded-full" />

  {/* Footer */}
  <footer className="w-[85%] md:w-[70%] mx-auto py-8 text-white flex flex-col items-center">
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">

      {/* Phone */}
      <a href="tel:+918240445050" className="flex items-center space-x-2 hover:text-yellow-400 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 003.64.58 1 1 0 011 1v3.58a1 1 0 01-1 1A17.93 17.93 0 012 5a1 1 0 011-1h3.6a1 1 0 011 1 11.72 11.72 0 00.58 3.64 1 1 0 01-.21 1.11z"/>
        </svg>
        <span className="text-lg">+91 8240445050</span>
      </a>

      {/* Email */}
      <a href="mailto:rschandela43@gmail.com" className="flex items-center space-x-2 ml-20 hover:text-yellow-400 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
        </svg>
        <span className="text-lg">rschandela43@gmail.com</span>
      </a>

      {/* GitHub */}
      <a href="https://github.com/Rahulsingh43" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 ml-20 hover:text-yellow-400 transition">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-5 h-5 fill-current hover:text-yellow-400">
      <circle cx="32" cy="32" r="32" fill="white" />
      <path
        fill="black"
        d="M32 5C17.64 5 6 16.64 6 31c0 11.49 7.44 21.22 17.76 24.65 1.3.24 1.77-.56 1.77-1.24 0-.61-.02-2.23-.03-4.38-7.23 1.57-8.75-3.49-8.75-3.49-1.18-3-2.89-3.8-2.89-3.8-2.36-1.62.18-1.59.18-1.59 2.6.18 3.97 2.67 3.97 2.67 2.32 3.97 6.1 2.82 7.58 2.16.24-1.68.91-2.82 1.65-3.47-5.77-.66-11.83-2.89-11.83-12.86 0-2.84 1.01-5.16 2.66-6.98-.27-.66-1.16-3.31.25-6.9 0 0 2.18-.7 7.14 2.67a24.9 24.9 0 0 1 6.5-.88c2.2.01 4.41.3 6.5.88 4.96-3.37 7.14-2.67 7.14-2.67 1.41 3.59.52 6.24.25 6.9 1.66 1.82 2.66 4.14 2.66 6.98 0 10.01-6.07 12.2-11.86 12.83.94.8 1.77 2.36 1.77 4.76 0 3.44-.03 6.22-.03 7.07 0 .69.47 1.49 1.78 1.24C50.56 52.22 58 42.49 58 31 58 16.64 46.36 5 32 5z"
      />
    </svg>
        <span className="text-lg">GitHub</span>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/rahul-singh-chandela-066202221/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 ml-20 hover:text-yellow-400 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.4H3.5V9h3.6v11.4zM5.3 7.5C4.1 7.5 3 6.4 3 5.2S4.1 3 5.3 3 7.6 4.1 7.6 5.2c0 1.2-1.1 2.3-2.3 2.3zm15.1 12.9h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.1z"/>
        </svg>
        <span className="text-lg">LinkedIn</span>
      </a>

    </div>
  </footer>
</div>
        </>
    )
}

export default Contact;