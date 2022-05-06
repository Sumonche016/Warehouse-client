import React from 'react';

import './Social.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init'
import { useNavigate } from 'react-router-dom';


const Social = () => {
    const [signInWithGoogle, user, , error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div>
                <div className="container">

                    {
                        error && <p className='text-danger mt-2'>{error.message}</p>
                    }
                    <div className='pb-5' onClick={() => signInWithGoogle()}>
                        <span className='or'>or</span>
                        <div className='login-footer p-2'>
                            <div className='footer-inner'>
                                <img className='logo-google' src="logo-google.png" alt="" />
                                <p>Continue With Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Social;