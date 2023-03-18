import React, { useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label,Col,Row,Badge,Card} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AdminBalance = () => {

    useEffect(() => {
        document.title = "Balance Enquiry";
    }, []);

    const [acc_number, setAccountno] = useState(0);
    const [account, setAccount] = useState({});

    const handleForm = (e) => {
        console.log(acc_number);
        getAccountBalance();
        alert("Get Balance SuccessFully");
        e.preventDefault();

    };

    const getAccountBalance= () => {
        axios.get(`${base_url}/accounts/balance/${acc_number}`).then(
            (response) => {
                //success
                //console.log(response);
                console.log(response.data);
                toast.success("Account Details loaded success");
                setAccount(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }

    return(
        <div>
            <center>
            <Form onSubmit={handleForm}>
            <FormGroup >
                <Label for="acc_number"> Account Number</Label>
                <Input type="text" placeholder="Enter Account No. here" name="acc_number" id="acc_number" onChange={(e) => { setAccountno(e.target.value ) }} />
            </FormGroup>
            <Container className="text-center">
                    <Row xs="2">
                        <Col><Button color="success" type="submit">Search</Button></Col>
                        <Col><Button color="warning" type="reset">Clear</Button></Col>
                    </Row>
            </Container>
            </Form>
                <h1>Account and Balance Details</h1>
                <br></br>
                <h3>Account Number: <Badge bg="secondary">{account.acc_number}</Badge></h3>
                <h3>Account Type: <Badge bg="secondary">{account.acc_type}</Badge></h3>
                <h1>Available Balance: <Badge bg="secondary">{account.acc_balance}</Badge></h1> 

            </center>
        </div>
    );
    
}

export default AdminBalance;