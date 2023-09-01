import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Hamburger from "./components/Hamburger";
import { useEffect, useState } from "react";
import Navbar from "./components/NavigationBar.js";
import Footer from "./components/FooterCom";
import GoogleFont from 'react-google-fonts';
import { motion } from "framer-motion";
import { Routes , Route } from 'react-router-dom'
import ProjectDetails from "./components/ProjectDetails";
import vector from './images/Vector.png'




function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    wide: {
      width: 100,
      height: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: 'white'
    }}

  const variants2 = {
      default: {
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      },

    }

  const [hamburger, setHamburger] = useState(false);


  return (
    <div className="App" >

      <motion.div className='Cursor'
        variants={variants}
        animate='default'
        transition={{duration:0.05}}
      />
    
    
      <motion.div className='SecondCursor'
        variants={variants2}
        animate={cursorVariant}
        transition={{duration:0.1}}
      />
      
    
      <GoogleFont font='Manrope' />

          <div className='AppNavbar'>
            <div>
            <Navbar/>
            </div>
            <div className='Hamburger'>
             <button className='HamburgerButton' onClick={() => setHamburger(true)}><img src={vector} alt='' style={{width:32,height:24 }}/></button>
            </div>
            
          </div >

          <Hamburger hamburger={hamburger} onClose={() => setHamburger(false)} />

          <div className='content'>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/Projects" element={<Projects/>} />
              <Route exact path="/About" element={<About/>} />
              <Route exact path='/ProjectDetails' element={<ProjectDetails />} />
            </Routes>
          </div>
          
          <div className= 'footer'>

              <Footer/>

          </div>


    </div>
  );
}

export default App;
