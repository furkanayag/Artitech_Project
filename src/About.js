import React from "react";
import "./About.css";
import './Home.css';
import './App.css'
import Services from "./components/Services";
import Experiences from "./components/Experiences";
import AboutPic from './images/Frame 4.png'
import AboutPicMobile from './images/mobil.png';




function About() {

  return (
    <div className="About" >

          <div className='PageWrapperAbout' style={{ paddingTop:160, paddingLeft:40, paddingRight:40, paddingBottom:120 , backgroundColor:'#f0f0f0'}}>

            <div className='TitleDiv'>
              <p className='Title'>
                We are <span className="Developer">Artitech</span>. <span className="Studio">A Multidisiplinary Design Studio</span> based in Istanbul. We are consist of experienced designers in the digital product
                industry. We design complex digital systems and solve complex design problems in a developer friendly way. Design for Everything you need.
              </p>

            </div>

            <div>
              <img src={AboutPic} className='AboutPic' alt=""/>
              <img src={AboutPicMobile} className='AboutPicMobile' alt=""/>
            </div>

            <div className='Info'>

                <div className='services'>
                    <div style={{paddingBottom:100}}>
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


                </div>

                <div className='Summary'>
                      <div className='Summary' style={{paddingBottom:60}}>
                      <h3 className='SumTitle'>Design for Everything:</h3>
                      <h3>From <span className='SolidBox'>Startups</span> to <span className='SolidBox'>Coorporations</span>.</h3>
                      </div>
                      
                      <div>
                          <div className='SummaryBody' style={{maxWidth:500}}>
                            <p className='sump'>  We are bunch of designers who is designing digital products and
                            experiences for years. We believe we have a great sense of aesthetic. We mix that with our experience
                            in creating basic to complex digital systems. We are capable of meet any kind of design needs you might have.
                            </p>

                            <p className='sump'>
                              We hear your idea and shape it visible in the tech world. We provide many services to meet our customer's need in
                              the digital product industry. And our pricing policy depends on services you need.
                            </p>

                            <p className='sump'>
                              As our designers are multi-skilled, we have
                              experience in the front-end development technologies. By using that, our design is developer friendly. We removal
                              the conflict between design and development.
                            </p>
                          </div>
                      </div>
                      

                </div>
                </div>

                <div className='Experience2' >
                
                <div className='ExpLeft'>
                  <h3 className='ExpTitle'>Approach</h3>
                </div>
                
                <div className='ExpRight'>
                  <Experiences name='Understand&Analyze' year='1st'
                  define='First, we meet with our client and potantial users to understand the
                  problem&need.'/>
                  <Experiences name='Scope&Roadmap' year='2nd' 
                  define='At this stage, our focus to define the scope and make necessary estimations.'/>
                  <Experiences name='Research&Design' year='3rd' 
                  define='We work on the product until it is finalized. After finalization we deliver all necessary documents.'/>
                  <Experiences name='Maintain' year='4th' 
                  define='We keep in touch for any need you might have after road.'/>
                  

                </div>

              </div>
           </div>

          

    </div>
  );
}

export default About;
