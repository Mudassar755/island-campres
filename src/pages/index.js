import React, {useState} from "react"

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
import { Link } from 'react-scroll';
// import "aos/dist/aos.css";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const IndexPage = () => {
  React.useEffect(() => {
    // initNetlifyIdentity()
    AOS.init({
      duration: 1000,
      delay: 50,
      once: true
    });
    AOS.refresh();


  }, [])
  const data = useStaticQuery(graphql`
  {
    wpPage(title: {eq: "Home"}) {
    about {
      aboutTitle
      aboutDescription
      fieldGroupName
    }
    rates {
      rentalRates
      fieldGroupName
      title
    }
  }
  blogs:wpCategory(name: {eq: "Blog"}) {
    name
    posts {
      nodes {
        title
        slug
        content
        post {
          shortDescription
        }
        featuredImage {
          node {
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
  tours:wpCategory(name: {eq: "Tours"}) {
    name
    posts {
      nodes {
        title
        slug
        content
        post {
          shortDescription
        }
        featuredImage {
          node {
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
  }
  `)
  console.log("Dataaaa", data && data.wpPage)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const { name, email, message } = formData;

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = e => {

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then((res) => {
        console.log("res=>>", res)
        // if(res)
        // toast.success("Your response submitted successfully!", {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
      })
      .catch(error => console.error(error));
    resetForm()


    e.preventDefault();
  };
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <Layout>
      {/* <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}></div> */}
      {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
      <section className="hero-section" id="home">
        <div className="overlay"></div>
        <Container fluid>
          <div className="hero-content">
            <Link to="contact"><Button variant="outline-light" className="contact-btn">Contact Us</Button></Link>
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

      <section className="about-section" id="about">
        <Container>
          <Row>
            <h2 className="text-center w-100 my-5"> About Us</h2>
            <Col className="left-col" xs={12} sm={6} md={6} lg={6} >
              <div className="about-img-1"> <img src={aboutImg1} /></div>
              <div className="about-img-2"><img src={aboutImg2} /></div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="p-5">
              <h2>{data && data.wpPage.about && data.wpPage.about.aboutTitle}</h2>
              <p>{data && data.wpPage.about && data.wpPage.about.aboutDescription}</p>
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
          {data && data.tours.posts.nodes.length && data.tours.posts.nodes.map((tour) => (
            <Row className="mt-5">
              <Col sm={12} md={6}><img src={tour.featuredImage.node.sourceUrl} className="w-100" /></Col>
              <Col sm={12} md={6}>
                <h3>{tour.title}</h3>
                <p>{tour.post.shortDescription}</p>
                {/* <p dangerouslySetInnerHTML={{_html: tour.content}}></p> */}
              </Col>
            </Row>
          ))}
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
          <div className="p-3 w-75 p-sm-1">
            <h3>{data && data.wpPage.rates && data.wpPage.rates.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: data && data.wpPage.rates && data.wpPage.rates.rentalRates }}></div>

          </div>
        </Container>
      </section>

      {/*===============================================
                    End Rentals Content Area Design
            ================================================ */}

      {/*===============================================
                    Start Rentals Content Area Design
            ================================================ */}

      <section className="blog-section" id="blog">
        <Container className="text-center">
          <h2 className="text-center my-5">Blog</h2>
          <Row xs={1} md={2} className="g-4 mt-3">
            {data && data.blogs.posts.nodes.length && data.blogs.posts.nodes.map((blog) => (
              <Col xs={12} sm={12} md={6} lg={6} className="my-3">
                <Card>
                  <Card.Img variant="top" src={blog.featuredImage.node.sourceUrl} />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>
                      {blog.post.shortDescription}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
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

      <section className="contact-section" id="contact">
        <Container>
          <h2 className="text-center my-5">Contact Us</h2>
          <Form className="mt-4 text-center" onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col>
                <Form.Control
                 className="form-control"
                 type="text"
                 name="name"
                 value={name}
                 onChange={(e) => handleChange(e)}
                 placeholder="Full name"
                 required
                 className="mt-2" 
                 />
              </Col>
              <Col>
                <Form.Control 
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={(e) => handleChange(e)}
                placeholder="hello@domain.com"
                required
                className="mt-2" />
              </Col>
            </Row>
            {/* <Form.Control type="email" placeholder="Enter email" className="mt-2 w-40" /> */}

            {/* <Form.Control type="password" placeholder="Password" className="mt-2 w-40" /> */}
            <Row className="mt-4">
              <Col>
                <Form.Control 
                as="textarea" 
                rows={3} 
                className="form-control"
                name="message"
                value={message}
                onChange={(e) => handleChange(e)}
                rows={5}
                placeholder="Tell us what we can help you with!"
                required
                />
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
