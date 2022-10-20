//need to style this and have it end up on the very bottom. -marta
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Footer() {
    return (
        <div className="Footer">
            <Navbar style={{textAlign: 'center', backgroundColor: '#black', height: '30px'}} sticky="top">
                <Navbar.Brand href="#Subscribe">Subscribe to Our Email List</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Footer;