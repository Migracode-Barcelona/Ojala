import React from "react";
import Container from "react-bootstrap/Container";
import LanguageCard from "./cards/LanguageCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./responsive";
import cardData from "./cards/CardsData";

function TheCarousel() {
	return (
		<Container fluid className="my-3 w-75">
			<Carousel 
				responsive={responsive} 
				removeArrowOnDeviceType={["tablet", "mobile",]}
				>
					{cardData.map( card => 
						<LanguageCard 
							key={card.id}
							id={card.id}
							image={card.image} 
							title={card.title} 
							text={card.text}
							direction={card.direction}
							/>
					)}
			</Carousel>
		</Container>
	);
};

export default TheCarousel;