import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Description() {
	return (
		<Container fluid className="description-full-height">
			<h1 className="display-1 my-4">¡Ojalá! is . . .</h1>
			<Row className="mt-4 mx-5">
				<Col xs={12} md={3} className="mb-3 text-center">
					<i className="fas fa-people-arrows icon-description" />
					<h2>Needed</h2>
					<h3 className="small">have faith</h3>
					<p className="small">
						Other apps don’t include minority languages like Wolof and Darija.
					</p>
				</Col>

				<Col xs={12} md={3} className="mb-3 text-center">
					<i className="fas fa-search-location icon-description" />
					<h2>In Context</h2>
					<h3 className="small">have faithalot</h3>
					<p className="small">
						Each unit fits the language needs of people on the move on arrival
						in Spain.
					</p>
				</Col>

				<Col xs={12} md={3} className="mb-3 text-center">
					<i className="fas fa-hands icon-description" />
					<h2>Inclusive</h2>
					<h3 className="small">wewill doit</h3>
					<p className="small">
						Audio-visually designed so people without written language can also
						learn.
					</p>
				</Col>

				<Col xs={12} md={3} className="mb-3 text-center">
					<i className="fas fa-money-bill-alt icon-description" />
					<h2>Free</h2>
					<h3 className="small">letsgo</h3>
					<p className="small">
						We believe education is a right, not a privilege.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Description;
