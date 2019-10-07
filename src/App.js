import React from 'react';
import Home from './components/layout/Home';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import User from "./components/system/user/User";
import Role from "./components/system/rbac/Role";
import RoleInsert from "./components/system/rbac/RoleInsert";

function App() {
    return (
            <div>
                <Home/>
            </div>
    )
        ;
}

export default App;

// import logo from './assets/image/logo.svg';
// import './assets/App.css';
// import './assets/index.css';
// import Main from './components/layout/Main';
