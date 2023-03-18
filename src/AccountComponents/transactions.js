import React, { useState, useEffect } from "react";
import { Table,Card,Button,FormGroup, Input, Label, Container, Form,Col,Row} from "reactstrap";

import { Link } from "react-router-dom";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Transactions = () => {

    useEffect(() => {
        document.title = "All Transactions";
    }, []);

    const [acc_number, setAccount] = useState(0);

    const handleForm = (e) => {
        console.log(acc_number);
        getAllTransactionsFromServer(acc_number);
        e.preventDefault();

    };

    const getAllTransactionsFromServer = (data) => {
        axios.get(`${base_url}/accounts/${data}/transactions`).then(
            (response) => {
                //success
                //console.log(response);
                console.log(response.data);
                toast.success("Transactions loaded success");
                setTransactions(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }

    const [transactions, setTransactions] = useState([]);
    

    // const updateCustomers = (cust_id) => {
    //     setCustomers(customers.filter((c) => c.verified !== null));
    // }

    return(
        <div>
            <h1>Account Transaction History</h1>
            <Form onSubmit={handleForm}>
            <FormGroup >
                <Label for="acc_number"> Account Number</Label>
                <Input type="text" placeholder="Enter Your Account No. here" name="acc_number" id="acc_number" onChange={(e) => { setAccount(e.target.value ) }} />
            </FormGroup>
            <Container className="text-center">
                    <Row xs="2">
                        <Col><Button color="success" type="submit">Search</Button></Col>
                        <Col><Button color="warning" type="reset">Clear</Button></Col>
                    </Row>
            </Container>
            </Form>
            <p>List of All Account Transactions</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>Account No</th>
                        <th>Transaction Type</th>
                        <th>Transaction Amount</th>
                        <th>Transaction Time</th>
                    </tr>
                </thead>
            </Table>
            {transactions.length > 0 ?
                transactions.map((item) => {
                    return <Card>
                        <Table striped bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <td>{JSON.parse(localStorage.getItem('customer')).cust_id}</td>
                                    <td>{JSON.parse(localStorage.getItem('customer')).cust_name}</td>
                                    <td>{acc_number}</td>
                                    <td>{item.type}</td>
                                    <td>{item.trasactionAmount}</td>
                                    <td>{item.timestamp}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                })
                : "No Unverified Transactions Available"
            }

        </div>
    );
    
}

export default Transactions;