import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from "./pages/home/home";
import Error from "./pages/error/error";
import House from "./pages/house/house";
import About from './pages/about/about';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/house/:id" element={ <House /> } />
        <Route path="/about/" element={ <About /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
