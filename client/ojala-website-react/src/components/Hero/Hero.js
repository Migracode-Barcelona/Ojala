import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import headerImage from "assets/ojala-header-image.jpg";

function Hero() {
	return (
		<Container fluid className="d-flex flex-column align-items-center justify-content-center">
			<hr></hr>
			<Image src={headerImage} alt="Image" className="w-25"></Image>
			<h1 className="display-1">Use your <span className="custom-color"> native language</span><br></br>to learn <span className="custom-color">Spanish</span></h1>
			<Button variant="success">Start Now</Button>{' '}
		</Container>
	);
}

export default Hero;
