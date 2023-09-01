import React from "react";
import { Link } from "react-router-dom";

function SingleRow ({project}) {


    return (
        <Link to={`/ProjectDetails?id=${project.id}`}>

        <div className='midddleRow'>

                    <div className='ThirdProject'>
                    <div>
                        <figure className='project-content'>
                          <p className="project-text">{project.name}</p>
                          <p className="project-year">{project.year}</p>
                          <img  src={project.img}  style={{borderRadius:24}} className="project" alt=""/>
                        </figure>
                      </div>
                    </div>
                
        </div>
        </Link>
    )
}

export default SingleRow