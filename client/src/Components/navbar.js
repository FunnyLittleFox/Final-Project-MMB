//marta
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './assets/body.PNG';
import {BsCart3} from 'react-icons/bs';
import './App.css';
 
export default function Navigation() {
    return (
        
        <div className = "nav">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        
                    </Navbar.Brand>
                   
                    <Navbar.Collapse id="navbarScroll">
                       
                            <Nav className="flex-grow-1 justify-content-evenly">
                            <Nav.Link className = "home" href="#Home">Home</Nav.Link>
                            <Nav.Link className = "resources" href="https://calendly.com/martabiedes/30min">1 ON 1</Nav.Link>
                        <NavDropdown title="Resources" id="navbarScrollingDropdown">
                            <NavDropdown.Item className = "home" href="https://blogging.org/top-business-blogs/">Blog</NavDropdown.Item>
                            <NavDropdown.Item className = "resources" href="#Tips">Suppliers</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                       
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button size="sm" variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </div>
    )
}