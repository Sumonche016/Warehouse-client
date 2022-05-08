import React from 'react';
import { Card } from 'react-bootstrap'

const Blog = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card className='mb-4 card'>
                            <Card.Img className='image' variant="top" src='sql.png' />
                            <Card.Body>
                                <Card.Title> Sql Vs noSql</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde ut itaque maxime labore ullam eveniet explicabo illo, voluptatem commodi?</p>
                                </Card.Text>
                                <button className='btn' >Read More</button>
                            </Card.Body>
                        </Card>
                    </div>  <div className="col-md-4">
                        <Card className='mb-4 card'>
                            <Card.Img className='image' variant="top" src='sql.png' />
                            <Card.Body>
                                <Card.Title>javascript and node js</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde ut itaque maxime labore ullam eveniet explicabo illo, voluptatem commodi?</p>
                                </Card.Text>
                                <button className='btn'>Read More</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className='mb-4 card'>
                            <Card.Img className='image' variant="top" src='sql.png' />
                            <Card.Body>
                                <Card.Title> Sql Vs noSql</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde ut itaque maxime labore ullam eveniet explicabo illo, voluptatem commodi?</p>
                                </Card.Text>
                                <button className='btn'>Read More</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;