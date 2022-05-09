import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {
    const { id } = useParams()

    const [service, setService] = useState({})

    useEffect(() => {

        const url = `https://boiling-shelf-19002.herokuapp.com/inventory/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    const { description, img, name, quantity, supplier } = service;


    // restock 

    const numberRef = useRef()
    const reStock = (event) => {
        event.preventDefault()
        const inputNumber = numberRef.current.value;
        const parseNumber = parseInt(inputNumber)
        // console.log(parseNumber, typeof (parseNumber))

        const oldQuantity = parseInt(service.quantity);
        // console.log(oldQuantity, typeof (oldQuantity))


        const newQuantity = parseNumber + oldQuantity


        const quantity = { newQuantity };

        const url = `https://boiling-shelf-19002.herokuapp.com/inventory/${id}`;
        console.log(id)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
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
                                <p>Quantity :{quantity} pics</p>
                                <p>Supplier :{supplier}</p>
                                <button className='btn'>Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='conatiner'>
                <h2 className='text-center'>Re Stock This Item</h2>
                <Form className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Add Number</Form.Label>
                        <Form.Control ref={numberRef} type="number" />
                    </Form.Group>
                    <button className='btn' onClick={reStock} type='submit'>Submitt</button>
                </Form>
            </div>
        </div>
    );
};

export default ServiceDetail;