import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import TheCarousel from "components/carousel/Carousel";

function FeaturesLeft() {
	const { t } = useTranslation();

	return (
		<Container fluid className="mb-5 pb-4">
			<Row className="my-auto mx-5">
				<Col xs={12} md={12} className="align-self-center text-center">
					<Container fluid className="ms-3">
                        <h1>{t("feedback")}</h1>
                        <h3 className="small">awesomeLANGUAGEfdsfSawe       someLUAawesomeLANGUAG</h3>
                    </Container>
				</Col>
				
				<TheCarousel />

			</Row>
		</Container>
	);
}

export default FeaturesLeft;
