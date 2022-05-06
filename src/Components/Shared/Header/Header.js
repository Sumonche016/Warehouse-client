import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='logo' src="https://demo.vehica.com/wp-content/uploads/2021/09/vehica-logo-dark-retina.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='link-header' as={Link} to='/' href="#features">Home</Nav.Link>
                            <Nav.Link className='link-header' href="#pricing">Service</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='link-header' as={Link} to='/signup' href="#deets">Sign Up</Nav.Link>
                            <Nav.Link className='link-header manage-header' eventKey={2} href="#memes">
                                Manage Items
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;