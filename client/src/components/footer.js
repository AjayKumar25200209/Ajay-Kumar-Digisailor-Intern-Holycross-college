import React from 'react'
import Face from '../images/facebook.svg'
import Insta from '../images/insta.svg'
import Twit from '../images/twitter.svg'
import You from '../images/youtube.svg'
import Vklogo from "../images/vk.png";


const Footer=()=>{
    return(
        <div className="foot">
            <div className="fcon1">
                <img src={Vklogo} alt="" width={200}  />
                <p>Virat Kohli, captain of the Indian men’s cricket team set up the Virat Kohli Foundation (VKF) in 2013.</p>
                <div className="logos">
                    <img src={Face} alt="" />
                    <img src={Insta} alt="" />
                    <img src={Twit} alt="" />
                    <img src={You } alt="" />
                </div>
            </div>
            <div className="fcon2">
                <h3 style={{marginBottom:"20px"}}>Contacts</h3>
                <p><b>Address</b> : Sarkar Heritage B Wing 1st Floor,Kane Road Bandra West, Mumbai 400050</p>
                <p><b>Phone</b> : 022 20861134/35/36</p>
            </div>
            <div className="fcon3">
                <h3>Important Links</h3>
                <a href="">VKF Athletes</a>
                <a href="">Media</a>
                <a href="">Gallery</a>
                <a href="">Athletes Program</a>
                <a href="">80G Certification</a>
                <a href="">Contact Us</a>
            </div>
        </div>
    )
}

export default Footer