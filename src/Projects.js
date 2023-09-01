
import React, { useEffect, useState } from "react";
import "./App.css";
import "./Project.css";
import SingleRow from "./components/SingleRow";


function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect( () =>{
    async function fetchData() {
      const data = await fetch("/assets/projects.json").then(data => data.json());
    setProjects(data);
    }
    fetchData();
    
  }, []);
  

  return (
    <div className="About" >

          <div className='PageWrapper' >
            <div className='TitleDiv'>
                <div className='Title'>
                <span className="Developer">Dive Into</span>
                <div><span className="Studio"> Our Latest Design Projects</span> </div>
                </div>
            </div>

          </div>
              

            <div className='ProjectDiv'>
                {
                  projects.map(project => (
                    <SingleRow key={project.id} project={project}/>
                  ))
                }

              </div>

          </div>

  

  );
}

export default Projects;