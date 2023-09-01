import React, {useState} from "react";
import Popup from "./Popup";
import Logo from '../images/Logo.png'
import { Link } from "react-router-dom";

function Navbar (){
    const [open, setOpen] = useState(false);
    
        return(
        <div className='Navbar' style={{justifyContent:"space-between", display:"flex", paddingTop:24, paddingRight:40, paddingLeft:40, 
         backgroundColor: '#f0f0f0'}}>
            <div className='Logo'>
                <img src={Logo} height={40} width={160} />
            </div>
            <div className='Links' style={{justifyContent:"space-between"}}>
                <ul className='Router'>
                    <li className="Home"><Link to='/'>Home</Link></li>
                    <li className="Projects"><Link to='/Projects'>Projects</Link></li>
                    <li className="Projects"><Link to='/About'>About</Link></li>
                    <li className="Contact"><button className='ButtonContact' onClick={() => setOpen(true)}> Contact</button></li>
                </ul>
            </div>
            <div className='Social' style={{justifyContent:"center"}} >
                <div className='HeaderSocial' style={{justifyContent:"right", display:"flex" }}><h4>Social</h4></div>
                <div className="SocialLinksDiv"><ul className="SocialLinks">
                    <li className="TW"><a href='#'>LI</a></li>
                    <li className="IG"><a href='#'>IG</a></li>
                    <li className="Home"><a href='#'>BE</a></li>
                </ul>
                </div>
            </div>
            <Popup open={open} onClose={() => setOpen(false)} />
        </div>
        )
    
}

export default Navbar

