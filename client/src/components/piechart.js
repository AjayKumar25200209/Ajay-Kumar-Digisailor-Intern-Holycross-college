import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import '../App.css'

const data = [
  { name: 'Virat Kohli', value: 273 },
  { name: 'Ms Dhoni', value: 89 },
  { name: 'Rohit Sharma', value: 88 },
  { name: 'Yuvraj Singh', value: 52 },
];

const COLORS = ['#116731', '#5c0762', '#040546', 'black'];

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

const Piechart = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
        <p style={{padding:"0px 20px"}}>Runs Scored By Virat And Others in 2016 World Cup </p>
      <ResponsiveContainer  width="100%" height="100%" >
        <PieChart  className="pie3"  >
        

          <Pie
            
            data={data}
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
          <Legend  wrapperStyle={{ marginBottom: "10px" }}   align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Piechart;
