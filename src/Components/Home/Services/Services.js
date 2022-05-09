import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://boiling-shelf-19002.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

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
                <button className=' btn-manage'>Manage Inventories</button>

            </div>
        </div>
    );
};

export default Services;