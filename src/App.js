import './App.css';
import * as React from 'react';
import Navbar from "./modules/Navbar";
import Home from "./pages/Home";
import LNOE from "./pages/LNOE";
import {Route, Routes} from "react-router-dom";
import Event from "./pages/Event";
import ToS from "./pages/ToS";
import DragonSignup from './modules/DragonSignup';

function App() {

    console.log();

    return (
        <>
            <Navbar />
            <div style={{width: "100%", height: "4rem"}} />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/LNOE" element={<LNOE/>}/>
                <Route path="/event/:id" element={<Event/>}/>
                <Route path="/ToS" element={<ToS/>}/>
                <Route path="/DragonSignup" element={<DragonSignup/>}/>
            </Routes>
            <footer>
                <small style={{textAlign: "center"}}>Copyright © Tarragon V.Z.W.</small>
            </footer>
        </>
    );
}

export default App;
