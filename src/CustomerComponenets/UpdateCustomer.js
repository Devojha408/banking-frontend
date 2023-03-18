import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label,Col,Row } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const UpdateCustomer = () => {
    useEffect(() => {
        document.title = "Update Customers"
    }, []);

    const [customers, setCustomers] = useState({});

    const handleForm = (e) => {
        console.log(customers);
        postDataToServer(customers);
        e.preventDefault();
    };

    //creating function to post data in server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/customers`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Coustomer updated successfully");
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error in updating course");
            }
        )
    };

    return (
        <Fragment>
            <div>
            <h1 className="text-center">Update Customer Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup row>
                    <Label sm={3} for="cust_id"> Customer Id</Label>
                    <Col sm={9}><Input type="text" value={JSON.parse(localStorage.getItem('customer')).cust_id} name="cust_id" id="cust_id" onChange={(e) => { setCustomers({ ...customers, cust_id: e.target.value }) }} /></Col>
                </FormGroup >
                <FormGroup row>
                    <Label sm={3} for="cust_name"> Customer Name</Label>
                    <Col sm={9}><Input type="text" placeholder="Enter Name here" name="cust_name" id="cust_name" onChange={(e) => { setCustomers({ ...customers, cust_name: e.target.value }) }} /></Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} for="cust_email"> Customer Email</Label>
                    <Col sm={9}><Input type="text" placeholder="Enter Email here" name="cust_email" id="cust_email" onChange={(e) => { setCustomers({ ...customers, cust_email: e.target.value }) }} /></Col>
                </FormGroup >
                <FormGroup row>
                    <Label sm={3} for="cust_phone"> Customer Phone</Label>
                    <Col sm={9}><Input type="text" placeholder="Enter Phone here" name="cust_phone" id="cust_phone" onChange={(e) => { setCustomers({ ...customers, cust_phone: e.target.value }) }} /></Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} for="cust_password"> Customer Password</Label>
                    <Col sm={9}><Input type="text" placeholder="Enter Password here" name="cust_password" id="cust_password" onChange={(e) => { setCustomers({ ...customers, cust_password: e.target.value }) }} /></Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} for="cust_username"> Customer Username</Label>
                    <Col sm={9}><Input type="text" placeholder="Enter Username here" name="cust_username" id="cust_username" onChange={(e) => { setCustomers({ ...customers, cust_username: e.target.value }) }} /></Col>
                </FormGroup >
                <FormGroup row>
                    <Label sm={3} for="cust_address"> Customer Address</Label>
                    <Col sm={9}><Input type="textarea" placeholder="Enter Address here" name="cust_address" id="cust_address" style={{ height: 80 }} onChange={(e) => { setCustomers({ ...customers, cust_address: e.target.value }) }} /></Col>
                </FormGroup >
                <FormGroup row>
                    <Label sm={3} for="cust_aadharnumber"> Customer Aadhar Card No</Label>
                    <Col sm={9}><Input type="text" placeholder="Enter Card No here" name="cust_aadharnumber" id="cust_aadharnumber" onChange={(e) => { setCustomers({ ...customers, cust_aadharnumber: e.target.value }) }} /></Col>
                </FormGroup>

                <Container className="text-center">
                    <Row xs="2">
                        <Col  ><Button color="success" type="submit">Update Customer</Button></Col>
                        <Col  ><Button color="warning" type="reset">Clear</Button></Col>
                    </Row>
                </Container>
            </Form>
            </div>
        </Fragment>
    );
}

export default UpdateCustomer;