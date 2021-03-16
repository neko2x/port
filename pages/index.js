
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useState,useEffect} from 'react'
export default function Home() {
  const [show,setShow]=useState(false);
  const shows=()=>{
    if(window.innerWidth<=991){
        setShow(true);
   
    }else{
        setShow(false);
    
    }
}

useEffect(() => {
  AOS.init({
    easing: "ease-out-cubic",
   
    offset: 100,
  });  
  shows()
}, [])
  if (process.browser) {
    window.addEventListener('resize',shows);

        }
  return (
    <div >
             <Navbar show={show}/>
            
          <section id="hero">
            <Hero/>
            </section>
            <section id="about">
          <About/>
          </section>
          <section id="skills">
          <Skills show={show}/>
          </section>
          <section id="projects" >
          <Projects/>
          </section>
          <section id="contact" >
          <Contact/>
          </section>
      <Footer/>
    
    </div>
  )
}
