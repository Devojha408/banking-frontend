import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label,Col,Row } from "reactstrap";
import base_url from "../api/bootapi";

import { toast } from "react-toastify";

const AddCustomer = () => {

    useEffect(() => {
        document.title = "Add Customers"
    }, []);

    const [customers, setCustomers] = useState({});

    //form handler

    const handleForm = (e) => {
        console.log(customers);
        postDataToServer(customers);
        window.location.href ="/home";
        e.preventDefault();

    };

    //creating function to post data in server
     const postDataToServer = (data) => {
        axios.post(`${base_url}/customers/save`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error in adding course");
            }
        )
    };

    return (
        <div className="auth-inner">
        <Fragment>
            <h3 className="text-center">Register</h3>
            <Form onSubmit={handleForm}>

                <FormGroup >
                    <Label for="cust_name"> Customer Name</Label>
                    <Input type="text" placeholder="Enter Name here" name="cust_name" id="cust_name" onChange={(e) => { setCustomers({ ...customers, cust_name: e.target.value }) }} />
                </FormGroup>
                <FormGroup >
                    <Label for="cust_email" > Customer Email</Label>
                    <Input type="text" placeholder="Enter Email here" name="cust_email" id="cust_email" onChange={(e) => { setCustomers({ ...customers, cust_email: e.target.value }) }} />
                </FormGroup>
                <FormGroup >
                    <Label for="cust_phone" > Customer Phone</Label>
                    <Input type="text" placeholder="Enter Phone here" name="cust_phone" id="cust_phone" onChange={(e) => { setCustomers({ ...customers, cust_phone: e.target.value }) }} />
                </FormGroup>
                <FormGroup >
                    <Label for="cust_address"> Customer Address</Label>
                    <Input type="textarea" placeholder="Enter Address here" name="cust_address" id="cust_address" style={{ height: 80 }} onChange={(e) => { setCustomers({ ...customers, cust_address: e.target.value }) }} />
                </FormGroup>
                <FormGroup>
                    <Label for="cust_aadharnumber" > Customer Aadhar Card No</Label>
                    <Input type="text" placeholder="Enter Card No here" name="cust_aadharnumber" id="cust_aadharnumber" onChange={(e) => { setCustomers({ ...customers, ccust_aadharnumber: e.target.value }) }} />
                </FormGroup>
                <FormGroup >
                    <Label for="cust_username" > Customer Username</Label>
                    <Input type="text" placeholder="Enter Username here" name="cust_username" id="cust_username" onChange={(e) => { setCustomers({ ...customers, cust_username: e.target.value }) }} />
                </FormGroup>
                <FormGroup>
                    <Label for="cust_password" > Customer Password</Label>
                    <Input type="password" placeholder="Enter Password here" name="cust_password" id="cust_password" onChange={(e) => { setCustomers({ ...customers, cust_password: e.target.value }) }} />
                </FormGroup>

                <Container className="text-center">
                    <Row xs="2">
                        <Col><Button color="success" type="submit">Add Customer</Button></Col>
                        <Col><Button color="warning" type="reset">Clear</Button></Col>
                    </Row>
                </Container>
            </Form>
        </Fragment>
        </div>

    );
}

export default AddCustomer;