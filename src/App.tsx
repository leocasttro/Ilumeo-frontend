import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Access from './pages/Access';
import { TimeRegister } from './pages/TimeRegister';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Access />} />
        <Route path="/registro" element={<TimeRegister />} />
      </Routes>
    </Router>
  );
};

export default App;
