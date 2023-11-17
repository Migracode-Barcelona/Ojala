import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import howMuchGif from "assets/how-much-is-it.gif"
import { useTranslation } from "react-i18next";

function FeaturesLeft() {
	const { t } = useTranslation();

	return (
		<Container fluid className="mb-5 pb-4">
			<Row>

				<Col xs={12} md={6} className="align-self-center text-center">
					<Container fluid className="ms-3">
                        <h1>{t('languagesNum')}</h1>
                        <h3 className="small">INinin  5555  awesomeLANGUAGESawesomeLUA</h3>
                        <p>{t('FLText1')}<br></br>
							{t('FLText2')}<br></br>
							{t('FLText3')}</p>
                    </Container>
				</Col>
				
				<Col xs={12} md={6}>
					<Image src={howMuchGif} fluid></Image>
				</Col>

			</Row>
		</Container>
	);
}

export default FeaturesLeft;
