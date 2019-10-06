import React from 'react';
// import logo from './assets/image/logo.svg';
// import './assets/App.css';
// import './assets/index.css';
// import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import Main from "./components/layout/Main";
import "antd/dist/antd.css";

import {
    Table,
    Card,
    Button,
    Modal,
    Form,
    Input,
}
    from 'antd';


function App() {
    return (
        <div>
            <Button>Button </Button>
            <Main/>
        </div>
    );
}

export default App;
