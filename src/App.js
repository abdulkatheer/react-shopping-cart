import React from "react";
import 'App.css';
import pciDssLogo from 'static/pci-dss-compliant-logo-vector.svg';
import Nav from "./Nav";

const App = () => (
    <div>
        <Nav />
        <h1 className="wow">Hello</h1>
        <img src={pciDssLogo} />
    </div>
);

export default App;