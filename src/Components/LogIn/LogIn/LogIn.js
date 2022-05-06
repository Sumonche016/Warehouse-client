import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Social from '../Social/Social';
import './Login.css'

const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate()

    // require auth 
    let location = useLocation()
    let from = location?.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true })
    }

    // log in handle
    const handleLogin = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass)
    }


    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div>
                <h1 className='mb-3 text-center'>Sign Up Here</h1>
                <div className="container w-50">
                    <Form className='mx-auto' onSubmit={handleLogin}>
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
                        <button type='submit' className='btn'>Log In</button>
                    </Form>
                    <p className='naviagte mt-2'> Not Have Account ? <Link className='naviagte-link' to='/signup'>Register Here</Link> </p>

                </div>

                <Social></Social>

            </div>
        </div>
    );
};

export default LogIn;