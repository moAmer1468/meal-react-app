import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Col,Row} from 'react-bootstrap';
import '../indexTwo.css'


export const Header=()=>{
    return (
            <Row>
                <Col className='sm-12 text-center '>
                  <p className='title'>قائمة الــــطعام</p>
                </Col>
            </Row>
    );
}