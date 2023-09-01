import React, { useState } from 'react';
import Popup from "./Popup";

function Footer () {
    const [open, setOpen] = useState(false);

    return (
       <div className='footer' style={{backgroundColor:'#191919', paddingBottom:40  }}>
            <div className='FooterTop' style={{display:'flex', justifyContent:"space-between"}}>
                <p className='TopText'>Design for Everything</p>
                <p className='TopText'>Arthitech</p>
            </div>

            <div className='FooterMid' style={{paddingTop:180, paddingBottom:180, justifyContent:'center', }}>
                <div className='MidQue' style={{paddingBottom:20, textAlign:'center'}}> Have an Idea? </div>
                <div style={{textAlign:'center'}}><button className='MidButton' onClick={() => setOpen(true)}> Let's Talk </button></div>
            </div>

            <div className='FotterBottom' style={{display:'flex', justifyContent:'space-between'}}>
                <div className='BottomText' >
                    <p>© All rights reserved.</p>
                </div>

                <div className='BottomButtons'>
                    <button className='BottomButton'>Linkedin</button>
                    <button className='BottomButton'>Instagram</button>
                    <button className='BottomButton'>Behance</button>
                </div>
            </div>
         <Popup open={open} onClose={() => setOpen(false)} />
       </div> 
    )
}

export default Footer