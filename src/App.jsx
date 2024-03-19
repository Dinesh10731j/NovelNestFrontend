import React from 'react';
import Header from './components/Header';
import "./App.css";
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Addbook from './components/Addbook';
import Home from './components/Home';
;

const App = () => {
  return (
    <Router>
    
    <Routes>
      <Route path='/addbook' Component={Addbook}/>
      <Route path='/' Component={Home}/>
      
    </Routes>
       




    </Router>
  
   
  )
}

export default App