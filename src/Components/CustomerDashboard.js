import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer} from 'react-toastify';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import UpdateCustomer from "../CustomerComponenets/UpdateCustomer";
import Transfer from "../AccountComponents/transfer";
import CustomerLeftMenu from "./CustomerLeftMenu";
import Balance from "../AccountComponents/balance";
import Transactions from "../AccountComponents/transactions";

function CustomerDashBoard() {
    return (
        <Router>
            <ToastContainer />
            <Container>
                <Row>
                    <Col md={4}>
                        <CustomerLeftMenu/>
                    </Col>
                    <Col md={8}>
                        <Switch>
                            <Route path="/update-customer" component={UpdateCustomer} />
                            <Route path="/balance" component={Balance} />
                            <Route path="/transactions" component={Transactions} />
                            <Route path="/transfer" component={Transfer} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>

    );
}
export default CustomerDashBoard;