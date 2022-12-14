import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/about/About';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter Basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/Akame-Wiki" element={<Home />} />
        <Route path="/Akame-Wiki/search" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

