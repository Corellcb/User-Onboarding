import React from 'react';
import { Formik, Form, Field } from "formik";
import styled from 'styled-components';
import * as Yup from 'yup';

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export default function UserForm() {
    return (
        <FormDiv>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values, tools) => {
                    tools.resetForm();
                    alert(`your name is ${values.name} and your email is ${values.email}`)
                }}
                render={props => {
                    return (
                        <Form>
                            <div>
                                <label htmlFor='name' >
                                    Name:
                                    <Field name='name' type='text' placeholder='enter name' />
                                </label>
                            </div>

                            <div>
                                <label htmlFor='email'>
                                    Email:
                                    <Field name='email' type='text' placeholder='enter email' />
                                </label>
                            </div>

                            <div>
                                <label htmlFor='password'>
                                    Password:
                                    <Field name='password' type='text' placeholder='enter password' />
                                </label>
                            </div>

                            <div>
                                <label htmlFor='terms' >
                                    Click here to agree to terms of service.
                                    <Field name='terms' type='checkbox' />
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