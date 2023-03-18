import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";


const CustomerLeftMenu = () => {
    return (
        <ListGroup>
            {/* <Link tag='a' to="/" action>DashBoard</Link> */}
            <Link className="list-group-item list-group-item-action" tag='a' to="/balance" action>Balance Enquiry</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/transfer" action>Online Transfer</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/transactions" action>Transaction History</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/update-customer" action>Update Details</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/" action>Logout</Link>
        </ListGroup>
    );
}

export default CustomerLeftMenu;