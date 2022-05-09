import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="dark" class>
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='logo' src="https://demo.vehica.com/wp-content/uploads/2021/09/vehica-logo-dark-retina.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='link-header' as={Link} to='/' href="#features">Home</Nav.Link>
                            <Nav.Link className='link-header' href="#pricing">Service</Nav.Link>
                            <Nav.Link className='link-header' as={Link} to='/blog'>Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className='link-header' as={Link} to='/signup'>Sign Up</Nav.Link>

                            {
                                user ? <Nav.Link className='link-header' onClick={logout}>Sign Out</Nav.Link>
                                    : <Nav.Link className='link-header' as={Link} to='/login'>Log In</Nav.Link>

                            }
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