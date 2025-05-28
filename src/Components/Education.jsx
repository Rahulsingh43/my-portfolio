import React from "react";

const Education = () => {
    return(
        <>
            <h3 className="text-center text-6xl font-semibold my-6 text-yellow-500 font-family text-shadow-2xs text-shadow-whit">Education</h3>
<div className="relative w-[85%] md:w-[70%] mx-auto rounded-2xl p-6 shadow-lg bg-gradient-to-b from-[#facc15] via-[#fbbf24] to-[#f59e0b] text-white overflow-hidden">
  {/* Animated gradient background effect */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-30 animate-gradient-x"></div> */}
  
  <div className="relative space-y-6">
    {[{
      title: "Pursuing Online MCA from Sikkim Manipal University",
      date: "Since Feb, 2025",
    },
    {
      title: "Certification in C programming from Webskitters Academy",
      date: "2023",
    },{
      title: "Certification in Angular from Webskitters Academy",
      date: "2023",
    },
    {
      title: "BSC in Biological Science from University of Calcutta",
      date: "July 2018 - Sept 2021",
    }].map((edu, idx) => (
       <div key={idx} className="flex justify-between items-start">
        <p className="text-base md:text-lg font-semibold text-black w-[70%] leading-snug">
          {edu.title}
        </p>
        <p className="text-sm md:text-base text-black w-[30%] text-right mt-1">
          {edu.date}
        </p>
      </div>
    ))}
  </div>
</div>

        </>
    )
}

export default Education;