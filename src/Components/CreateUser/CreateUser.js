import React from 'react';
import { Form } from 'react-bootstrap';

const CreateUser = () => {




    const handleCReateUser = (event) => {
        event.preventDefault()

    }


    return (
        <div>
            <h1 className='mb-3 text-center'>Sign Up Here</h1>
            <div className="container w-50">
                <Form className='mx-auto' onSubmit={handleCReateUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <button type='submit' className='btn'>Submit</button>
                </Form>

            </div>

        </div>
    );
};

export default CreateUser;