import './App.css';
import * as React from 'react';
import Navbar from "./modules/Navbar";
import Home from "./pages/Home";
import LNOE from "./pages/LNOE";
import {Route, Routes} from "react-router-dom";
import Event from "./pages/Event";

function App() {

    console.log();

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/LNOE" element={<LNOE/>}/>
                <Route path="/event/:id" element={<Event/>}/>
            </Routes>
            <footer>
                <small style={{textAlign: "center"}}>Copyright © Tarragon V.Z.W.</small>
            </footer>
        </>
    );
}

export default App;
