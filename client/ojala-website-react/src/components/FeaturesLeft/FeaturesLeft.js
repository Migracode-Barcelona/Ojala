import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import textBubbles from "assets/example-text_bubbles.png";

function FeaturesLeft() {
	return (
		<Container fluid className="my-4">
			<Row>
				<Col xs={12} md={5} className="align-self-center text-center">
					<Container fluid>
                        <h1>¡Ojalá! is </h1>
                        <h2>IN 4 LANGUAGES</h2>
                        <h3>IN... LANGUAGES</h3>
                        <p>Learn Spanish with the app ¡Ojalá!<br></br>
                        for Android phones using<br></br>
                        Wolof, الدارجة, Français or English.</p>
                    </Container>
				</Col>
				<Col xs={12} md={7}>
					<Image src={textBubbles} fluid></Image>
				</Col>
			</Row>
		</Container>
	);
}

export default FeaturesLeft;
