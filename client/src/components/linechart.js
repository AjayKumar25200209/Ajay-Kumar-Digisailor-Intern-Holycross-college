import React from 'react';
import '../App.css'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , LineChart ,Line } from 'recharts';




const Line1=()=>{

    const data1 = [
        {
          name: '2015',
          "ICC Ranking": 2,
          Century: 4,
          amt: 2400,
        },
        {
          name: '2016',
         "ICC Ranking": 2,
          Century: 7,
          amt: 2210,
        },
        {
          name: '2017',
          "ICC Ranking": 1,
          Century: 11,
          amt: 2290,
        },
        {
          name: '2018',
          "ICC Ranking": 1,
          Century: 11,
          amt: 2000,
        },
        {
          name: '2019',
          "ICC Ranking": 1,
          Century: 7,
          amt: 2181,
        },
        {
          name: '2020',
          "ICC Ranking": 1,
          Century: 0,
          amt: 2500,
        },
        {
          name: '2021',
          "ICC Ranking": 2,
          Century: 0,
          amt: 2100,
        },
        {
            name: '2022',
            "ICC Ranking": 7,
            Century: 2,
            amt: 2181,
          },
          {
            name: '2023',
            "ICC Ranking": 3,
            Century: 8,
            amt: 2500,
          },
         
      ];
    
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
                  <XAxis dataKey="name" />
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