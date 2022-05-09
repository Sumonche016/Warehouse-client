import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useData from '../../../Custom-hook/UseData';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services] = useData();
    const navigate = useNavigate()
    return (
        <div className='py-5 service-area'>
            <div className="container">
                <div className="row">
                    {
                        services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>

            </div>
            <div className='d-flex justify-content-center'>
                <button className=' btn-manage' onClick={() => navigate('/manage-inventory')}>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Services;