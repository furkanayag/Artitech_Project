import React, { useRef } from 'react';
import { Drawer } from 'antd';
import './Popup.css'
import { Input } from "@material-ui/core";


const Popup = (props) => {

  const form = useRef()
 


  return (
    <>
      <Drawer className='contact-drawer' placement="right" onClose={props.onClose} open={props.open}>
        <div>
          <form ref={form} className='Text'>
           
        
          <p className='TextSec'>Hi, My Name/My Company Name is</p>
          <Input placeholder="Artitech" name='user_name' /><p className='Text'>. You can answer me on this e-mail</p>
          <Input placeholder="artitech@support.com" name='user_email'  /><p className='Text'>.
          I/My company need design service on </p>
          <Input placeholder="website etc." name='user_service' /><p className='Text'>.
          Budget is $ </p><Input placeholder="2000" name='user_budget' /><p className='Text'> and it needs to be done by </p>
          <Input placeholder="Nov, 2023" name='user_time' />.

          <div><button className='submit-button' >Submit</button></div>
          </form>
        </div>
      </Drawer>
    </>
  );
};
export default Popup;