
import './App.css'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
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
        <section id="home" >
         <Banner /> 
        </section>
        <Skills slides={SLIDES} options={OPTIONS}/>
        <section id="experienceProjects" className="p-10"><WorkExperience /></section>
        <section id="education" className="p-10"><Education /></section>
        <section id="contact" className="p-10"><Contact /></section>
      </main>
    </>
  )
}

export default App
