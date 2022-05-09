import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import './Additem.css'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Additem = () => {

    const nameRef = useRef()
    const imgRef = useRef()
    const supplierRef = useRef()
    const desRef = useRef()
    const priceRef = useRef()

    const handlePost = (event) => {
        event.preventDefault()
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const des = desRef.current.value;
        const price = priceRef.current.value;
        const data = { name, img, des, price }

        const url = `http://localhost:5000/add-item`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast('Add Successful')
                    nameRef.current.value = ''
                    imgRef.current.value = ''
                    desRef.current.value = ''
                    priceRef.current.value = ''
                }
            })

    }
    return (
        <div>
            <div className="container">
                <h2 className='text-center my-3'>Add a Inventory</h2>
                <div className='w-50 mx-auto'>
                    <Form onSubmit={handlePost}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={nameRef} type="text" placeholder="Product Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={imgRef} type="text" placeholder="Image Url" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={supplierRef} type="text" placeholder="Supplier Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <textarea ref={desRef} placeholder='Description' className='w-100 text-area' name="" id="" cols="30" rows="2"></textarea>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={priceRef} type="Number" placeholder="Price $" />
                        </Form.Group>

                        <button className='btn' type='submit'>Submit</button>
                        <ToastContainer></ToastContainer>
                    </Form>

                </div>
            </div>

        </div>
    );
};

export default Additem;