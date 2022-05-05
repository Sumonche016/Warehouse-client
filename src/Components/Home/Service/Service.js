import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, price, img, description } = props.service;
    return (
        <div className="col-md-4">
            <Card className='mb-4 card'>
                <Card.Img className='image' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{price}$</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <button className='btn'>Update</button>
                </Card.Body>
            </Card>
        </div>


    );
};

export default Service;