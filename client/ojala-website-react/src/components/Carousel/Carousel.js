import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ArabicCard from "./Cards/ArabicCard";
import DarijaCard from "./Cards/DarijaCard";
import WolofCard from "./Cards/WolofCard";
import EnglishCard from "./Cards/EnglishCard";
import FrenchCard from "./Cards/FrenchCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./Responsiveness/Responsive";

function TheCarousel() {
	return (
		<Container fluid className="my-3 w-75">
			<Carousel 
				responsive={responsive} 
				removeArrowOnDeviceType={["tablet", "mobile"]}
				>
					<ArabicCard />
					<DarijaCard />
					<WolofCard />
					<EnglishCard />
					<FrenchCard />	
			</Carousel>
		</Container>
	);
};

export default TheCarousel;
