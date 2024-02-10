import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter , Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/dasboard'
import Viratodi from './pages/viratodi'

function App() {
  const [Data, setData] = useState({});

  useEffect(() => {

    fetch('/api/home')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        
        setData(data); 
        console.log(data.name);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 


  console.log(Data);



  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Viratodi  /> } />
            <Route path="/Viratodi" element={<Dashboard  /> } />


        </Routes>
      
      
      </BrowserRouter>
       
      
      
    </div>
  );
}

export default App;
