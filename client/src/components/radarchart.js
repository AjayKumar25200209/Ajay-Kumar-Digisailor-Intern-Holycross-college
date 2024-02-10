import React from 'react';
import { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const Radarchart = () => {

  const [data, setdata] = useState([]);
  useEffect(() => {
    
    try {
      fetch("/getradar")
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
    <div style={{ width: "100%", height: "100%" }}>
      <p>Virat kohli as a Cricketer</p>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Virat Kohli" dataKey="mark" stroke="" fill="#116731" fillOpacity={0.5} />
           
            <Legend  wrapperStyle={{ marginBottom: "20px" }}  align="center" />
        </RadarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default Radarchart;
