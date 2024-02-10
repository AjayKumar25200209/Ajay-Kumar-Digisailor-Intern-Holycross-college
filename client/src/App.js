import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter , Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/dasboard'
import Viratodi from './pages/viratodi'
import Update from './pages/update'

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Viratodi  /> } />
            <Route path="/Viratodi" element={<Dashboard  /> } />
            <Route path="/Update" element={<Update  /> } />


        </Routes>
      
      
      </BrowserRouter>
       
      
      
    </div>
  );
}

export default App;
