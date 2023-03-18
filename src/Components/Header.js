import React from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/react-fontawesome';

import { Link, Route, Switch } from "react-router-dom";

function Header() {
    return (
        // <Router>
        // <body>
        <div class="header-dark">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div className="container">
                    <Link className="navbar-brand" to={"/home"}>
                        <img
                            alt=""
                            src='/assets/logo.png'
                            width="120"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        Banking Service
                    </Link>
                    <div class="collapse navbar-collapse" id="navcol-1">
                        <ul class="nav navbar-nav">
                            <li class="nav-item" role="presentation"><Link className="nav-link" to={"/home"}>Home</Link></li>
                            <li class="nav-item" role="presentation"><Link className="nav-link" to={"/blank"}>Contact</Link></li>
                            <li class="nav-item" role="presentation"><Link className="nav-link" to={"#"}>About Us</Link></li>
                        </ul>
                    </div>
                    <span class="navbar-text">
                        <Link to={"/login"} className="login">Log In</Link>
                    </span>
                        <Link className="btn btn-light action-button" role="button" to={"/register"}>Sign Up</Link>
                </div>
            </nav>
        </div>
    );
}
export default Header;