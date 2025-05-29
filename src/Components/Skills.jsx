import React from "react";
import './Skills.css';

const Skills = () => {
    const items = [
        { name: 'HTML', logo: '/Logos/icons8-html5-144.png' },
        { name: 'CSS', logo: '/Logos/icons8-css3-144.png' },
        { name: 'JavaScript', logo: '/Logos/icons8-javascript-144.png' },
        { name: 'React', logo: '/Logos/icons8-react-96.png' },
        { name: 'Node.js', logo: '/Logos/icons8-nodejs-144.png' },
        { name: 'MongoDB', logo: '/Logos/icons8-mongodb-96.png' },
        { name: 'Express', logo: '/Logos/icons8-express-js-144.png' },
        { name: 'Git', logo: '/Logos/icons8-git-144.png' },
        { name: 'TypeScript', logo: '/Logos/icons8-typescript-144.png' },
        { name: 'GitHub', logo: '/Logos/icons8-github-120.png' },
      ];
      
      

    return(
        <>
        <section className="h-90 mt-12">
            <h3 className="text-white text-center text-6xl font-semibold my-6 text-yellow-500 font-family">Skills</h3>
            <div className="scroll-container mt-10 py-8">
              <div className="scroll-track">
                {[...items].map((item, idx) => (
                  <div className="box sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] 
             mx-[25px] bg-[#161616] text-white text-[1.2rem]" key={idx}>
                    <img src={item?.logo} className="sm:w-[20px] sm:h-[20px] lg:w-[60px] lg:h-[60px]" alt={item?.name} />
                    <span className="text-xs tracking-wide">{item?.name}</span>
                  </div>
                ))}
              </div>
            </div>
        </section>


        </>
    )
}




export default Skills;