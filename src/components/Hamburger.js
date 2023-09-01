import React, { useState } from 'react';
import { Drawer } from 'antd';
import './Hamburger.css'
import {Link} from 'react-router-dom'
import Popup from "./Popup";



const Hamburger = (props) => {
    
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer className='contact-drawer' placement="right" onClose={props.onClose} open={props.hamburger}>
        <div>
            <ul className='Mobile-Router'>
                <li className="Router-Home"><Link to='/'><button className='Button-Hamburger' onClick={props.onClose}>Home</button></Link></li>
                <li className="Router-Projects"><Link to='/Projects'><button className='Button-Hamburger' onClick={props.onClose}>Projects</button></Link></li>
                <li className="Router-About"><Link to='/About'><button className='Button-Hamburger' onClick={props.onClose}>About</button></Link></li>
                <li className="Router-Contact"><button className='Button-Hamburger' onClick={() => setOpen(true)}> Contact</button></li>
            </ul>
            <div className='BottomButtons'>
              <button className='Bottom-Button'>Linkedin</button>
              <button className='Bottom-Button'>Instagram</button>
              <button className='Bottom-Button'>Behance</button>
            </div>
        </div>
      </Drawer>
      <Popup open={open} onClose={() => setOpen(false)} />
      
    </>
  );
};
export default Hamburger;