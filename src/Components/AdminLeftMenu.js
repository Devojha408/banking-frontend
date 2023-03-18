import React from "react";
import {Link} from "react-router-dom";
import { Container, ListGroup} from "reactstrap";

const AdminLeftMenu=()=>{
    return(
        <Container>
        <ListGroup>
            {/* <Link tag='a' to="/" action>DashBoard</Link> */}
            <Link className="list-group-item list-group-item-action" tag='a' to="/view-customer" action>All Customer</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/view-accounts" action>Accounts</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/notverified" action>Unverified Customer</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/deposit" action>Deposit</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/withdraw" action>Withdraw</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/transfer" action>Transfer</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/admin-balance" action>Balance Enquiry</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/transactions" action>Transaction History</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/" action>Logout</Link>
        </ListGroup>
        </Container>
    );
}

export default AdminLeftMenu;