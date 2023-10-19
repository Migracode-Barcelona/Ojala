import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ojala_logo from "assets/ojala_logo.png";

function Header() {
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);

  const handleButton1Click = () => {
    setButton1Clicked(!button1Clicked);
  };

  const handleButton2Click = () => {
    setButton2Clicked(!button2Clicked);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2}>
          <Container fluid>
            <Image src={ojala_logo} fluid style={{ width: "70px", height: "auto" }} />
          </Container>
        </Col>
        <Col xs={12} md={5} className="align-self-center">
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "10px", marginTop: "auto" }}>لغة الصفحة</p>
            <Button
              variant="primary"
              onClick={handleButton1Click}
              style={{
                backgroundColor: button1Clicked ? "red" : "",
                color: button1Clicked ? "white" : "",
                transition: "0.8s",
                borderRadius: "5px",
                margin: "5px",
              }}
            >
              عربي
            </Button>
          </div>
        </Col>
        <Col xs={12} md={5} className="align-self-center">
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "10px", marginTop: "auto" }}>Idioma de la página</p>
            <Button
              variant="primary"
              onClick={handleButton2Click}
              style={{
                backgroundColor: button2Clicked ? "orange" : "",
                color: button2Clicked ? "white" : "",
                transition: "0.8s",
                borderRadius: "5px",
                margin: "5px",
              }}
            >
              Castellano
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;

