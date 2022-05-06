import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Social from '../LogIn/Social/Social';



const CreateUser = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate()

    // handle create user
    const handleCReateUser = (event) => {
        event.preventDefault()

        const email = emailRef.current.value;
        const pass = passRef.current.value;
        createUserWithEmailAndPassword(email, pass)
    }

    if (user) {
        navigate('/')
    }
    return (
        <div>
            <h1 className='mb-3 text-center'>Sign Up Here</h1>
            <div className="container w-50">
                <Form className='mx-auto' onSubmit={handleCReateUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    {
                        error && <p>{error.message}</p>
                    }{
                        loading && <p>loading....</p>
                    }


                    <button type='submit' className='btn'>Register</button>

                    <p className='naviagte mt-2'> Already have account ? <Link className='naviagte-link' to='/login'>Log in</Link> </p>

                </Form>

            </div>

            <Social></Social>

        </div>
    );
};

export default CreateUser;