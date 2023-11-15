import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import priceQuestionImage from "assets/text-bubble-cuanto.png";
import { useTranslation } from "react-i18next";

function FeaturesLeft() {
	const { t } = useTranslation();

	return (
		<Container fluid className="mb-5">
			<Row>

				<Col xs={12} md={6} className="align-self-center text-center">
					<Container fluid className="ms-3">
                        <h1>{t('ojalaIsIn')}</h1>
                        <h2>{t('languagesNum')}</h2>
                        <h3 className="small">IN5awesomeLANGUAGES</h3>
                        <p>{t('FLText1')}<br></br>
							{t('FLText2')}<br></br>
							{t('FLText3')}</p>
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
