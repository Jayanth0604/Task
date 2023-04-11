import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
} from 'react-router-dom'



function Navbar() {
    return (<div className="Nav-bar">
     <ul className="Nav-ul">
        <li className="li-spl">Welcome User !!</li>
        <li className="li-spl1">Sign up</li>

        <li className="li-sp2">Not have an Account ? Create</li>
     </ul>
    </div>

    )
} export default Navbar