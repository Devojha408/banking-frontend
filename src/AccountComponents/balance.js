import React, { useState, useEffect } from "react";
import { Badge, Card} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Balance = () => {

    useEffect(() => {
        document.title = "Customer Account Balance";
        getAccountBalance();
    }, []);

    const getAccountBalance= () => {
        axios.get(`${base_url}/accounts/customer/${custId}`).then(
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

    const [account, setAccount] = useState([]);
    const custId = JSON.parse(localStorage.getItem('customer')).cust_id;

    

    // const updateCustomers = (cust_id) => {
    //     setCustomers(customers.filter((c) => c.verified !== null));
    // }

    return(
        <div>
            <center>
                <h1>Account and Balance Details</h1>
                <h3>Customer Number: <Badge bg="secondary">{JSON.parse(localStorage.getItem('customer')).cust_id}</Badge></h3>
                <h3>Customer Name: <Badge bg="secondary">{JSON.parse(localStorage.getItem('customer')).cust_name}</Badge></h3>
                {account.length > 0 ?
                    account.map((item) => {
                        return <div>
                            <br></br>
                             <h3>Account Number: <Badge bg="secondary">{item.acc_number}</Badge></h3>
                             <h3>Account Type: <Badge bg="secondary">{item.acc_type}</Badge></h3>
                             <h2>Available Balance: <Badge bg="secondary">{item.acc_balance}</Badge></h2>
                            </div>
                    }): "No verified Account Available"
                }
            </center>
        </div>
    );
    
}

export default Balance;