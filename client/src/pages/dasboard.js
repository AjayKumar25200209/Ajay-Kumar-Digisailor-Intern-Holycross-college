import React from 'react';
import '../App.css'

import Navigator from "../components/navigator";
import { BarChart, PieChart, Pie, Sector, Cell, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';

const Dashboard = () => {
  const data1 = [
    { name: 'Absent', value: 5 },
    { name: 'Present', value: 95 }
  ];

  const data2 = [
    { name: 'Absent', value: 10 },
    { name: 'Present', value: 90 }
  ];

  const COLORS = ['black','green'];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const data = [
    {
      name: 'Mon',
      Ajay: 2,
      Jone: 5,
      amt: 2400,
    },
    {
      name: 'Tues',
      Ajay: 5,
      Jone: 6,
      amt: 2210,
    },
    {
      name: 'Wed',
      Ajay: 4,
      Jone: 2,
      amt: 2290,
    },
    {
      name: 'Thurs',
      Ajay: 3,
      Jone: 3,
      amt: 2000,
    },
    {
      name: 'Friday',
      Ajay: 5,
      Jone: 2,
      amt: 2181,
    },
    {
      name: 'Sat',
      Ajay: 6,
      Jone: 5,
      amt: 2500,
    },
    {
      name: 'Sun',
      Ajay: 8,
      Jone: 5,
      amt: 2100,
    },
  ];

  return (


    <div>
          <div>
             <Navigator />
          </div>

          <div  className="pie" >
                <h3>Attendance % Of Ajay</h3>

                <PieChart className="pie1"   width={200} height={200}>
                  <Pie
                    data={data1}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
          </div>

          <div  className="pie2" >
                <h3>Attendance % Of Jone</h3>

                <PieChart className="pie3"   width={200} height={200}>
                  <Pie
                    data={data2}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend
                    align="center"
                    layout="horizondal"
                    horizondalAlign="middle"
                    wrapperStyle={{marginLeft:'10px'}}    


                      
                  />
                </PieChart>
          </div>

          <div className="container">
          <h3>Daily Working Hours</h3>
          <ResponsiveContainer width="100%" height="100%"  >
                <BarChart
                  
                  data={data}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Ajay" fill="green" shape={<Rectangle fill="Green" stroke="green" />} />
                  <Bar dataKey="Jone" fill="black" shape={<Rectangle fill="Black" stroke="black" />} />
                </BarChart>
          </ResponsiveContainer >


          </div>
          
    </div>
    
    
  );
}

export default Dashboard;
