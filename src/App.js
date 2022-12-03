import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Projects" element={<Projects/>} />
        </Routes>
    </Router>

  );
}

export default App;
