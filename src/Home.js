import React, { useEffect, useState } from "react";
import './Home.css'
import './smallscreen.css'
import Services from "./components/Services"
import Experiences from './components/Experiences'
import SingleRow from './components/SingleRow'
import Pics from './images/Pics.jpg';


function Home() {

  const [projects, setProjects] = useState([]);

  useEffect( () =>{
    async function fetchData() {
      const data = await fetch("/assets/projects.json").then(data => data.json());
    setProjects(data);
    }
    fetchData();
    
  }, []);

  return (
    <div className="Home" >

          <div className='page-wrapper'>

              <div className='Body'>

                <div className="BodyLeft">

                    <div><h4> We meet different design needs that our customers might challenge
                      in their digital journey.
                    </h4>
                    </div>

                    <div className='LastUpdatedDiv' >
                    <h4 className='LastUpdated' style={{fontSize:24, fontWeight:400}}> <div id="fragment1">Artitech</div>
                    <div id="fragment2"> Art Interfaces Tech</div></h4>

                    </div>

                </div>

                <div className="BodyRight" >

                  <p><span className="Designer">Artitech</span> is <span className="Developer"> a Multi-disiplinary Design Studio </span> based in Istanbul</p>
                
                </div>

              </div>
              

                  <div className='Projects'>
                    {
                      projects.map(project => (
                        <SingleRow key={project.id} project={project}/>
                      ))
                    }


                  <button className='allwork' >All Works</button>

              </div>

              
              <div className='Info'>

                  <div className='services'>
                      <h4 className='ServicesTitle'>Some of Our Services</h4>
                      <Services title='Ux&Ui Design'/>
                      <Services title='User Research'/>
                      <Services title='Web&App Design'/>
                      <Services title='Brand Identity'/>
                      <Services title='Marketing'/>
                      <Services title='Social Media'/>
                      <Services title='Illustration'/>
                      <Services title='Motion&Animation'/>
                  </div>
                  
                  <div className='Summary'>
                        <div className='Summary'>
                        <h3 className='SumTitle'>Currently serving in many areas of <span className='SolidBox'>Design</span>. And have been serving in the design industry for 6 years. </h3>
                        </div>
                        
                        <div>
                            <div className='SummaryBody'>
                              <p className='sump'>  We are bunch of designers who is designing digital products and experiences for years. 
                              We believe we have a great sense of aesthetic. 
                              We mix that with our experience in creating basic to complex digital systems. We are capable of meet any kind of design needs you might have.
                              </p>
                            </div>
                            <button className='ReadMore'>Read More</button>
                        </div>
          
                  </div>
              
              </div>

              </div>

              <div className='BigPic'>
                <img className='picbig' src={Pics} alt=""/>
              </div>

              <div className='Experience' style={{paddingTop:144, display:'flex', justifyContent:'space-between',
              backgroundColor:'#f0f0f0', paddingLeft:40, paddingRight:40}}>
                
                <div className='exp-left'>
                  <h3 className='exp-title'>Experiences&Articles</h3>
                </div>
                
                <div className='exp-right'>
                  <Experiences name='Inverse Proportion Between Growth and UX' year='2023'/>
                  <Experiences name='Solid-ICT' year='2022'/>
                  <Experiences name='WeHelp&WeDance' year='2022'/>
                  <Experiences name='Jungle' year='2021'/>

                </div>


           </div>

    </div>
  );
}

export default Home;
