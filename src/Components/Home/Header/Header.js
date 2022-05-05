import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='link-header'>Car Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='link-header' href="#features">Features</Nav.Link>
                            <Nav.Link className='link-header' href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='link-header' href="#deets">More deets</Nav.Link>
                            <Nav.Link className='link-header' eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;