import React from 'react';
import '../App.css'
import { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , LineChart ,Line } from 'recharts';




const Line1=()=>{

  const [data1, setdata1] = useState([]);
  useEffect(() => {
    
    try {
      fetch("/getline")
      .then(res=>{
        return res.json()
      })
      .then(msg=>{
        setdata1(msg.data)
      })
      
    } catch (error) {
      alert(error)
    }
    
  }, []);

    
    return(
        <div style={{ width:"100%" , height:"100%"  }} >
            <p>Virat Kohli Centuries And ICC Rankings At Each Year</p>
          <ResponsiveContainer width="100%" height="100%">
              <LineChart
                  data={data1}
                  margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                  }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Century" stroke="#116731" activeDot={{ r: 5 }} />
                  <Line type="monotone" dataKey="ICC Ranking" stroke="#060f68" activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
       </div>
    )
}

export default Line1