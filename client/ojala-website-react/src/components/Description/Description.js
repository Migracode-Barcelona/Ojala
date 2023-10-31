import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import neededImage from "assets/needed.jpg";
import searchImage from "assets/search.jpg";
import inclusiveImage from "assets/inclusive.jpg";
import freeImage from "assets/free.jpg";

function Description() {
  const imageStyle = {
    width: '40%',
    height: '100px',
    display: 'block',
    margin: '0 auto',
  };

  return (
    <Container fluid className="w-75">
      <h1 className="mt-4">¡Ojalá! is...</h1>
      <Row>
        <Col xs={12} md={3} className="mb-3 text-center">
          <img src={neededImage} alt="Needed" style={imageStyle} />
          <h2>Needed</h2>
          <p className="small">
            Other mainstream apps don’t include minority languages like Wolof and Darija.
          </p>
        </Col>

        <Col xs={12} md={3} className="mb-3 text-center">
          <img src={searchImage} alt="In Context" style={imageStyle} />
          <h2>In Context</h2>
          <p className="small">
            Each unit fits the language needs of people on the move on arrival in Spain.
          </p>
        </Col>

        <Col xs={12} md={3} className="mb-3 text-center">
          <img src={inclusiveImage} alt="Inclusive" style={imageStyle} />
          <h2>Inclusive</h2>
          <p className="small">
            Its audio-visual focus is designed so people without written language can also learn.
          </p>
        </Col>

        <Col xs={12} md={3} className="mb-3 text-center">
          <img src={freeImage} alt="Free" style={imageStyle} />
          <h2>Free</h2>
          <p className="small">
            We believe education is a right, not a privilege that everyone must have access to.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Description;
