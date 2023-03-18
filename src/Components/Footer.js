import './Footer.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Footer extends Component {
    render() {
        return (
        <footer class="page-footer font-small bg-dark">
            <div class="footer-copyright text-center text-light py-3">© 2022 Copyright:
                <Link to={"/"}>DEVBank.com</Link>
            </div>
        </footer>
        );
    }
}