import React from "react";
import { toast } from "react-toastify";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Container, Button } from "reactstrap";

const Home = () => {
    return (
        <Container>
            <div class="container hero" >
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                    <br></br>
                        <h3 class="text-center">DEV Bank HeadQuarters, Mars</h3>
                        <br></br>
                        <div class="embed-responsive embed-responsive-16by9 text-center"><iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/x0MjjBfKJB0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="text-center" style={{ background: "#a0deda" }}>
            <br></br>
                <Container>
                    <h1>Lunch Ke Baad Aana</h1>
                    <p>
                        A bank is a financial institution that accepts deposits from the public and creates a demand deposit while simultaneously making loans. Lending activities can be directly performed by the bank or indirectly through capital markets.
                    </p>
                </Container>
                <Container>
                    <Link className="btn btn-warning action-button" role="button" to={"/register"}>Start Using</Link>
                </Container>
                <br></br>
            </div>
            <br></br>
            <div id="about" class="container-fluid">
                <div class="text-center"><br/>
                    <h2>About Company Page</h2><br />
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <br />
                    <Link className="btn btn-default btn-lg" role="button" to={"/register"}>Get in Touch</Link>
                </div>
            </div>
        </Container>
    );
};

export default Home;