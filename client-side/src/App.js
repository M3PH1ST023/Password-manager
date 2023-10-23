import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import View from "./components/View";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Router>
                <Routes>
                    <Route path="/home" Component={Home} />
                    <Route path="/add" Component={Add} />
                    <Route path="/edit" Component={Edit} />
                    <Route path="/show" Component={View} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
