import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import PageTest from './pages/PageTest';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/PageTest" element={<PageTest/>}/>
        </Routes>
    </Router>

  );
}

export default App;
