// import { Link } from 'gatsby'
import React,{useEffect} from 'react'
import logo from '../assets/images/logo/logo.png'
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import { Link } from 'react-scroll';

const initNetlifyIdentity = () => {
  const script = document.createElement("script");
  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
  script.async = true;
  document.body.appendChild(script)
  console.log("netlifyIdentity")
}
const openNetlifyModal = () => {
  const netlifyIdentity = window.netlifyIdentity;
  
  if(netlifyIdentity){
    netlifyIdentity.open()
  }else{
    console.log("netlifyIdentity is not defined")
  }

}

const Header = () => {
  useEffect(() => {
    initNetlifyIdentity()

  },[initNetlifyIdentity])
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <div className="container">
          <Navbar.Brand>
            <Link to="home" className="navbar-brand">
              TypoCode
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ml-auto">
              <Nav.Item>
                <Nav.Link>
                  {" "}
                  <Link to="home" className="nav-link">
                    Home
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Link>
                {" "}
                <Link to="about" className="nav-link">
                  About Us
                </Link>
              </Nav.Link>
              {/* <Nav.Link >
                {" "}
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </Nav.Link> */}
              <Nav.Link>
                {" "}
                <Link to="blog" className="nav-link">
                  Blogs
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="contact" className="nav-link">
                  Contact Us
                </Link>
              </Nav.Link>
  
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              <Button variant="outline-dark" onClick={() => openNetlifyModal()}>Login / Signup</Button>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
         
         
        </div>
      </Navbar>
    )
}

export default Header
