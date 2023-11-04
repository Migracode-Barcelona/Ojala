import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import appPhoneMockup from "assets/ojala_app-phone_mockup.svg";
import googlePlayLogo from "assets/google_play-logo.svg";

function Download({refDownload}) {
	return (
		<Container fluid className="my-5">
			<Row ref={refDownload}>

				<Col
					xs={12}
					md={5}
					className="d-flex flex-column align-self-center align-items-center"
				>
					<h1>Get it now</h1>
					<Button href="https://play.google.com/store/apps/details?id=com.actionforeducation.ojala&hl=es" target="_blank">¡Ojalá! for Android</Button>
					<Image src={googlePlayLogo} className="my-3 w-50" fluid></Image>
				</Col>

				<Col xs={12} md={7}>
					<Image src={appPhoneMockup} fluid></Image>
				</Col>
				
			</Row>
		</Container>
	);
}

export default Download;
