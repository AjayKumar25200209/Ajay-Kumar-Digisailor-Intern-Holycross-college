import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Profile from "../images/profile.jpeg";

import {useState} from 'react'

const Navigator=()=>{
    const [wid, setwid] = useState("")
    const [righ, setrigh] = useState("");

    const  width=()=>{
        setwid("300px")
        setrigh("-1px")

    }


    return(
        <div className="nav" >
            <div className="wlcome">
                <h3>Hello, Ajay</h3>
                <p>Welcome Back</p>
            </div>
    <div className="search" style={{width:wid}} >
            <input type="text" className="place"  style={{outline:'none'}}  onClick={width} placeholder="Search" />
            <button style={{right:righ}} >Search</button>
            
           </div>
           <div className="profile">
                <img src={Profile}  alt="" width={42} />
                <p>Profile</p>
           </div>
        </div>
    ) 
}









export default Navigator