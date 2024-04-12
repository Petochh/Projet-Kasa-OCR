import './App.css';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from "./pages/home/home";
import Error from "./pages/error/error";
import House from "./pages/house/house";
import About from './pages/about/about';

function App() {
  useEffect(() => {
    const renderFooter = () => {
      const footerContainer = document.createElement('footer');
      document.body.appendChild(footerContainer);
      ReactDOM.render(<Footer />, footerContainer);
    };

    renderFooter();

    return () => {
      const footerContainer = document.querySelector('footer');
      ReactDOM.unmountComponentAtNode(footerContainer);
      footerContainer.remove();
    };
  }, []);


  return (
    <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/house/:id" element={ <House /> } />
        <Route path="/about/" element={ <About /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </Router>
  </React.StrictMode>
  );
}

export default App;
