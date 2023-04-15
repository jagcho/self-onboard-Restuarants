import React from 'react'
import {Navbar,Nav,Container, Image} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand >
        <Nav.Link to='/' as={NavLink}> 
        <Image src="apple-touch-icon.png" alt="no-img" style={{width:"35px",height:"30px"}} />
         
        </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="ms-auto">
          <Nav.Link to='/' as={NavLink}> Home</Nav.Link>
          <Nav.Link to='/register' as={NavLink}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar