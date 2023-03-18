import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import base_url from '../api/bootapi';

import {
    Input} from 'reactstrap';

const Login=()=> {

    useEffect(() => {
        document.title = "Login"
    }, []);

    const [data, setData] = useState({});

    //form handler

    const handleForm = (e) => {
        if (data.cust_email==='admin@admin' && data.cust_password === 'admin'){
            toast.success("Logged in SuccessFully");
            console.log(data);
            alert("Admin Logged in SuccessFully");
            window.location.href ="/dashboard/admin";
        }
        else{
            //function to fetch username and password from Customers table
            getPasswordFromServer(data);

        }
        e.preventDefault();
    };

    const getPasswordFromServer = (data) => {
        console.log(data);
        axios.get(`${base_url}/customers/login/${data.cust_email}`).then(
            
            (response) => {
                //success
                console.log(response);
                if(response.data.cust_password==data.cust_password){
                toast.success("password matched");
                console.log("Login success");
                    alert("Customer Logged in SuccessFully");
                    localStorage.setItem('customer', JSON.stringify(response.data));
                    window.location.href = "/dashboard/customer";
                }
                else{
                    toast.success("Wrong username or password");
                console.log("Wrong username orv password");}
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }

    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form className="form" onSubmit={handleForm}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>User Name</label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com" onChange={(e) => {setData({ ...data, cust_email: e.target.value})}}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <Input type="password" name="password" id="examplePassword" placeholder="********" onChange={(e) => { setData({ ...data, cust_password: e.target.value }) }}/>
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Login;