import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, withFormik } from "formik";
import styled from 'styled-components';
import axios from 'axios';

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const validate = ({ name, email, password, terms }) => {
    const errors = {};
    if(!name) {
        errors.name = 'you need a name!'
    } else if(name.length < 3) {
        errors.name = 'You need a longer name!'
    };
    if(!email) {
        errors.email = 'you need an email!'
    } else if(email.includes('@') === false ) {
        errors.email = 'Not an email!'
    };
    if(!password) {
        errors.password = 'No password entered!'
    } else if(email.length < 8) {
        errors.email = 'Password not accepted'
    };
    return errors;
} 



const UserForm = (props) => {
    const [user, setUser] = useState({});

    const handleSubmit = (values, tools) => {
        axios.post('https://reqres.in/api/users', values)
            .then((res) => {
                setUser(res.data);
                console.log(user);
                tools.resetForm();
            })
            .catch((res) => {
                console.log(res);
            })
    };
    return (
        <FormDiv className='form-div'> 
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validate={validate}
                onSubmit={handleSubmit}
                render={props => {
                    return (
                        <Form>
                            <div>
                                <label htmlFor='name' >
                                    Name:
                                    <Field name='name' type='text' placeholder='enter name' />
                                    <ErrorMessage name='name' component='div'/>
                                </label>
                            </div>

                            <div>
                                <label htmlFor='email'>
                                    Email:
                                    <Field name='email' type='text' placeholder='enter email' />
                                    <ErrorMessage name='email' component='div' />
                                </label>
                            </div>

                            <div>
                                <label htmlFor='password'>
                                    Password:
                                    <Field name='password' type='text' placeholder='enter password' />
                                    <ErrorMessage name='password' component='div' />
                                </label>
                            </div>

                            <div>
                                <label htmlFor='terms' >
                                    Click here to agree to terms of service.
                                    <Field name='terms' type='checkbox' checked={props.terms} />
                                    <ErrorMessage name='terms' component='div' />
                                </label>
                            </div>
                            <input type='submit' />
                        </Form>
                    )
                }}
            />
        </FormDiv>
    )
}

const OnboardingForm = withFormik({
    mapPropsToValues({
        name,
        email,
        password,
        terms
    }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    }
})(UserForm);
export default OnboardingForm;