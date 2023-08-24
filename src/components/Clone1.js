import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./clone1.css"
// import { TypeAnimation } from 'react-type-animation';
import MyVerticallyCenteredModal from './SignUppage';
import { useNavigate } from 'react-router-dom';
const Clone1 = () => {
    const [modalshow, setModalshow] = useState(false);
    const Navigate=useNavigate()
  return (
    <>
    <div className='main-div-clone1'>
        <div className="underdiv-clone1">
            <h1 className='header-copy clipped'>It's finally here...</h1>
            <h1 className='header clipped'>Elevate Teams, Unleash Potential, Revolutionize Team Management with our Unique Software Solution.</h1>
            <p className="text">Redefining team management, fostering seamless collaboration and elevated productivity. With its innovative features, it empowers teams to communicate, organize tasks, and steamline workflows effortlessly. From task assignment to progress tracking, it's the ultimate solution for unlocking your team's full potential. Say goodbye to complexities and hello to success.
            <br/> Unveiling soon...</p>
            <div className="test">
            <img  className='img-for-logo' src="/magpiie.png" alt="" />
      
    
    

            </div>
            <div id="btn__bg" data-w-id="045f1d33-d1d5-1d87-381e-a1749d5cc4fd"  onClick={()=>Navigate("/waitlist/Register")} class="click_button"><p href="#" class="link-block w-inline-block"></p><h2 class="button_header">Create Your Free Account</h2><h6 class="button_subheading" >And Join 70,000+ Businesses</h6></div>
            <a href="#" class="login_link">Or Login To Existing Account</a>

        </div>


     
      
    </div>
 
    </>
  )
}

export default Clone1



