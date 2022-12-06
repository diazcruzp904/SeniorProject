import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"
import {Link} from "react-router-dom"

function Login() {

    const initialValues ={
        userEmail:"" ,
        Password: ""
    }
    return(
        <div className="LoginpageContainer">
            <h1>Login</h1>

            <Formik>
                <Form>
                    <label>Email: </label>
                    <Field id="userEmail" name="userEmail" placeholder="Enter your Email"/>

                    <label>Password: </label>
                    <Field id="Password" name="Password" placeholder="Enter your Password"/>

                    <button type="submit">Log in</button>
                </Form>
            </Formik>

            <Link to="/CreateAccount"> CreateAccount </Link>
        </div>
    )
}

export default Login