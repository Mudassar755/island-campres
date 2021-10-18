import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    {
      blogs: wpCategory(name: { eq: "Blog" }) {
      slug
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
  `);
  return (
    <section className="blog-section" id="blog">
      <Container className="text-center">
        <h2 className="text-center my-5">Blog</h2>
        <Row xs={1} md={2} className="g-4 mt-3">
          {data &&
            data.blogs.posts.nodes.length &&
            data.blogs.posts.nodes.map((blog) => (
              <Col xs={12} sm={12} md={6} lg={6} className="my-3">
                  <Link to={`/${data.blogs.slug}/${blog.slug}`} className="btn-link">
                <Card>
                  <Card.Img
                    variant="top"
                    src={blog.featuredImage.node.sourceUrl}
                  />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.post.shortDescription}</Card.Text>
                  </Card.Body>
                </Card>
                </Link>
              </Col>
            ))}
        </Row>
        <Button variant="dark" className="my-5">
          Load More
        </Button>
      </Container>
    </section>
  );
};

export default BlogSection;
