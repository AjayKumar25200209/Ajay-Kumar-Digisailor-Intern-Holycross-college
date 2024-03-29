import React from 'react';
import   '../App.css'
import { useEffect, useState } from 'react';
import  Side  from '../components/sidebar'
import  Navigator  from '../components/navigator'
import  Footer  from '../components/footer'
import Vk2 from "../images/vk2.png";

const Update=()=>{

    const [chart, setchart] = useState("");
    const [crud, setcrud] = useState("");
    const [year, setyear] = useState("");
    const [runs, setruns] = useState("");
    const [rank, setrank] = useState("");
    const [century, setcentury] = useState("");
    const [subject, setsubject] = useState("");
    const [mark, setmark] = useState("");
    const [name, setname] = useState("");
    const [value, setvalue] = useState("");
    const [Alert, setAlert] = useState(false);
    const [Message, setMessage] = useState(false);
    const [msg, setmsg] = useState("");


    // bar chart submission

    const submitbar=()=>{
        if (crud=="Delete"){
            if(chart=="" || year==""){
            
                setmsg("Please Enter the Year")

            }
            else{
                try {
                    
                    fetch("/deletebar",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({"year":year ,"runs":runs,})
                    })
                    .then((res)=>{
                        return res.json()
                    })
                    .then((data)=>{
                        setMessage(true)
                        console.log(data.msg);
                        setmsg(data.msg)
                        setTimeout(() => {
                            setMessage(false)
                        }, 2500);
                        
    
                    })
                    
                } catch (error) {
                    alert(error)
                    
                }
            }
        }
        else if(crud=="" || chart=="" || runs=="" || year==""){
            setAlert(true)
            setmsg("Please Enter All The Field")
            setTimeout(() => {
                setAlert(false)
                
            }, 2500);

        }
        else if(crud=='Add'){
            try {
                
                fetch("/addbar",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({"year":year ,"runs":runs,})
                })
                .then((res)=>{
                    return res.json()
                })
                .then((data)=>{
                    setMessage(true)
                    console.log(data.msg);
                    setmsg(data.msg)
                    setTimeout(() => {
                        setMessage(false)
                    }, 2500);
                    

                })
                
            } catch (error) {
                alert(error)
                
            }
        }

       

        else if(crud=='Update'){
            try {
                
                fetch("/updatebar",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({"year":year ,"runs":runs,})
                })
                .then((res)=>{
                    return res.json()
                })
                .then((data)=>{
                    setMessage(true)
                    console.log(data.msg);
                    setmsg(data.msg)
                    setTimeout(() => {
                        setMessage(false)
                    }, 2500);
                    

                })
                
            } catch (error) {
                alert(error)
                
            }
        }
        
    }
                            // line chart

    const submitline=()=>{
        if (crud=="Delete"){
            if(chart=="" || year==""){
            
                setmsg("Please Enter the Year")

            }
            else{
                try {
                    
                    fetch("/deleteline",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({"year":year })
                    })
                    .then((res)=>{
                        return res.json()
                    })
                    .then((data)=>{
                        setMessage(true)
                        console.log(data.msg);
                        setmsg(data.msg)
                        setTimeout(() => {
                            setMessage(false)
                        }, 2500);
                        
    
                    })
                    
                } catch (error) {
                    alert(error)
                    
                }
            }
        }
        else if(crud=="" || chart=="" || year=="" || rank=="" || century==""){
            setAlert(true)
            setmsg("Please Enter All The Field")
            setTimeout(() => {
                setAlert(false)
                
            }, 2500);

        }
        else if(crud=='Add'){
            try {
                
                fetch("/addline",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({"year":year ,"rank":rank, "century":century})
                })
                .then((res)=>{
                    return res.json()
                })
                .then((data)=>{
                    setMessage(true)
                    console.log(data.msg);
                    setmsg(data.msg)
                    setTimeout(() => {
                        setMessage(false)
                    }, 2500);
                    

                })
                
            } catch (error) {
                alert(error)
                
            }
        }
        else if(crud=='Update'){
            try {
                
                fetch("/updateline",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({"year":year ,"rank":rank, "century":century})
                })
                .then((res)=>{
                    return res.json()
                })
                .then((data)=>{
                    setMessage(true)
                    console.log(data.msg);
                    setmsg(data.msg)
                    setTimeout(() => {
                        setMessage(false)
                    }, 2500);
                    

                })
                
            } catch (error) {
                alert(error)
                
            }
        }
    }

    const submitradar=()=>{
        if (crud=="Delete"){
            if(chart=="" || year==""){
            
                setmsg("Please Enter the Year")

            }
            else{
                try {
                    
                    fetch("/deleteradar",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({"subject":subject })
                    })
                    .then((res)=>{
                        return res.json()
                    })
                    .then((data)=>{
                        setMessage(true)
                        console.log(data.msg);
                        setmsg(data.msg)
                        setTimeout(() => {
                            setMessage(false)
                        }, 2500);
                        
    
                    })
                    
                } catch (error) {
                    alert(error)
                    
                }
            }

        }
        else if(crud=="" || chart=="" || subject=="" ||  mark==""){
            setAlert(true)
            setmsg("Please Enter All The Field")
            setTimeout(() => {
                setAlert(false)
                
            }, 2500);

        }
    }

    const submitpie=()=>{
        if (crud=="Delete"){
            if(chart=="" || year==""){
            
                setmsg("Please Enter the Year")

            }
        }
        else if(crud=="" || chart=="" || name=="" || value==""){
            setAlert(true)
            setmsg("Please Enter All The Field")
            setTimeout(() => {
                setAlert(false)
                
            }, 2500);

        }
    }








    return(
        <div>

            <div style={{ zindex:"-10" }}>
                <Navigator/>
            </div>
            <div style={{height:"100%"}}>
                <Side/>
            </div>

            <div className="update">
            <p  style={{"padding-bottom":"10px"}}>Edit the Chart That you Want By Giving Data With Crud Operations</p>
                <select name="" id="" onChange={(e)=>{setchart(e.target.value)}}  >
                    <option value="">Select Chart</option>
                    <option value="Bar chart">Bar chart</option>
                    <option value="Line chart">Line chart</option>
                    <option value="Radar chart">Radar chart</option>
                    <option value="Pie chart">Pie chart</option>
                </select>
                <select name="" id="" onChange={(e)=>{setcrud(e.target.value)}}  >
                    <option value="">Select Operation</option>
                    <option value="Add">Add</option>
                    <option value="Update">Update</option>
                    <option value="Delete">Delete</option>
                </select>

                            {/* bar chart */}
                {chart=="Bar chart"? 
                    <div className="charts" >
                        <input type="number" name="" id="" placeholder="Enter the Year" onChange={(e)=>{setyear(e.target.value)}} />
                        {crud=="Delete"? "": <input type="number" name="" id="" placeholder="Enter the Runs" onChange={(e)=>{setruns(e.target.value)}} /> }
                        {crud==""? <button onClick={submitbar} >Submit</button> :<button  onClick={submitbar} >{crud}</button >}
                    </div> : ""
                }
                             {/* line chart */}
                {chart=="Line chart"? 
                    <div className="charts" >
                        <input type="number" name="" id="" placeholder="Enter the Year" onChange={(e)=>{setyear(e.target.value)}} />
                        {crud=="Delete"? "": <input type="number" name="" id="" placeholder="Enter ICC Ranking" onChange={(e)=>{setrank(e.target.value)}} />  }
                        {crud=="Delete"? "": <input type="number" name="" id="" placeholder="Enter No of Century" onChange={(e)=>{setcentury(e.target.value)}} />  }
                        {crud==""? <button onClick={submitline} >Submit</button> : <button  onClick={submitline}  >{crud}</button>}
                    </div> : ""
                }

                                {/* radar chart */}
                {chart=="Radar chart"? 
                    <div className="charts" >
                        <input type="number" name="" id="" placeholder="Enter the Subject"  onChange={(e)=>{setsubject(e.target.value)}} />
                        {crud=="Delete"? "": <input type="number" name="" id="" placeholder="Enter the Mark" onChange={(e)=>{setmark(e.target.value)}} /> }
                        {crud==""? <button onClick={submitradar} >Submit</button> :<button onClick={submitradar} >{crud}</button>}
                    </div> : ""
                }

                                {/* Pie chart */}
                {chart=="Pie chart"? 
                        <div className="charts" >
                        <input type="number" name="" id="" placeholder="Enter the Name" onChange={(e)=>{setname(e.target.value)}}  />
                        {crud=="Delete"? "": <input type="number" name="" id="" placeholder="Enter the Runs" onChange={(e)=>{setvalue(e.target.value)}}  /> }
                        {crud==""? <button onClick={submitpie} >Submit</button> :<button  onClick={submitpie} >{crud}</button>}
                    </div> : ""
                }

               
                        <p className="alert">{Alert ?  msg: ""} </p> 
                        <p className="msg"> { Message ? msg : ""}</p>

                

            </div>
            <img src={Vk2} alt="" className="vk2" />

            <Footer/>
        </div>  
    )
        
}

export default Update;