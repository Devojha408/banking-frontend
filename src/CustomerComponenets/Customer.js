import React from "react";
import {
    Card, CardBody, CardTitle, CardSubtitle,
    CardText, CardFooter, Button, Container, Row, Col
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Customer = ({ customer, update }) => {

    const deleteCustomer = (cust_id) => {
        axios.delete(`${base_url}/customers/${cust_id}`).then(
            (response) => {
                toast.success("Coustomer Deleted");
                update(cust_id);
            },
            (error) => {
                toast.error("Coustomer Not Deleted");
            }
        )
    };

    return (
        <Card>
            <CardBody className="text-center">
                <CardTitle>{customer.cust_id}</CardTitle>
                <CardSubtitle className="font-weight-bold"><h3>{customer.cust_name}</h3></CardSubtitle>
                <CardText>Details about {customer.cust_name}:</CardText>
                <Row xs="4">
                    <Col className="bg-light border"><h6>Email:</h6></Col>
                    <Col className="bg-light border">{customer.cust_email}</Col>
                    <Col className="bg-light border"><h6>Phone:</h6></Col>
                    <Col className="bg-light border">{customer.cust_phone}</Col>
                    <Col className="bg-light border"><h6>Password:</h6></Col>
                    <Col className="bg-light border">{customer.cust_password}</Col>
                    <Col className="bg-light border"><h6>Username:</h6></Col>
                    <Col className="bg-light border">{customer.cust_username}</Col>
                    <Col className="bg-light border"><h6>Address:</h6></Col>
                    <Col className="bg-light border">{customer.cust_address}</Col>
                    <Col className="bg-light border"><h6>Aadhar Card No:</h6></Col>
                    <Col className="bg-light border">{customer.cust_aadharnumber}</Col>
                </Row>

                <CardFooter>
                    <Container className="text-center">
                        <Row xs="2">
                            <Col><Button color="warning"><Link to="/admin-custupdate">Update</Link></Button></Col>
                            <Col><Button color="danger" onClick={() => { deleteCustomer(customer.cust_id); }} >Delete</Button></Col>
                        </Row>
                    </Container>
                </CardFooter>
            </CardBody>
        </Card>
    );

}

export default Customer;