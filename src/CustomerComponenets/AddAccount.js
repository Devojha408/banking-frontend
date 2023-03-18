import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label,Col,Row } from "reactstrap";
import base_url from "../api/bootapi";

import { toast } from "react-toastify";

const AddAccount = () =>{

    useEffect(() => {
        document.title = "Add Accounts"
    }, []);
    const [accounts, setAccounts] = useState({});

    //form handler

    const handleForm = (e) => {
        console.log(accounts);
        postDataToServer(accounts);
        window.location.href ="/home";
        e.preventDefault();

    };

    //creating function to post data in server
     const postDataToServer = (data) => {
        axios.post(`${base_url}/accounts/${data.cust_id}/save`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Account Created successfully");
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error in Creating Account");
            }
        )
    };

return (
<div className="auth-inner">
        <Fragment>
            <h3 className="text-center">Opening Account for Customer</h3>
            <Form onSubmit={handleForm}>

                <FormGroup >
                    <Label for="cust_id"> Customer Number</Label>
                    <Input type="text" placeholder="Enter Customer Id" name="cust_id" id="cust_id" onChange={(e) => { setAccounts({ ...accounts, cust_id: e.target.value }) }} />
                </FormGroup>
                <FormGroup >
                    <Label for="acc_type"> Account Type</Label>
                    <Input type="text" placeholder="Enter Account type saving or current" name="acc_type" id="acc_type" onChange={(e) => { setAccounts({ ...accounts, acc_type: e.target.value }) }} />
                </FormGroup>
                <FormGroup >
                    <Label for="acc_balance" > Account Opening Balance</Label>
                    <Input type="text" placeholder="Initial Deposit" name="acc_balance" id="acc_balance" onChange={(e) => { setAccounts({ ...accounts, acc_balance: e.target.value }) }} />
                </FormGroup>

                <Container className="text-center">
                    <Row xs="2">
                        <Col><Button color="success" type="submit">Create Account</Button></Col>
                        <Col><Button color="warning" type="reset">Clear</Button></Col>
                    </Row>
                </Container>
            </Form>
        </Fragment>
        </div>

    )
}
export default AddAccount

