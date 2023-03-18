import React, { useState, useEffect } from "react";
import { Table,Card,Button } from "reactstrap";

import { Link } from "react-router-dom";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const UnverifiedList = () => {

    useEffect(() => {
        document.title = "All Unverified Customers";
        getAllUnverifiedFromServer();
    }, []);

    const getAllUnverifiedFromServer = () => {
        axios.get(`${base_url}/customers/notverified`).then(
            (response) => {
                //success
                //console.log(response);
                console.log(response.data);
                localStorage.setItem('cust', JSON.stringify(response.data));
                toast.success("unverified customers loaded success");
                setCustomers(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }

    const [customers, setCustomers] = useState([]);
    

    return(
        <div>
            <h1>Unverified Customers</h1>
            <p>List of All Unverified Customers Register with this Bank are as follows</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Customer Password</th>
                        <th>Customer Phone</th>
                        <th>Customer AADHAR</th>
                        <th>Operations</th>
                    </tr>
                </thead>
            </Table>

            {customers.length > 0 ?
                customers.map((item) => {
                    return <Card>
                        <Table striped bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <td>{item.cust_id}</td>
                                    <td>{item.cust_name}</td>
                                    <td>{item.cust_email}</td>
                                    <td>{item.cust_password}</td>
                                    <td>{item.cust_phone}</td>
                                    <td>{item.cust_aadharnumber}</td>
                                    <td><Button color="warning"><Link to={"/add-account"} >Verify and Open Account</Link></Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                })
                : "No Unverified Customers Available"
            }

        </div>
    );
    
}

export default UnverifiedList;