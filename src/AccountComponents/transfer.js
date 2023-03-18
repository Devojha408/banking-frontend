import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label,Col,Row } from "reactstrap";
import base_url from "../api/bootapi";

import { toast } from "react-toastify";

const Transfer = () =>{

    useEffect(() => {
        document.title = "Transfer"
    }, []);
    const [transfer, setTransfer] = useState({});

    //form handler

    const handleForm = (e) => {
        console.log(transfer);
        postDataToServer(transfer);
        alert("Transfered SuccessFully");
        window.location.href ="/dashboard/customer";
        e.preventDefault();

    };

    //creating function to post data in server
     const postDataToServer = (data) => {
        axios.get(`${base_url}/accounts/transfer/${data.acc_no1}/${data.acc_no2}/${data.amount}`).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Amount Tranfered successfully");
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
                    <h3 className="text-center">Transfer Amount</h3>
                    <Form onSubmit={handleForm}>

                        <FormGroup >
                            <Label for="acc_no1"> Enter Senders Account Number</Label>
                            <Input type="number" placeholder="Enter Senders Account Number" name="acc_no1" id="acc_no1" onChange={(e) => { setTransfer({ ...transfer, acc_no1: e.target.value }) }} />
                        </FormGroup>
        
                        <FormGroup >
                            <Label for="acc_no2"> Enter Beneficiary Account Number</Label>
                            <Input type="number" placeholder="Enter Beneficiary Account Number" name="acc_no2" id="acc_no2" onChange={(e) => { setTransfer({ ...transfer, acc_no2: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup >
                            <Label for="amount">Enter Amount</Label>
                            <Input type="number" placeholder="Enter Amount to Transfer" name="amount" id="amount" onChange={(e) => { setTransfer({ ...transfer, amount: e.target.value }) }} />
                        </FormGroup>
                        <Container className="text-center">
                            <Row xs="2">
                                <Col><Button color="success" type="submit">Transfer</Button></Col>
                                <Col><Button color="warning" type="reset">Clear</Button></Col>
                            </Row>
                        </Container>
                    </Form>
                </Fragment>
                </div>
        
            )
        }
export default Transfer