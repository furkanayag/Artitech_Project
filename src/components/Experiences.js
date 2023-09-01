import React from "react";
import './Experiences.css'


function Experiences (props) {
    return (
       <div>
            <div className='ExpContent' style={{display:"flex"}}>
                <p className='ExpNames'>{props.name}</p>
                <p className='ExpNames' >{props.year}</p>
            </div>

            <div>
                <p className='sump'>
                    {props.define}
                </p>
            </div>

            <div>
                <hr/>
            </div>
       </div> 
    )
}

export default Experiences