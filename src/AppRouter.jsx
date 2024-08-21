import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';

const AppRouter = () => {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path ='/nav' element = {<Navigation/>}/>
                {/* <Route path="/about" element={<About />} /> */}
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    </div>
  );
};

export default AppRouter;