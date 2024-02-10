import React from 'react';
import   '../App.css'

import  Bar1  from '../components/barchart'
import  Line1  from '../components/linechart'
import  Side  from '../components/sidebar'
import  Navigator  from '../components/navigator'
import  Footer  from '../components/footer'
import  Piechart  from '../components/piechart'
import  Radarchart  from '../components/radarchart'
import Virat from "../images/virat.mp4"







const Viratodi = () => {
  return (
    
    <div >

        <div className="pie">
          <Piechart />
        </div>
        <div className="radar">
          <Radarchart/>
        </div>
        <div>
          <video src={Virat} controls ></video>
        </div>

        <div style={{ zindex:"-10" }}>
        <Navigator/>
        </div>
        <div style={{height:"100%"}}>
          <Side/>
        </div>
        <div className="odi">
          <Bar1   />
        </div>
        <div className="line">
          <Line1 />
        </div>

        
          <Footer/>
        
      
             
    </div>
  );
};

export default Viratodi;
