import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Sponsor from "./pages/sponsor"

import ScrollToTop from './ScrollToTop';


const App = () => (
  <Router>
    <ScrollToTop/>
    <div>
      <Nav />
      <Routes>
        <Route path="Robeartics-Website/" element={<Home />} />
        <Route path="Robeartics-Website/sponsor" element={<Sponsor />} />
      </Routes>
    </div>
  </Router>
);

export default App