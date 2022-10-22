//need to style this and have it end up on the very bottom. -marta
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Footer() {
    return (
        <div className="Footer">
            <Navbar>
                <Navbar.Brand href="#Subscribe"style= {{position:"sticky"}}><b>Subscribe to Our Email List</b></Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Footer;