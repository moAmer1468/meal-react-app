import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css';
import { useState } from 'react';




 export const AmerNavbar=({fitlerBySearch})=> {
  const [searchVar,changeSearchVarState]=useState('')

const handleSearch=(e)=> {
  // This is used to prevent the browser From not refreshing the page uaAmer
  e.preventDefault();
  // Try to use This one you will find a lot of problems uaAmer
 fitlerBySearch(searchVar);
}

console.log(searchVar);

  return (
    <Navbar expand="lg" className="bg-body-tertiary " style={{backgroundColor:'black'}} >
      <Container className='bg-dark' style={{padding:'20px'}} >
            <div className='nav-bar-style'>
                <h2 className='logo-style'> <a>مطعم جديد</a>
                 <div style={{color:'white'}} className='amer-copy-right'> محمد علاء عامر</div>
                </h2>
               
                <Form>
                    <input type='text' 
                    className='search-style'
                    placeholder='بحث'
                    onChange={(e)=>{ changeSearchVarState(e.target.value) }}
                    value={searchVar}
                    />
                    <button onClick={(e)=>handleSearch(e)} className='search-btn-style'>ابحث</button>
                </Form>
            </div>
      </Container>
    </Navbar>
  );
}

export default AmerNavbar;