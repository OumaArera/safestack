import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import SoftwareEng from './components/SoftwareEng';
import CyberSec from './components/CyberSec';
import DataScience from './components/DataScience';
import Design from './components/Design';
import ITConsulting from './components/ITConsulting';
import ProjectShowcase from './components/ProjectShowcase';
import Insight from './components/Insights';
import Careers from './components/Careers';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services/software" element={<SoftwareEng />} />
            <Route path="/services/cybersecurity" element={<CyberSec />} />
            <Route path="/services/data-science" element={<DataScience />} />
            <Route path="/services/ui-ux-design" element={<Design />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/case-studies" element={<ProjectShowcase />} />
            <Route path="/insights" element={<Insight />} />
            <Route path="/careers" element={<Careers />} />
            {/* Add more routes here as needed */}
            {/* <Route path="/services/software" element={<Software />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
