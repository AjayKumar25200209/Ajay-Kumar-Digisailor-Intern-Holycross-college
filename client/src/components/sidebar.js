import React from 'react'
import { useEffect, useState } from 'react';
import { Routes, BrowserRouter , Route, Navigate , useNavigate , useLocation } from 'react-router-dom';
import   '../App.css'
import Vklogo from "../images/vklogo.png";


const Side=()=>{




        
            const location = useLocation();




    return(
        <div className="side">
            <div>
                <img src={Vklogo} className="logo" alt="" />
            </div>
            
            <div className="tabs">
                <a href="#" className={`tab tab1 ${location.pathname ==="Viratodi" ? "tab1" : ""  } `} > Dashboard</a>
                <a href="#" className="tab "> <span><img src="src/images/back.jpg" alt="" /></span> Test</a>
                <a href="#" className="tab">T20</a>
                <a href="#" className="tab">IPL</a>
                <a href="#" className="tab">Contact</a>
                <a href="/Update" className="tab">Update</a>

            </div>
            <p style={{marginTop:"220px" , fontSize:"18px" ,cursor:"pointer"}}>LogOut > </p>
        </div>
    )

}

export default Side