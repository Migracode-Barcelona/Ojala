import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import TheCarousel from "components/carousel/Carousel";

function FeaturesLeft() {
	const { t } = useTranslation();

	return (
		<Container fluid className="my-5 w-75">
			<Row className="my-auto">
				<Col xs={12} md={12} className="align-self-center text-center">
					<Container fluid>
                        <h1 className="display-1">{t("feedback")}</h1>
                        <h3 className="small">awesomewesomeUAGawesome</h3>
                    </Container>
				</Col>
				
				<TheCarousel />

			</Row>
		</Container>
	);
}

export default FeaturesLeft;
