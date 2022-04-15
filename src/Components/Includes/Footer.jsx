import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo2 from '../../images/footer-logo.png'

const Footer = () => {
  return (
   <footer className="py-3 py-md-3 bg-primary">
    <Container>
        <div className="text-center">
            <Image src={Logo2} className="img-fluid " alt={""} />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" />
          <Nav className="ms-auto me-auto justify-content-center">
            <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/services">Services</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/enquiry">Enquiry</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/contact-us">Contact Us</Nav.Link>
          </Nav>
          <div className="ms-auto me-auto text-white justify-content-center">
              <p className="text-center">Copyright @ 2022 Tselazang Boutique Hotel. Designed & Developed by LDCB</p>
          </div>
    </Container>     
   </footer>
  )
}

export default Footer