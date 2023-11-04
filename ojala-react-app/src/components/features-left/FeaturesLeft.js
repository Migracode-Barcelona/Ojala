import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import priceQuestionImage from "assets/text-bubble-cuanto-rtl.png";

function FeaturesLeft() {
	return (
		<Container fluid className="mb-5">
			<Row>

				<Col xs={12} md={6} className="align-self-center text-center">
					<Container fluid className="ms-3">
                        <h1>¡Ojalá! is</h1>
                        <h2>IN 5 LANGUAGES</h2>
                        <h3 className="small">IN5awesomeLANGUAGES</h3>
                        <p>Learn Spanish with ¡Ojalá!<br></br>
                        the app for Android to learn using<br></br>
                        Wolof, الدارجة, الفصحى, Français or English.</p>
                    </Container>
				</Col>
				
				<Col xs={12} md={6}>
					<Image src={priceQuestionImage} fluid></Image>
				</Col>

			</Row>
		</Container>
	);
}

export default FeaturesLeft;
