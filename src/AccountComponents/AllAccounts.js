import React, { useState,useEffect } from "react";
import { Table,Card } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi"
import { toast } from "react-toastify";

const AllAccounts=()=>{

    useEffect(()=>{
        document.title = "All Accounts";
        getAllAccountsFromServer();
    },[]);

    //function to call Server
    const getAllAccountsFromServer=()=>{
        axios.get(`${base_url}/accounts/getall`).then(
        (response)=>{
            //success
            //console.log(response);
            console.log(response.data);
            toast.success("customers loaded success");
            setAccounts(response.data);
        },
        (error)=>{
            //for error
            console.log(error);
            toast.error("Something went wrong");
        }
        )
    }

    const [accounts,setAccounts] = useState([]);

    return(
        <div>
            <center>
            <h1>All Accounts</h1>
            <p>List of Accounts Register with this Bank are as follows</p>
            </center>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Account Id</th>
                        <th>Account Type</th>
                        <th>Available Balance</th>
                    </tr>
                </thead>
            </Table>
            {accounts.length > 0 ? 
                accounts.map((item)=>
                {
                    return <Card>
                        <Table striped bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <td>{item.acc_number}</td>
                                    <td>{item.acc_type}</td>
                                    <td>{item.acc_balance}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                }) 
                : "No Accounts Available"
            }
        </div>
    );
};

export default AllAccounts;