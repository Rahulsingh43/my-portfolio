
import './App.css'
import Banner from './Components/Banner'
import Education from './Components/Education'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import WorkExperience from './Components/Workexperience'

function App() {

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 8
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    
    <>
   <Navbar />
      <main>
        {/* <section id="home" className="relative h-screen text-white flex items-center justify-between px-10 z-0"> */}
         <Banner />
        {/* </section> */}
        <Skills slides={SLIDES} options={OPTIONS}/>
        <section id="services" className="p-10"><WorkExperience /></section>
        <section id="projects" className="p-10"><Education /></section>
      </main>
    </>
  )
}

export default App
