import React from 'react';
import { Spinner } from 'react-bootstrap';
import './loading.css'

const Loading = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <Spinner className='spinner ' animation="border" variant="primary" />
            </div>
        </div>
    );
};

export default Loading;