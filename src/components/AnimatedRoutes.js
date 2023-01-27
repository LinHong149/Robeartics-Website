import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "../pages/home"
import Sponsor from "../pages/sponsor"
import { AnimatePresence } from "framer-motion/dist/framer-motion"

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="Robeartics-Website/" element={<Home />} />
            <Route path="Robeartics-Website/sponsor" element={<Sponsor />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes