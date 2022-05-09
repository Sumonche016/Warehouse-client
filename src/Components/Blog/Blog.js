import React from 'react';
import { Card } from 'react-bootstrap'

const Blog = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        <Card className='mb-4 card'>
                            <Card.Img className='image' variant="top" src='sql.png' />
                            <Card.Body>
                                <Card.Title> Sql Vs noSql</Card.Title>
                                <Card.Text>
                                    <p>acctually sql support RDBMS relation database management and no sql in non relational database .Nosql  have dynamic schema but sql have fixed or static or predefined schema.SQL is good for complex query bt no sql is not good for complex querys</p>
                                </Card.Text>
                                <button className='btn' >Read More</button>
                            </Card.Body>
                        </Card>
                    </div>  <div className="col-md-4">
                        <Card className='mb-4 card'>
                            <Card.Img className='image' variant="top" src='node.png' />
                            <Card.Body>
                                <Card.Title>javascript and node js</Card.Title>
                                <Card.Text>
                                    <p>Javascript is high level programming language on the other hand node js is just a run time of jvascript its not a programming language its jut a runtime ,js runs on v8,spider money  .Bt nodejs is only  runs on google v8 its written in c++</p>
                                </Card.Text>
                                <button className='btn'>Read More</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card className='mb-4 card'>
                            <Card.Img className='image' variant="top" src='mongo.png' />
                            <Card.Body>
                                <Card.Title>Node Js and MongoDb</Card.Title>
                                <Card.Text>
                                    <p>Node js is server side javascript run time on the other hand mongodb is a database management system where we can create ,update,delete our data with no of cost .If You wanna to make full stack development just by one programminh language ,we should use node js for backend .?</p>
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