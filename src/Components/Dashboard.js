import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer} from 'react-toastify';
import AllCustomers from "../CustomerComponenets/AllCustomers";
import AdminLeftMenu from "./AdminLeftMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UpdateCustomer from "../CustomerComponenets/UpdateCustomer";
import UnverifiedList from "../CustomerComponenets/Unverified";
import Withdraw from "../AccountComponents/withdraw";
import Deposit from "../AccountComponents/deposit";
import Transfer from "../AccountComponents/transfer";
import AddAccount from "../CustomerComponenets/AddAccount";
import Transactions from "../AccountComponents/transactions";
import AllAccounts from "../AccountComponents/AllAccounts";
import AdminBalance from "../AccountComponents/admin.balance";
import AdminCustUpdate from "../CustomerComponenets/AdminCustUpdate";

function DashBoard() {
    return (
        <Router>
            <ToastContainer />
            <Container>
                <Row>
                    <Col md={4}>
                        <AdminLeftMenu/>
                    </Col>
                    <Col md={8}>
                        <Switch>
                            <Route path="/view-customer" component={AllCustomers} exact />
                            <Route path="/update-customer" component={UpdateCustomer} />
                            <Route path="/admin-custupdate" component={AdminCustUpdate} />
                            <Route path="/notverified" component={UnverifiedList} />
                            <Route path="/add-account" component={AddAccount}/>
                            <Route path="/admin-balance" component={AdminBalance} />
                            <Route path="/view-accounts" component={AllAccounts} />
                            <Route path="/withdraw" component={Withdraw} />
                            <Route path="/deposit" component={Deposit}/>
                            <Route path="/transfer" component={Transfer} />
                            <Route path="/transactions" component={Transactions} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>

    );
}
export default DashBoard;