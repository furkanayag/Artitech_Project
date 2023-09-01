import React, { useEffect, useState } from "react";
import Experiences from "./Experiences";
import { useSearchParams } from "react-router-dom";
import "./ProjectDetails.css"

function ProjectDetails () {

  const [project, setProject] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

    useEffect( () =>{
        async function fetchData() {
          const data = await fetch("/assets/projects.json").then(data => data.json());
          setProject(data.find(proj => proj.id.toString() === searchParams.get("id")));
        }
        fetchData();
        
      }, []);
    return (
       <div className='page-wrapper-detail'>
            <div className='header-pic-div'>
                <img src={project.img} className='project-header' alt="" />
            </div>
            
            <div className='main-infos'>
                <div className='info-text-type'><p>Client:{project.clientname}</p></div>
                <div className='services'>
                    <p className='info-text-type'>{project.service1}</p>
                    <p className='info-text-type'>{project.service2}</p>
                    <p className='info-text-type'>{project.service3}</p>
                </div>
                <div className='info-text-type'><p>{project.year}</p></div>
            </div>

            
                
            <div className='detail-infos' style={{paddingTop:144, display:'flex', justifyContent:'space-between',
                backgroundColor:'#f0f0f0'}}>
                
                <div className='exp-left'>
                  <h3 className='exp-title'>{project.name}</h3>
                </div>
                
                <div className='exp-right'>
                  <Experiences name='Client' year={project.clientname}/>
                  <Experiences name='Year' year={project.year}/>
                  <Experiences name='Location' year={project.location}/>
                  {project.explanation}

            </div>

            </div>

            <div className>
                <div className='project-pics-d'>
                    <img className='project-pic' src={project.img1} alt=""/>
                    <img className='project-pic' src={project.img2} alt=""/>
                </div>
                <div className='project-pic-s'>
                    <img className='project-pic' src={project.img3} alt=""/>
                </div>
                <div className='project-pics-d'>
                    <img className='project-pic' src={project.img4} alt=""/>
                    <img className='project-pic' src={project.img5} alt=""/>
                </div>
            </div>
            <div>

            </div>      
       </div> 
    )
}

export default ProjectDetails