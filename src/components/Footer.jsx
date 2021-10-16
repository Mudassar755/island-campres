import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import phone from "../assets/images/icon/phone.png";
import skype from "../assets/images/icon/skype.png";
import fb from "../assets/images/icon/fb-footer.png";
import insta from "../assets/images/icon/insta-footer.png";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={4}>
            <h5>Contact</h5>
            <div className="mt-3">
            <p>
              Home Tow <br />
              634 Halvarn Estates Suit 039
            </p>
            <p>
              <span>
                <img src={phone} />
              </span>{" "}
              <strong>8 800 888 80 80</strong>
            </p>
            <p>
              <span>
                <img src={skype} />
              </span>{" "}
              <strong>Logo.Skype</strong>
            </p>
            <div>
              <span>.LOGO</span>
              <span>&copy; 2021 All Rights Reserved</span>
            </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <h5>Follow Us</h5>
            <div className="mt-3">
            <span className="mr-2">
                <a href="#"><img src={fb} alt="fb-icon" width="40" height="40" /></a>
                </span>
            <span>
                <a href="#"><img src={insta} alt="insta-icon" width="40" height="40"/></a>
                </span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <h5>Login\SignUp</h5>
            <Form className="mt-4">
              <Form.Control type="email" placeholder="Enter email" className="mt-2" />

              <Form.Control type="password" placeholder="Password" className="mt-2" />
              <Button variant="outline-dark" type="submit" className="w-100 mt-2">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
