import React from 'react';
import '../App.css'
import { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , LineChart ,Line } from 'recharts';





const Bar1 = () => {

  const [data, setdata] = useState(null);
  useEffect(() => {
    
    try {
      fetch("/getbar")
      .then(res=>{
        return res.json()
      })
      .then(msg=>{
        setdata(msg.data)
      })
      
    } catch (error) {
      alert(error)
    }
    
  }, []);

  return (
    
        
        <div style={{ width:"100%" , height:"100%" }} >
            <p>Virat Kohli ODI Runs At Each Year</p>
             <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        
                        data={data}  
                        margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Runs" fill="#116731" shape={<Rectangle fill="#116731" stroke="#116731" />} />
                        
                    </BarChart>
            </ResponsiveContainer>
            

        </div>
   
  );
};

export default Bar1;
