import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup'
import axios from 'axios'



function createAccount() {
    const initialValues = {
        role: "Client",
        userEmail: "",
        userPhone: "",
        password: "",
    }
    const validationSchema = Yup.object().shape({
        userEmail: Yup.string().required("Your Email is Required"),
        userPhone: Yup.number().required("Please input the Right number"),
        password:Yup.string().min(6).required("Please Choose a password that is at least 6 characters"),
    })

    const onSubmit = (data) => {
        axios.post("http:/localhost:5000/api/users/signup", data).then((response) => {
            console.log("created user")
        })

    }

    return (
        <div className="createAccountContainer">
            <h1>Create Account</h1>
            <Formik  
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}
            >
            <Form className="formContainer">

                <label>Email: </label>
                <ErrorMessage name="userEmail" component="span"/>
                <Field 
                    id="inputCreatAccount" 
                    name="userEmail" 
                    placeholder="Enter your Email"
                />

                <label>Phone: </label>
                <ErrorMessage name="userPhone" component="span"/>
                <Field 
                    id="inputCreatAccount" 
                    name="userPhone" 
                    placeholder="Enter your Phone Number"
                />

                <label>Password: </label>
                <ErrorMessage name="password" component="span"/>
                <Field 
                    id="inputCreatAccount" 
                    name="password" 
                    placeholder="Enter your Password"
                />

                <button type="submit">Create Account</button>
            </Form>
        </Formik>
    </div>
    )
}

export default createAccount