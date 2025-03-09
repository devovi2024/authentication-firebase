import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';  
import Blog from './pages/Blog';
import Signin from './components/Signin/SignIn'
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path='/signin' element={<Signin/>} >

          </Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
