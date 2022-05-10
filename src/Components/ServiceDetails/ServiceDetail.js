import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const ServiceDetail = () => {
    const { id } = useParams()

    const [service, setService] = useState({})
    const [reload, setReload] = useState(true);



    useEffect(() => {
        const url = `https://boiling-shelf-19002.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [reload])

    const { description, img, name, quantity, supplier } = service;




    // update 
    const handleDelivered = () => {

        const quantity = (service.quantity) - 1;
        const newQuantity = quantity

        const url = `https://boiling-shelf-19002.herokuapp.com/inventory/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    toast('success')

                    numberRef.current.value = ''
                    setReload(!reload);
                }

            })
    }


    // restock 
    const numberRef = useRef()
    const reStock = (event) => {
        event.preventDefault()
        const inputNumber = numberRef.current.value;
        const parseNumber = parseInt(inputNumber)
        const oldQuantity = parseInt(service.quantity);
        const newQuantity = parseNumber + oldQuantity

        const url = `https://boiling-shelf-19002.herokuapp.com/inventory/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    toast('success')

                    numberRef.current.value = ''
                    setReload(!reload);
                }

            })
        console.log(service)

    }

    // deliverd 



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
                                <button className='btn' onClick={handleDelivered}>Delivered</button>
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