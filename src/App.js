import React from 'react';
import './App.css';
import './categories.styles.scss'
import Home from './Routes/Home/home';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Routes/Navigation/Navigation';
import { Authentication } from './Routes/Authentication/Authentication';

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigation />}> 
      <Route index element={<Home />} />
      <Route path='auth' element={<Authentication />} />
    </Route>
  </Routes>
  );
}
export default App;
