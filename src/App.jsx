import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Home from "./pages/home"
// import Sponsor from "./pages/sponsor"

// import ScrollToTop from './ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';


const App = () => (
  <Router>
    {/* <ScrollToTop/> */}
    <div>
      <Nav />
      <AnimatedRoutes />
    </div>
  </Router>
);

export default App