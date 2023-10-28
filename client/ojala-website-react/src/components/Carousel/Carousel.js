import React from "react";
import Container from "react-bootstrap/Container";
import LanguageCard from "./Cards/LanguageCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "../../utils/Responsiveness/Responsive";
import cardData from "./Cards/CardsData";


function TheCarousel() {
	return (
		<Container fluid className="my-3 w-75">
			<Carousel 
				responsive={responsive} 
				removeArrowOnDeviceType={["tablet", "mobile",]}
				>
					{cardData.map( card => 
						<LanguageCard 
							image={card.image} 
							title={card.title} 
							text={card.text}
							/>
					)}
			</Carousel>
		</Container>
	);
};

export default TheCarousel;
