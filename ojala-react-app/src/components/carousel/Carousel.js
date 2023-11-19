import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-multi-carousel";
import responsive from "./responsive";
import "react-multi-carousel/lib/styles.css";

function TheCarousel() {
	return (
		<Container fluid className="mx-auto">
			<Carousel
				responsive={responsive}
				removeArrowOnDeviceType={["tablet", "mobile"]}
				showDots={true}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={4000}
			>
				<Row fluid className="my-5 mx-5 text-center">
					<h2 className="text-center">"The idea of the App is great. Hopefully it can be used to teach language as a tool for integration."</h2>
				</Row>
				<Row fluid className="my-5 mx-5 text-center">

					<h2 className="text-center">"A very useful and necessary presentation."</h2>
				</Row>
				<Row fluid className="my-5 mx-5 text-center">
					<h2 className="text-center">"Una gran idea proveniente de muy buenos profesionales de la lengua. ¡Espero que ayude a muchos!"</h2>

				</Row>
			</Carousel>
		</Container>
	);
};

export default TheCarousel;