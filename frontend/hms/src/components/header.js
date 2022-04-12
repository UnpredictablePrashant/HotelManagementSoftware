import React from "react";
import "./style.css"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


class Header extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <Navbar bg="light" expand="lg" >
                    <Container fluid >
                        <Navbar.Brand className="header-title" href="#">Dey's Kitchen</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action2">About Us</Nav.Link>
                                <NavDropdown title="Type" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Veg</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Non-Veg</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        All
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>
                                    Blog
                                </Nav.Link>
                               
                            </Nav>
                            <Form className="d-flex header-form" >
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                                <Nav.Link href="#">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Nav.Link>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}


export default Header;