import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RSVPafters from './RSVPafters';
import HomePage from './Pages/HomePage';
import Admin from './Pages/Admin';
import Afters from './Pages/Afters';
import NotComing from './Pages/NotComing';
import Wedding from './Pages/Wedding';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RSVPafters />} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Afters" element={<Afters />} />
        <Route path="/NotComing" element={<NotComing />} />
        <Route path="/Wedding" element={<Wedding />} />
      </Routes>
    </Router>
  );
}

export default App;