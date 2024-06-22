import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layoutdashboard from './layoutdashboard/layout';
import Uploaddata from './pages/uploaddata'; 

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Layoutdashboard />} />
          <Route path="/uploaddata" element={<Uploaddata />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
