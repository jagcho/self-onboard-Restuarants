import React from "react";
import { Container, Row, Col,Nav } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom'
const Home = () => {
  return (
    <>
     <h4 className="text-center">Food Delivery Partner</h4>
      <Container style={{ marginTop: "30px" }}>
       
        <Row>
          <Col md={6}>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/preview1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/preview2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/preview3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          
          <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Col>
          <Col md={6}>
          <Card className="ms-5" style={{ width: '32rem' }}>
      <Card.Img variant="top" src="images/Background.jpg"  style={{minHeight:"5px"}}/>
      <Card.Body>
       
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-grid gap-2" >
      
        <Button  variant="success">
        <Nav.Link to='/register' as={NavLink}> Join Us</Nav.Link>
        </Button>
        </div>
      </Card.Body>
    </Card>
          </Col>
        </Row>
       
      </Container>
    </>
  );
};

export default Home;
