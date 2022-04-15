import React from 'react'
import { Container, Navbar, Image, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo1.png'

const Menubar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      id="navbar"
      className="shadow-sm sticky-top bg-white"
    >
      <Container>
        <Navbar.Brand as={Link} to="/tselazang">
          <Image src={Logo} className="img-fluid" alt="" />
        </Navbar.Brand>
        {/* <Nav.Link
          className="btn-sm btn-primary text-white d-block d-md-none"
          as={Link} to="tel:07003395709"
        ><i className="fa fa-phone-volume"></i> 70033 95709
        </Nav.Link> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto"> 
            <Nav.Link as={Link} to="/tselazang" className="border-end border-primary">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="border-end border-primary">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" className="border-end border-primary">Services</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="border-end border-primary">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/enquiry" className="border-end border-primary">Enquiry</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="btn-sm btn-primary text-white rounded-circle p-5 text-center"
              href="tel:07003395709"
            > Book Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Menubar