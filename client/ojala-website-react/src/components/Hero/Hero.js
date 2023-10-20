import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import headerImage from "assets/ojala-header-image.jpg";

function Hero() {
	return (
		<Container fluid className="d-flex flex-column align-items-center justify-content-center my-5">
		
			<Image src={headerImage} alt="Image" className="w-50"></Image>
			<h1 className="display-1 text-center">Use your <span className="orange-color">native language</span><br></br>to learn <span className="orange-color">Spanish</span></h1>
			<Button className="my-3">Start Now</Button>
		</Container>
	);
}

export default Hero;
