import * as React from "react"

import Layout from "../components/Layout"
import AOS from 'aos';
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import fb from '../assets/images/icon/fb.png'
import insta from '../assets/images/icon/insta.png'
import aboutImg1 from '../assets/images/about-img1.png'
import aboutImg2 from '../assets/images/about-img2.png'
import rental from '../assets/images/rental-iframe.png'
import tour1 from '../assets/images/tour-1.png'
import tour2 from '../assets/images/tour-2.png'
import tour3 from '../assets/images/tour-3.png'
import blog1 from '../assets/images/blog-1.png'
import blog2 from '../assets/images/blog-2.png'
import blog3 from '../assets/images/blog-3.png'
import blog4 from '../assets/images/blog-4.png'
// import "aos/dist/aos.css";

// markup

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
const IndexPage = () => {
  React.useEffect(() => {
    initNetlifyIdentity()
    AOS.init({
      duration: 1000,
      delay: 50,
      once: true
    });
    AOS.refresh();

   
  }, [])
  //   const data = useStaticQuery(graphql`
  // {
  //   wpPage(title: {eq: "Test"}) {
  //   title
  //   content
  // }
  // }
  // `)
  //   console.log("Dataaaa", data)
  
  return (
    <Layout>
      {/* <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}></div> */}
      {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
      <section className="hero-section">
        <Container fluid>
          <div className="hero-content">
            <Button variant="outline-light" className="contact-btn" onClick={() => openNetlifyModal()}>Contact Us</Button>{' '}
            <div className="text-center my-2">
              <span className="mr-3">
                <a href="#"><img src={fb} alt="fb-icon" width="40" height="40" /></a></span>
              <span>
                <a href="#"><img src={insta} alt="insta-icon" width="40" height="40" /></a>
              </span>
            </div>
          </div>
        </Container>
      </section>
      {/*===============================================
        					End Hero Content Area Design
                ================================================ */}
      {/*===============================================
                    Start About Content Area Design
            ================================================ */}

      <section className="about-section">
        <Container>
          <Row>
            <h2 className="text-center w-100 my-5"> About Us</h2>
            <Col xs={12} sm={6} md={6} lg={6} >
              <div className="about-img-1"> <img src={aboutImg1} /></div>
              <div className="about-img-2"><img src={aboutImg2} /></div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="p-5">
              <h2>JOSHUA TREE & THE MOJAVE</h2>
              <p>With dramatic contrasts of land and sea, striking desert landscapes, remote wilderness, and vibrant culture, Baja has been an icon of overland travel for generations. We invite you to join us in on our guided tour of the Baja Peninsula, with trips focusing</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/*===============================================
                    End About Content Area Design
            ================================================ */}

      {/*===============================================
        					End Hero Content Area Design
                ================================================ */}

      {/*===============================================
                    Start Rentals Content Area Design
            ================================================ */}

      <section className="rental-section">
        <Container>
          <h2 className="text-center my-3">Rentlas</h2>
          <div className="iframe-wrapper">
            <img src={rental} alt="rental iframe" className="h-100 w-100" />
          </div>
        </Container>
      </section>

      {/*===============================================
                    End Rentals Content Area Design
            ================================================ */}

      {/*===============================================
                    Start Tours Content Area Design
            ================================================ */}

      <section className="tour-section">
        <Container>
          <h2 className="text-center my-5">Tours</h2>
          <Row className="mt-5">
            <Col sm={12} md={6}><img src={tour1} className="w-100" /></Col>
            <Col sm={12} md={6}>
              <h3>DEATH VALLEY ASTROPHOTOGRAPHY WORKSHOP WITH ANDY BEST - GUIDED TOUR</h3>
              <p>Join National Geographic photographer, Sony Alpha Ambassador, and ROAM founding member, Andy Best, for a unique photographic workshop and guided overland tour through Death Valley in search of pristine views of the night sky and with one-on-one photographic instruction.</p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={12} md={6}><img src={tour2} className="w-100" /></Col>
            <Col sm={12} md={6}>
              <h3>DEATH VALLEY ASTROPHOTOGRAPHY WORKSHOP WITH ANDY BEST - GUIDED TOUR</h3>
              <p>Join National Geographic photographer, Sony Alpha Ambassador, and ROAM founding member, Andy Best, for a unique photographic workshop and guided overland tour through Death Valley in search of pristine views of the night sky and with one-on-one photographic instruction.</p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={12} md={6}><img src={tour3} className="w-100" /></Col>
            <Col sm={12} md={6}>
              <h3>DEATH VALLEY ASTROPHOTOGRAPHY WORKSHOP WITH ANDY BEST - GUIDED TOUR</h3>
              <p>Join National Geographic photographer, Sony Alpha Ambassador, and ROAM founding member, Andy Best, for a unique photographic workshop and guided overland tour through Death Valley in search of pristine views of the night sky and with one-on-one photographic instruction.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/*===============================================
                    End Tours Content Area Design
            ================================================ */}

      {/*===============================================
                 Start Rates Content Area Design
            ================================================ */}

      <section className="reates-section">
        <Container>
          <h2 className="text-center my-5">Rates</h2>
          <div className="p-3 w-75">
            <h3>Rental Rates</h3>
            <p>
              OUR RATES ARE SUBJECT TO CHANGE BASED ON SEASONAL DEMAND, PLEASE CHECK OUR VEHICLE AVAILABILITY OR CONTACT US DIRECTLY WITH ANY QUESTIONS YOU MIGHT HAVE.
              <br />
              PLEASE NOTE, RATES ARE DETERMINED AS FOLLOWS:
            </p>
            <ul>
              <li>Rentals are assessed on a daily basis, by the calendar day, and not on an hourly basis.</li>
              <li>Each rental offers 150 miles free per day (taken as a total for the entire rental period), with excess miles charged at $ .50 a mile, and an additional mileage supplement of 100 extra miles per day is available for $30 a day.</li>
              <li>Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</li>
              <li>Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</li>
              <li>Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</li>
              <li>Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</li>
              <li>Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</li>
            </ul>
            <h5 className="my-3">Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</h5>
            <ul>
              <li>Rentals are assessed on a daily basis, by the calendar day, and not on an hourly basis.</li>
              <li>Each rental offers 150 miles free per day (taken as a total for the entire rental period), with excess miles charged at $ .50 a mile, and an additional mileage supplement of 100 extra miles per day is available for $30 a day.</li>
              <li>Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</li>
              <li>Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</li>
              <li>Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</li>
              <li>Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</li>
              <li>Minimum rental duration is 3 days (San Francisco) and 5 days (Las Vegas).</li>
            </ul>
          </div>
        </Container>
      </section>

      {/*===============================================
                    End Rentals Content Area Design
            ================================================ */}

      {/*===============================================
                    Start Rentals Content Area Design
            ================================================ */}

      <section className="rental-section">
        <Container className="text-center">
          <h2 className="text-center my-5">Blog</h2>
          <Row xs={1} md={2} className="g-4 mt-3">
            <Col>
              <Card>
                <Card.Img variant="top" src={blog1} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4 mt-3">
            <Col>
              <Card>
                <Card.Img variant="top" src={blog3} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={blog4} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Button variant="dark" className="my-5">Load More</Button>
        </Container>
      </section>

      {/*===============================================
                    End Rentals Content Area Design
            ================================================ */}

      {/*===============================================
                    Start Contact Content Area Design
            ================================================ */}

      <section className="rental-section">
        <Container>
          <h2 className="text-center my-5">Contact Us</h2>
          <Form className="mt-4 text-center">
            <Row>
              <Col>
                <Form.Control placeholder="First name" type="email" placeholder="Enter email" className="mt-2" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" type="password" placeholder="Password" className="mt-2"/>
              </Col>
            </Row>
            {/* <Form.Control type="email" placeholder="Enter email" className="mt-2 w-40" /> */}

            {/* <Form.Control type="password" placeholder="Password" className="mt-2 w-40" /> */}
            <Row>
              <Col>
                <Form.Control as="textarea" rows={3} className="mt-4" />
              </Col>
            </Row>
            <Button variant="dark" type="submit" className="mt-5">
              Submit
            </Button>
          </Form>
        </Container>
      </section>

      {/*===============================================
                    End Contact Content Area Design
            ================================================ */}
    </Layout>
  )
}

export default IndexPage
