import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [addUser, { error }] = useMutation(ADD_USER);

    // upstate state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.targer;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //error handling
        try {
            //execute addUser and pass in form variables
            const { data } = await addUser({
                variables: {...formState}
            });
            Auth.login(data.addUser.token);
        } catch(e){
            console.error(e);
        }
    };
    return (
        <h1>Login</h1>
    )

}

export default Signup;