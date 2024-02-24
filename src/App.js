import './App.css';
import * as React from 'react';
import Navbar from "./modules/Navbar";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";

function App() {

  console.log();

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;
