import React, { useState,useEffect } from "react";
import Customer from "./Customer";
import axios from "axios";
import base_url from "../api/bootapi"
import { toast } from "react-toastify";

const AllCustomers=()=>{

    useEffect(()=>{
        document.title = "All Customers";
        getAllCustomersFromServer();
    },[]);

    //function to call Server
    const getAllCustomersFromServer=()=>{
        axios.get(`${base_url}/customers/getall`).then(
        (response)=>{
            //success
            //console.log(response);
            console.log(response.data);
            toast.success("customers loaded success");
            setCustomers(response.data);
        },
        (error)=>{
            //for error
            console.log(error);
            toast.error("Something went wrong");
        }
        )
    }

    const [customers,setCustomers] = useState([]);

    const updateCustomers=(cust_id)=>{
        setCustomers(customers.filter((c)=>c.cust_id !==cust_id));
    }

    return(
        <div>
            <h1>All Customers</h1>
            <p>List of Customers are as follows</p>
            {customers.length > 0 ? 
                customers.map((item)=><Customer key = {item.id} customer = {item} update = {updateCustomers}/>) 
                : "No Customers Available"
            }
        </div>
    );
};

export default AllCustomers;