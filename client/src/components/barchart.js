import React from 'react';
import '../App.css'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , LineChart ,Line } from 'recharts';

const data = [
  {
    name: '2015',
    
    "ODI Runs": 623,
    amt: 2400,
  },
  {
    name: '2016',
    
    "ODI Runs": 739,
    amt: 2210,
  },
  {
    name: '2017',
    
    "ODI Runs": 1460,
    amt: 2290,
  },
  {
    name: '2018',
    
    "ODI Runs": 1202,
    amt: 2000,
  },
  {
    name: '2019',
   
   "ODI Runs": 1377,
    amt: 2181,
  },
  {
    name: '2020',
   
    "ODI Runs": 431,
    amt: 2500,
  },
  {
    name: '2021',
    
    "ODI Runs": 129,
    amt: 2000,
  },
  {
    name: '2022',
   
   "ODI Runs": 	302,
    amt: 2181,
  },
  {
    name: '2023',
   
    "ODI Runs": 1377,
    amt: 2500,
  },
];



const Bar1 = () => {
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
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="ODI Runs" fill="#116731" shape={<Rectangle fill="#116731" stroke="#116731" />} />
                        
                    </BarChart>
            </ResponsiveContainer>

        </div>
   
  );
};

export default Bar1;
