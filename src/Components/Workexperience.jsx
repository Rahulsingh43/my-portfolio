import React from "react";

const WorkExperience = () => {
    return(
        <>
            <h3 className="text-center text-6xl font-semibold my-6 text-yellow-500 font-family text-shadow-2xs text-shadow-whit">Work Experience & Projects</h3>
            {/* <div> */}
              <div className="bg-gradient-to-b from-[#facc15] via-[#c79922] to-[#f59e0b] shadow-xl p-6 mt-10 rounded-xl">
         {/* <div className="flex justify-center gap-8 p-6 flex-wrap">
            <h5 className="text-yellow-200 font-semibold text-xl">PROJECT | HRMS</h5>
            <h5 className="text-yellow-200 font-semibold text-xl">COMPANY | IVAN INFOTECH PVT LTD</h5>
         </div> */}
         <div className="flex justify-center gap-8 p-6 flex-wrap">
          <p className="text-center max-w-lg text-white font-exp text-shadow-lg">I worked in <b> IVAN INFOTECH PVT LTD</b> on a product-based HRMS project that featured three distinct panels: Admin Panel, Company Panel, and Employee Panel. The system was designed to streamline and automate HR operations across organizations.</p>
         </div>
         <h5 className="text-dark text-center font-semibold font-family mb-2 mt-6 text-4xl">My Contribution</h5>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <div className="p-6 rounded-xl bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 text-white shadow-lg">
              <p className="text-lg leading-relaxed font-exp text-shadow-lg">
              Developed and integrated RESTful APIs to enhance application functionality, ensuring seamless communication
              between frontend and backend systems.
              </p>
            </div>
  
            <div className="p-6 rounded-xl bg-gradient-to-b from-green-500 via-teal-400 to-blue-500 text-white shadow-lg">
              <p className="text-lg leading-relaxed font-exp text-shadow-lg">
              Developed a multilingual web application with Right-to-Left (RTL) support, ensuring accessibility for diverse
              users.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 text-white shadow-lg">
              <p className="text-lg leading-relaxed font-exp text-shadow-lg">
              Developed and optimized a function for fast and efficient bulk import of large attendance data, improving
              processing speed and performance.
              </p>
            </div>
          <div className="p-6 rounded-xl bg-gradient-to-b from-pink-500 to-yellow-400 text-white shadow-lg">
           <p className="text-lg leading-relaxed font-exp text-shadow-lg">
             Successfully implemented features within tight deadlines, ensuring high-quality deliverables without
             compromising performance or functionality.
           </p>
         </div>

  
            <div className="p-6 rounded-xl rounded-xl bg-gradient-to-b from-teal-500 via-emerald-400 to-lime-300 text-white shadow-lg">
              <p className="text-lg leading-relaxed font-exp text-shadow-lg">
              Worked closely with the QA team to identify, troubleshoot, and resolve issues, ensuring optimal application
              performance and reliability.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-400 text-white shadow-lg">
              <p className="text-lg leading-relaxed font-exp text-shadow-lg">
              Integrated GPS technology for location-based attendance logging, improving monitoring accuracy for both
              remote and on-site employees.
              </p>
            </div>
          </div>
         <h5 className="text-dark font-semibold font-family mb-2 mt-6 text-4xl">PROJECTS</h5>
<ul className="space-y-6 max-w-2xl mt-10 text-gray-800">
  <li className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-900">
        HRMS - (Angular, NodeJs, MongoDB)
      </h3>
      <a
        href="https://hrmlix.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4"
        title="Open Project"
      >
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 text-gray-600 hover:text-blue-600 transition"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
  <path d="M5 5h9v2H7v10h10v-7h2v9H5V5z" />
</svg>

      </a>
    </div>
  </li>

  <li className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-900">
        Real-time Chat App - (ReactJs, NodeJs, Socket.io, MySQL)
      </h3>
      <a
        href="https://chat-app-theta-pied-87.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4"
        title="Open Project"
      >
     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 text-gray-600 hover:text-blue-600 transition"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
  <path d="M5 5h9v2H7v10h10v-7h2v9H5V5z" />
</svg>

      </a>
    </div>
  </li>
</ul>


              </div>
            {/* </div> */}

        </>
    )
}

export default WorkExperience;