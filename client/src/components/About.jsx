import React from "react";
import { Container, Row, Col,Image  } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse
          illum repellat cum dignissimos. Nisi quam numquam at eos ipsum
          mollitia dolorum odio tempora doloribus laudantium? Corrupti,
          expedita. Repellat, ducimus?
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              expedita, voluptatibus dolores dicta rerum mollitia soluta laborum
              iste voluptatum atque aut, accusantium illo. Amet repudiandae,
              excepturi adipisci odit iusto quaerat. Architecto laborum ducimus
              dignissimos, ea, temporibus placeat, accusamus in atque quod quae
              aspernatur rem necessitatibus! Debitis qui, at sed nihil sit porro
              adipisci, natus praesentium fugit, ut maiores repellat aut
              reprehenderit explicabo quam vel minima sequi asperiores quibusdam
              ipsa impedit! Incidunt iusto animi facere obcaecati labore
              doloribus vero aliquid molestiae nemo distinctio ex atque, ab
              mollitia quidem culpa quos soluta a neque commodi ullam? Cum ipsa
              alias inventore perspiciatis minima?
            </p>
          </Col>
          <Col md={6}>
          <Image src="images/about.jpeg" style={{width:"80%",height:"90%",}} />
          </Col>
        </Row>
       
      </Container>
    </>
  );
};

export default About;
