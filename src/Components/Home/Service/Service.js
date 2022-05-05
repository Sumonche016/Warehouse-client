import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const { name, price, img, description } = props.service;
    return (
        <div className="col-md-4">
            <Card className='mb-4'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{price}$</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>


    );
};

export default Service;