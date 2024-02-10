import React from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Batting',
    A: 100,

    fullMark: 100,
  },
  {
    subject: 'Fielding',
    A: 98,

    fullMark: 100,
  },
  {
    subject: 'Bowling',
    A: 86,

    fullMark: 100,
  },
  {
    subject: 'Fitness',
    A: 99,

    fullMark: 100,
  },
  {
    subject: 'Captain',
    A: 85,

    fullMark: 100,
  },
  
];

const Radarchart = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <p>Virat kohli as a Cricketer</p>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Virat Kohli" dataKey="A" stroke="" fill="#116731" fillOpacity={0.5} />
           
            <Legend  wrapperStyle={{ marginBottom: "20px" }}  align="center" />
        </RadarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default Radarchart;
