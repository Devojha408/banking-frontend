import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input,Row,Col } from "reactstrap";
import base_url from "../api/bootapi";

const Withdraw = () => {
  useEffect(() => {
    document.title = "Withdraw Amount";
  }, []);

  const [withdraw, setWithdraw] = useState({});

  //method to handle form
  const handleForm = (e) => {
    console.log(withdraw);
    withdrawAmount(withdraw);
    e.preventDefault();
  };

  //method to put data on server for updating
  const withdrawAmount = (data) => {
    axios.get(`${base_url}/accounts/debit/${data.acc_number}/${data.amount}`)
      .then(
        (response) => {
          console.log(response);
          console.log("success");
          toast.success("Amount withdrawn successfully");
          window.location.href ="/dashboard/admin";
        },
        (error) => {
          console.log(error);
          console.log("error: withdraw");
          toast.error("Error: Amount not withdrawn");
        }
      );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Withdraw Amount from self account</h1>
      <Form onSubmit={handleForm}>
      <FormGroup>
          <label for="acc_number">Account Number</label>
          <Input
            type="text"
            placeholder="Enter account number"
            name="acc_number"
            id="acc_number"
            onChange={(e) => { setWithdraw({ ...withdraw, acc_number: e.target.value }) }} />
        </FormGroup>
        <FormGroup>
          <label for="amount">Amount to be withdrawn</label>
          <Input
            type="text"
            placeholder="Enter amount in rupees"
            name="amount"
            id="amount"
            onChange={(e) => { setWithdraw({ ...withdraw, amount: e.target.value }) }} />
        </FormGroup>

        <Container className="text-center">
                    <Row xs="2">
                        <Col><Button color="success" type="submit" outline>Withdraw</Button></Col>
                        <Col><Button color="warning" type="reset"outline>Clear</Button></Col>
                    </Row>
            </Container>
      </Form>
    </Fragment>
  );
};

export default Withdraw;