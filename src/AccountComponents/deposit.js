import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Row, Col } from "reactstrap";
import base_url from "../api/bootapi";

const Deposit = () => {
  useEffect(() => {
    document.title = "Deposit Amount";
  }, []);

  const [deposit, setDeposit] = useState({});

  //method to handle form
  const handleForm = (e) => {
    console.log(deposit);
    depositAmount(deposit);
    e.preventDefault();
  };

  //method to put data on server for updating
  const depositAmount = (data) => {
    axios.get(`${base_url}/accounts/credit/${data.acc_number}/${data.amount}`)
      .then(
        (response) => {
          console.log(response);
          console.log("success");
          toast.success("Amount deposited successfully");
          window.location.href ="/dashboard/admin";
        },
        (error) => {
          console.log(error);
          console.log("error: deposit");
          toast.error("Amount not deposited");
        }
      );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Deposit Amount to self account</h1>
      <Form onSubmit={handleForm}>
      <FormGroup>
          <label for="acc_number">Account Number</label>
          <Input
            type="text"
            placeholder="Enter account number"
            name="acc_number"
            id="acc_number"
            onChange={(e) => { setDeposit({ ...deposit, acc_number: e.target.value }) }}/>
        </FormGroup>
        <FormGroup onSubmit={handleForm}>
          <label for="amount">Amount to be deposited</label>
          <Input
            type="text"
            placeholder="Enter amount in rupees"
            name="amount"
            id="amount"
            onChange={(e) => { setDeposit({ ...deposit, amount: e.target.value }) }}
          />
        </FormGroup>

        <Container className="text-center">
                    <Row xs="2">
                        <Col><Button color="success" type="submit" outline>Deposit</Button></Col>
                        <Col><Button color="warning" type="reset"outline>Clear</Button></Col>
                    </Row>
            </Container>
      </Form>
    </Fragment>
  );
};

export default Deposit;