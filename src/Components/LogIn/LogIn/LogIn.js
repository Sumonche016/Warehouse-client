import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../Firebase.init';
import Social from '../Social/Social';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loading from '../../Shared/Loading/Loading'


const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
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
    const handleLogin = async event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        await signInWithEmailAndPassword(email, pass)
        const { data } = await axios.post('https://boiling-shelf-19002.herokuapp.com/login', { email })
        localStorage.setItem('accesToken', data.acesstoken)
        navigate(from, { replace: true })
    }

    // handle reset password
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('input your email');
        }
    }
    if (loading) {
        return <Loading></Loading>
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
                            error && <p className='text-danger'>{error.message}</p>
                        }
                        <button type='submit' className='btn'>Log In</button>
                    </Form>
                    <p className='naviagte mt-2'> Not Have Account ? <Link className='naviagte-link' to='/signup'>Register Here</Link> </p>
                    <p className='naviagte mt-2'> Forget pass ?<button onClick={handleResetPassword} className='forget text-primary'>Reset Here</button> </p>


                </div>

                <Social></Social>
                <ToastContainer></ToastContainer>

            </div>
        </div>
    );
};

export default LogIn;