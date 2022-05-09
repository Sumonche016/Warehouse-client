import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, price, img, description, supplier } = props.service;

    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className="col-md-4">
            <Card className='mb-4 card'>
                <Card.Img className='image' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price :<strong>{price}$</strong></p>
                    <p>Supplier :<strong>{supplier}</strong></p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <button className='btn' onClick={() => handleNavigate(_id)} >Update</button>
                </Card.Body>
            </Card>
        </div>


    );
};

export default Service;