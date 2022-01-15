import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';

import Home from './Components/Home';
import Asia from './Components/Asia';
import Africa from "./Components/Africa";
import Europe from "./Components/Europe";
import Australia from "./Components/Australia";
import Antarctica from "./Components/Antarctica";
import NorthAmerica from "./Components/North America";
import SouthAmerica from "./Components/South America";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Landing />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/asia" element={<Asia />} />  
          <Route exact path="/europe" element={<Europe />} />
          <Route exact path="/southAmerica" element={<SouthAmerica />} />
          <Route exact path="/NorthAmerica" element={<NorthAmerica />} />
          <Route exact path="/australia" element={<Australia />} />
          <Route exact path="/africa" element={<Africa />} />
          <Route exact path="/antarctica" element={<Antarctica />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
