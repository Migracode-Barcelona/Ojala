import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import textBubbles from "assets/example-text_bubbles.png";
import priceQuestionImage from "assets/text-bubble-cuanto.png";

function FeaturesLeft() {
	return (
		<Container fluid className="mb-5">
			<Row>
				<Col xs={12} md={5} className="align-self-center text-center">
					<Container fluid>
                        <h1>¡Ojalá! is</h1>
                        <h2>IN 5 LANGUAGES</h2>
                        <h3>IN....LANGUAGES</h3>
                        <p>Learn Spanish with ¡Ojalá!<br></br>
                        the app for Android to learn using<br></br>
                        Wolof, الدارجة, الفصحى, Français or English.</p>
                    </Container>
				</Col>
				<Col xs={12} md={7}>
					<Image src={priceQuestionImage} fluid></Image>
				</Col>
			</Row>
		</Container>
	);
}

export default FeaturesLeft;
