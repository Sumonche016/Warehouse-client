import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {
    const { id } = useParams()

    const [service, setService] = useState({})
    console.log(service)
    useEffect(() => {

        // const url = `https://boiling-shelf-19002.herokuapp.com/inventory/${id}`;
        const url = `http://localhost:5000/inventory/${id}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    const { description, img, name, quantity } = service;


    // handleDeliverd
    const handleDeliver = () => {
        let quantity = 20;
        console.log(--quantity)
    }

    return (
        <div>
            <div className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className='img-fluid' src={img} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h1 className='about-tittle'>{name}</h1>
                            <div>
                                <p className='first-para'>{description}</p>

                                <p>Quantity : {quantity}pics</p>
                                <button className='btn' onClick={() => handleDeliver()}>Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;