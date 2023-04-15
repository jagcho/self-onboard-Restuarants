import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Image, Nav } from "react-bootstrap";
const ThnakYou = () => {
  return (
    <>
      <Image
        src="https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?cs=srgb&dl=pexels-lukas-616401.jpg&fm=jpg"
        alt="no-image"
        style={{ width: "100%" }}
      />
      <div className="Thankyou">
        <h3> You have Registered Successfully</h3>
        <p className="text-center"> you will Get Onboarded Soon </p>
        <br/>
        <h3 className="text-center"> Thank You</h3>
        <Button className="btn1" variant="success">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
        </Button>
      </div>
    </>
  );
};

export default ThnakYou;
